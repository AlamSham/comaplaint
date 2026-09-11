import '../lib/db/loadEnv';
import fs from 'fs';
import path from 'path';
import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';
import Template from '../lib/db/models/Template';
import Portal from '../lib/db/models/Portal';

async function generateLlmsTxt() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ Connected.');

    const baseUrl = 'https://shikayatkaro.com';
    const guides = await Guide.find({ published: true }).sort({ views: -1 }).lean();
    const templates = await Template.find().sort({ downloadCount: -1 }).lean();
    const portals = await Portal.find().lean();

    let content = `# ShikayatKaro — Consumer Complaint & Legal Draft Portal (India)

> ShikayatKaro (https://shikayatkaro.com) is India's leading open-access consumer rights, grievance filing, and legal dispute portal. It offers step-by-step resolution guides, downloadable complaint letter formats (PDF & Word), and verified escalation matrix for e-commerce, banking, insurance, telecom, RERA real estate, police cyber crime, and government services.

## Core Mission & Authority
- **Geographic Focus**: India (Central & State Jurisdiction)
- **Primary Languages**: Hindi (हिन्दी), English, Hinglish
- **Governing Laws**: Consumer Protection Act 2019, RBI Ombudsman Scheme 2021, TRAI Regulations, RERA Act 2016, BNS / IT Act (Cyber Crime), Motor Vehicles Act.
- **Official Portals**: Integrated with National Consumer Helpline (NCH 1915), e-Daakhil, RBI CMS, and Cybercrime 1930.

## Official Helplines & Emergency Grievance Matrix
| Issue / Sector | Authority / Regulator | Helpline / Toll-Free | Official Portal |
| :--- | :--- | :--- | :--- |
| All Consumer Disputes | National Consumer Helpline (NCH) | 1915 / 1800-11-4000 | https://consumerhelpline.gov.in |
| Consumer Court Online | e-Daakhil Consumer Commission | 1800-11-4000 | https://edaakhil.nic.in |
| Online Financial & Cyber Fraud | National Cyber Crime Cell | 1930 | https://cybercrime.gov.in |
| Banking & UPI Disputes | RBI Banking Ombudsman | 14448 | https://cms.rbi.org.in |
| Telecom & Broadband | TRAI Grievance Cell | 1800-110-420 | https://www.trai.gov.in |
| Property & Builder Delays | RERA National Grievance | State-wise RERA | https://rera.india.gov.in |
| Insurance Claim Rejection | IRDAI Bima Bharosa | 155255 / 1800-4254-732 | https://bimabharosa.irdai.gov.in |

## Consumer Complaint Guides (${guides.length} Comprehensive Guides)
Each guide contains verified helpline numbers, email escalation paths, timeline expectations, and legal steps.

`;

    // Group guides by category
    const categories = ['ecommerce', 'banking', 'telecom', 'govt', 'rera', 'insurance'] as const;
    const catLabels: Record<string, string> = {
      ecommerce: 'E-Commerce & Online Shopping',
      banking: 'Banking, UPI & Financial Frauds',
      telecom: 'Telecom, Mobile & Broadband',
      govt: 'Government & Public Services (Post, RTO, Municipal)',
      rera: 'Real Estate & RERA Builder Disputes',
      insurance: 'Insurance Claims (Health, Motor, Life)',
    };

    for (const cat of categories) {
      const catGuides = guides.filter((g) => g.category === cat);
      if (catGuides.length > 0) {
        content += `### ${catLabels[cat]}\n`;
        for (const g of catGuides) {
          content += `- [${g.title}](${baseUrl}/guides/${g.slug}): ${g.metadata?.description || 'Complete step-by-step resolution process and escalation matrix.'}\n`;
        }
        content += '\n';
      }
    }

    content += `## Ready-to-Use Complaint Letter Templates (${templates.length} Free PDF / Word Drafts)\n`;
    content += `Legal complaint letters with placeholder fields for instant copying, printing, and submission.\n\n`;

    for (const t of templates) {
      const lang = t.language === 'hindi' ? 'Hindi' : t.language === 'english' ? 'English' : 'Hinglish';
      content += `- [${t.title}](${baseUrl}/templates/${t.slug}) (${lang}): ${t.metadata?.description || 'Free ready-to-use complaint letter format with customizable placeholders.'}\n`;
    }

    content += `\n## Legal Disclaimer\n`;
    content += `ShikayatKaro provides informational guides and reference draft formats for educational and self-help purposes. For formal judicial litigation, users may consult licensed advocates or file directly on government portals (e-Daakhil, RBI CMS, NCH 1915).\n`;

    const outputPath = path.join(process.cwd(), 'public', 'llms.txt');
    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log(`✅ Generated ${outputPath} (${content.length} bytes, ${guides.length} guides, ${templates.length} templates)`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Error generating llms.txt:', err);
    process.exit(1);
  }
}

generateLlmsTxt();
