import '../lib/db/loadEnv';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';
import Template from '../lib/db/models/Template';
import { CATEGORIES } from '../lib/constants';

const DOMAIN = 'https://shikayatkaro.com';

async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const claim = Buffer.from(
    JSON.stringify({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  ).toString('base64url');

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${claim}`);
  const signature = sign.sign(privateKey, 'base64url');
  const jwt = `${header}.${claim}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`OAuth token generation failed: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

async function main() {
  console.log('\n============================================================');
  console.log('      SHIKAYATKARO - GOOGLE INDEXING API SUBMITTER          ');
  console.log('============================================================\n');

  const keyPath = path.join(process.cwd(), 'service_account.json');
  if (!fs.existsSync(keyPath)) {
    console.error('❌ ERROR: service_account.json not found in root directory!');
    console.error('Please place your Google Cloud Service Account JSON file at:');
    console.error(keyPath);
    process.exit(1);
  }

  const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  console.log(`🔑 Key File Loaded: service_account.json`);
  console.log(`👤 Service Account: ${keyData.client_email}`);

  console.log('\n🔒 Generating OAuth2 token with Google Cloud...');
  const accessToken = await getAccessToken(keyData.client_email, keyData.private_key);
  console.log('✅ OAuth2 Token generated successfully!\n');

  console.log('📦 Fetching all indexable URLs from database...');
  await connectDB();

  const guides = await Guide.find({ published: true }).select('slug').lean();
  const templates = await Template.find().select('slug').lean();

  const staticUrls = [
    `${DOMAIN}/`,
    `${DOMAIN}/complaint-helper`,
    `${DOMAIN}/guides`,
    `${DOMAIN}/templates`,
    `${DOMAIN}/portals`,
    `${DOMAIN}/about`,
    `${DOMAIN}/contact`,
    `${DOMAIN}/faq`,
    `${DOMAIN}/privacy`,
    `${DOMAIN}/terms`,
    `${DOMAIN}/legal-disclaimer`,
  ];

  const categoryUrls = CATEGORIES.map((c) => `${DOMAIN}/guides/category/${c}`);
  const guideUrls = guides.map((g) => `${DOMAIN}/guides/${g.slug}`);
  const templateUrls = templates.map((t) => `${DOMAIN}/templates/${t.slug}`);

  const allUrls = Array.from(new Set([...staticUrls, ...categoryUrls, ...guideUrls, ...templateUrls]));

  console.log(`📊 Total Discovered URLs: ${allUrls.length}`);
  console.log(`   • Static & Portal Pages: ${staticUrls.length}`);
  console.log(`   • Category Hubs: ${categoryUrls.length}`);
  console.log(`   • Legal & Consumer Guides: ${guideUrls.length}`);
  console.log(`   • Complaint Templates: ${templateUrls.length}`);

  console.log('\n🚀 Starting submission to Google Indexing API (URL_UPDATED)...\n');

  let successCount = 0;
  let failCount = 0;
  const errors: { url: string; error: string }[] = [];

  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    const progress = `[${i + 1}/${allUrls.length}]`;

    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          url,
          type: 'URL_UPDATED',
        }),
      });

      const responseData = await res.json();

      if (res.ok) {
        successCount++;
        console.log(`✅ ${progress} [${res.status}] ${url}`);
      } else {
        failCount++;
        const errorMsg = responseData?.error?.message || res.statusText;
        console.error(`❌ ${progress} [${res.status}] ${url} -> ${errorMsg}`);
        errors.push({ url, error: errorMsg });

        // If permission denied, stop early with helpful guidance
        if (res.status === 403) {
          console.error('\n⚠️ PERMISSION DENIED (HTTP 403):');
          console.error(`Please ensure "${keyData.client_email}" is added as an OWNER in Google Search Console for shikayatkaro.com!`);
          break;
        }
      }
    } catch (err: any) {
      failCount++;
      console.error(`❌ ${progress} Network Error for ${url}:`, err.message);
      errors.push({ url, error: err.message });
    }

    // Small 80ms delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 80));
  }

  console.log('\n============================================================');
  console.log('                  SUBMISSION SUMMARY                        ');
  console.log('============================================================');
  console.log(`✅ Successfully Submitted: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);

  if (errors.length > 0 && errors[0].error.includes('Permission')) {
    console.log('\n👉 Next action: Ensure the service account email is set to "Owner" in Google Search Console.');
  } else if (successCount > 0) {
    console.log('\n🎉 All URLs pushed to Googlebot! Google will crawl and index these pages rapidly.');
  }

  process.exit(0);
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
