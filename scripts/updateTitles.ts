import '../lib/db/loadEnv';
import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';

interface TitleUpdate {
  slug: string;
  title?: string;
  metaTitle: string;
  metaDescription: string;
}

const titleUpdates: TitleUpdate[] = [
  // === E-commerce ===
  {
    slug: 'amazon-complete-guide',
    title: 'Amazon Complaint Kaise Kare — 10 Steps + Helpline (2026)',
    metaTitle: 'Amazon Complaint Kaise Kare — 10 Steps + 1800 Helpline Number (2026)',
    metaDescription:
      'Amazon India pe wrong product, refund delay, damaged item ki complaint kaise karein — 10 easy steps, customer care number 1800-3000-9009, aur NCH escalation guide.',
  },
  {
    slug: 'flipkart-complaint-filing',
    title: 'Flipkart Refund Nahi Aaya? Complaint Guide (2026)',
    metaTitle: 'Flipkart Refund Nahi Aaya? Complaint Kaise Kare — Steps + Email Format (2026)',
    metaDescription:
      'Flipkart refund stuck, wrong product, missing item ki complaint process — customer care 1800-208-9898, NCH escalation, aur consumer court filing guide.',
  },
  {
    slug: 'meesho-refund-return-complaint-guide',
    title: 'Meesho Return & Refund Complaint Guide (2026)',
    metaTitle: 'Meesho Refund Nahi Mila? Return Reject Hua? Complaint Guide (2026)',
    metaDescription:
      'Meesho app pe return reject, refund pending ya wrong product milne par complaint kaise karein — Meesho support email, NCH 1915, aur consumer forum steps.',
  },
  {
    slug: 'swiggy-zomato-food-order-dispute-guide',
    title: 'Swiggy & Zomato Food Order Dispute Guide (2026)',
    metaTitle: 'Swiggy Zomato Complaint Kaise Kare — Refund Deny Hua? Grievance Email (2026)',
    metaDescription:
      'Swiggy ya Zomato se kharab khana, missing item, ya bot ne refund deny kiya? Grievance Officer email, NCH complaint, aur consumer forum escalation process.',
  },

  // === Banking ===
  {
    slug: 'bank-banking-complaint-guide',
    title: 'Bank Complaint Kaise Kare — RBI Ombudsman Process (2026)',
    metaTitle: 'Bank Complaint Kaise Kare — RBI Ombudsman Steps + Format (2026)',
    metaDescription:
      'Bank se unauthorized transaction, ATM dispute, loan problem ya poor service? RBI Ombudsman complaint process — 30 day rule, complaint format, aur escalation path.',
  },
  {
    slug: 'upi-failed-transaction-money-deducted-guide',
    title: 'UPI Fail, Paisa Kat Gaya? Wapas Lein — NPCI Rules (2026)',
    metaTitle: 'UPI Transaction Fail Paisa Kat Gaya — Refund Kaise Lein? NPCI + RBI Rules (2026)',
    metaDescription:
      'GPay, PhonePe, Paytm se UPI payment fail hua, account se paisa cut ho gaya? NPCI auto-reversal rule, bank dispute, aur RBI Ombudsman complaint — step by step.',
  },
  {
    slug: 'cyber-fraud-online-scam-urgent-police-bank-complaint-guide',
    title: 'Online Fraud Hua? 1930 Call Karo — Emergency Steps (2026)',
    metaTitle: 'Online Fraud Hua? 1930 Helpline + Bank Account Freeze — Emergency Guide (2026)',
    metaDescription:
      'OTP scam, card fraud, ya unauthorized debit? Pehle 2-3 ghante critical hain — 1930 call karo, bank freeze karwao, cybercrime.gov.in FIR file karo. RBI Zero Liability rule.',
  },

  // === Telecom ===
  {
    slug: 'airteljiovi-mobile-complaint',
    title: 'Jio/Airtel/Vi Network Complaint — TRAI Process (2026)',
    metaTitle: 'Jio Airtel Vi Complaint Kaise Kare — Network Issue + TRAI Escalation (2026)',
    metaDescription:
      'Mobile network down, wrong bill, unauthorized charges ya port nahi ho raha? Jio 198, Airtel 121, Vi 199 helpline + TRAI complaint process step-by-step.',
  },

  // === Government ===
  {
    slug: 'rc-transfer-delay-complaint-guide',
    title: 'RC Transfer Delay — VAHAN Status + RTO Complaint (2026)',
    metaTitle: 'RC Transfer Delay Complaint — VAHAN Status Check + RTO Format (2026)',
    metaDescription:
      'Vehicle sale ke baad RC transfer pending? VAHAN portal status, Form 29/30, RTO complaint format, aur Transport Department grievance — complete guide.',
  },
  {
    slug: 'passport-status-police-verification-delay-complaint-guide',
    title: 'Passport Delay — Police Verification + CPGRAMS Complaint (2026)',
    metaTitle: 'Passport Status Pending? Police Verification Delay Complaint Guide (2026)',
    metaDescription:
      'Passport police verification 15 din se pending? PSK status check, SP office visit, CPGRAMS complaint, aur RPO escalation — step by step process.',
  },

  // === RERA ===
  {
    slug: 'rera-complaint-property-dispute',
    title: 'RERA Complaint Kaise Kare — Builder Delay + Refund (2026)',
    metaTitle: 'RERA Complaint Kaise File Kare — Builder Delay, Refund + Hearing Process (2026)',
    metaDescription:
      'Builder ne possession nahi diya? RERA portal pe complaint kaise karein — state-wise process, documents list, hearing timeline, aur penalty/interest claim guide.',
  },

  // === Insurance ===
  {
    slug: 'insurance-claim-rejection',
    title: 'Insurance Claim Reject Hua? IRDAI Complaint Guide (2026)',
    metaTitle: 'Insurance Claim Reject Hua? IRDAI + Ombudsman Complaint Steps (2026)',
    metaDescription:
      'Health, life ya vehicle insurance claim reject hone par kya kare? Rejection letter analysis, insurer grievance, Bima Bharosa portal, aur Insurance Ombudsman process.',
  },
];

async function updateTitles() {
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();
    console.log('✅ Connected\n');

    let updated = 0;
    let notFound = 0;

    for (const update of titleUpdates) {
      const guide = await Guide.findOne({ slug: update.slug });

      if (!guide) {
        console.log(`⚠️  Guide not found: ${update.slug}`);
        notFound++;
        continue;
      }

      const changes: string[] = [];

      if (update.title && guide.title !== update.title) {
        guide.title = update.title;
        changes.push('title');
      }

      if (guide.metadata.title !== update.metaTitle) {
        guide.metadata.title = update.metaTitle;
        changes.push('meta.title');
      }

      if (guide.metadata.description !== update.metaDescription) {
        guide.metadata.description = update.metaDescription;
        changes.push('meta.description');
      }

      if (changes.length > 0) {
        await guide.save();
        updated++;
        console.log(`✅ Updated: ${update.slug} [${changes.join(', ')}]`);
      } else {
        console.log(`⏭️  No changes: ${update.slug}`);
      }
    }

    console.log(`\n📊 Results: ${updated} updated, ${notFound} not found`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

updateTitles();
