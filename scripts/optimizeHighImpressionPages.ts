import '../lib/db/loadEnv';
import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';
import Template from '../lib/db/models/Template';

interface TargetOptimization {
  type: 'guide' | 'template';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tags?: string[];
}

const highImpressionTargets: TargetOptimization[] = [
  // 1. FLIPKART GUIDE (8,194 impressions — Mobile title under 60 chars)
  {
    type: 'guide',
    slug: 'flipkart-complaint-filing',
    title: 'Flipkart Complaint: Email ID, Delivery Boy & Refund (2026)',
    metaTitle: 'Flipkart Complaint: Email ID, Delivery Boy & Refund (2026)',
    metaDescription:
      'Flipkart complaint email id (support@flipkart.com), 1800-208-9898 helpline, delivery boy report & refund delay escalation matrix. Complete 2026 guide.',
    tags: [
      'flipkart complaint',
      'flipkart gmail complaint',
      'flipkart complaint mail',
      'flipkart email id for complaint',
      'how to complaint flipkart delivery boy',
      'how to report flipkart delivery boy',
      'flipkart refund',
      'flipkart customer care number',
      'flipkart escalation matrix',
      '18002089898',
      'flipkart ki report kaise kare',
      'consumer court flipkart',
    ],
  },

  // 2. CONSUMER FORUM HINDI TEMPLATE (1,775 impressions, 93 clicks)
  {
    type: 'template',
    slug: 'consumer-forum-complaint-format-hindi',
    title: 'उपभोक्ता फोरम शिकायत प्रारूप PDF Download (2026 Format)',
    metaTitle: 'उपभोक्ता फोरम शिकायत प्रारूप PDF Download (2026 Format)',
    metaDescription:
      'उपभोक्ता फोरम शिकायत प्रारूप पीडीएफ (Consumer Court Complaint Format in Hindi). Free PDF download, धारा 35 आवेदन पत्र ड्राफ्ट व e-Daakhil गाइड।',
  },

  // 3. AMAZON COMPLETE GUIDE (809 impressions)
  {
    type: 'guide',
    slug: 'amazon-complete-guide',
    title: 'Amazon Complaint: Email ID, Refund & Helpline (2026)',
    metaTitle: 'Amazon Complaint: Email ID, Refund & Helpline (2026)',
    metaDescription:
      'Amazon India complaint email id, customer care 1800-3000-9009, refund delay & wrong item return steps. National Consumer Helpline (1915) guide.',
    tags: [
      'amazon complaint',
      'amazon product not delivered complaint',
      'amazon refund delay',
      'amazon customer care number',
      'amazon email id for complaint',
      'amazon grievance officer',
      'nch 1915 amazon',
    ],
  },

  // 4. POST OFFICE PARCEL MISSING (757 impressions)
  {
    type: 'template',
    slug: 'post-office-parcel-missing-hindi',
    title: 'डाकघर पार्सल गुम शिकायत पत्र [PDF Download] 2026 Draft',
    metaTitle: 'डाकघर पार्सल गुम शिकायत पत्र [PDF Download] 2026 Draft',
    metaDescription:
      'Post Office parcel missing complaint letter in Hindi PDF. स्पीड पोस्ट पार्सल गुम या देरी की पोस्टमास्टर को लिखित शिकायत फॉर्मेट व मुआवजा दावा।',
  },

  // 5. MEESHO RETURN & REFUND GUIDE (732 impressions)
  {
    type: 'guide',
    slug: 'meesho-refund-return-complaint-guide',
    title: 'Meesho Refund Nahi Aaya? Helpline, Email & Return Guide',
    metaTitle: 'Meesho Refund Nahi Aaya? Helpline, Email & Return Guide',
    metaDescription:
      'Meesho return rejected ya refund pending? Meesho support email, customer care number, NCH 1915 escalation aur consumer forum complaint steps 2026.',
    tags: [
      'meesho refund not received',
      'meesho complaint',
      'meesho return rejected',
      'meesho customer care number',
      'meesho support email id',
      'meesho complaint kaise kare',
    ],
  },

  // 6. AIRLINES BAGGAGE LOSS / DAMAGE (682 impressions, 10 clicks)
  {
    type: 'template',
    slug: 'airlines-baggage-loss-or-damage-english',
    title: 'Airline Baggage Loss Complaint [PDF Download] 2026 Format',
    metaTitle: 'Airline Baggage Loss Complaint [PDF Download] 2026 Format',
    metaDescription:
      'Airline lost or damaged baggage complaint letter format PDF. DGCA AirSewa claim, compensation request draft for IndiGo, Air India, SpiceJet.',
  },

  // 7. BANK COMPLAINT TO RBI OMBUDSMAN (550 impressions)
  {
    type: 'template',
    slug: 'bank-complaint-to-rbi-ombudsman-hindi',
    title: 'बैंकिंग लोकपाल शिकायत फॉर्म PDF [Download Draft] 2026',
    metaTitle: 'बैंकिंग लोकपाल शिकायत फॉर्म PDF [Download Draft] 2026',
    metaDescription:
      'बैंकिंग लोकपाल शिकायत प्रारूप (RBI Ombudsman Complaint Form in Hindi PDF). अनधिकृत लेन-देन, ATM फ्रॉड, लोन विवाद हेतु रेडी ड्राफ्ट डाउनलोड करें।',
  },

  // 8. HEALTH INSURANCE CLAIM REJECTION (368 impressions)
  {
    type: 'template',
    slug: 'health-insurance-claim-rejection-hindi',
    title: 'Insurance Claim Rejection Letter [PDF Download] 2026',
    metaTitle: 'Insurance Claim Rejection Letter [PDF Download] 2026',
    metaDescription:
      'Health insurance claim rejection complaint letter format in Hindi & English PDF. IRDAI Bima Bharosa complaint draft & ombudsman escalation steps.',
  },

  // 9. ELECTRICITY BILL DISPUTE (341 impressions, 10 clicks)
  {
    type: 'template',
    slug: 'electricity-bill-dispute-hindi',
    title: 'बिजली बिल गड़बड़ी शिकायत पत्र [PDF Download] 2026 Draft',
    metaTitle: 'बिजली बिल गड़बड़ी शिकायत पत्र [PDF Download] 2026 Draft',
    metaDescription:
      'Electricity bill dispute complaint letter in Hindi PDF. गलत मीटर रीडिंग, अत्यधिक बिल सुधार हेतु बिजली विभाग (Discom) को शिकायत पत्र फॉर्मेट।',
  },

  // 10. RC TRANSFER COMPLAINT LETTER (323 impressions, 10 clicks)
  {
    type: 'template',
    slug: 'rc-transfer-complaint-letter-hinglish',
    title: 'RC Transfer Complaint Letter [Free PDF Download] 2026',
    metaTitle: 'RC Transfer Complaint Letter [Free PDF Download] 2026',
    metaDescription:
      'Free RC transfer complaint letter format in Hindi & English PDF. RTO delay, dealer dispute, Form 29/30 notice and VAHAN status complaint draft.',
  },

  // 11. LOAN RECOVERY AGENT HARASSMENT (284 impressions)
  {
    type: 'template',
    slug: 'loan-recovery-agent-harassment-english',
    title: 'Recovery Agent Harassment Complaint [PDF Download] 2026',
    metaTitle: 'Recovery Agent Harassment Complaint [PDF Download] 2026',
    metaDescription:
      'Recovery agent harassment complaint letter format PDF. RBI Fair Practices Code violation notice against bank / loan app recovery agent abusive calls.',
  },

  // 12. RERA DELAYED POSSESSION (137 impressions)
  {
    type: 'template',
    slug: 'rera-delayed-possession-complaint-hindi',
    title: 'RERA Possession Delay Letter [PDF Download] 2026 Draft',
    metaTitle: 'RERA Possession Delay Letter [PDF Download] 2026 Draft',
    metaDescription:
      'RERA delayed possession complaint letter in Hindi PDF. बिल्डर द्वारा पजेशन में देरी पर ब्याज व रिफंड हेतु रेरा शिकायत प्रारूप डाउनलोड करें।',
  },
];

async function optimizePages() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ Connected.');

    for (const item of highImpressionTargets) {
      if (item.type === 'guide') {
        const guide = await Guide.findOne({ slug: item.slug });
        if (guide) {
          guide.title = item.title;
          guide.metadata = {
            title: item.metaTitle,
            description: item.metaDescription,
            ogImage: guide.metadata?.ogImage,
          };
          if (item.tags) {
            guide.tags = Array.from(new Set([...(guide.tags || []), ...item.tags]));
          }
          await guide.save();
          console.log(`✅ Optimized Guide: ${item.slug} -> "${item.metaTitle}"`);
        } else {
          console.log(`⚠️ Guide not found: ${item.slug}`);
        }
      } else {
        const template = await Template.findOne({ slug: item.slug });
        if (template) {
          template.title = item.title;
          template.metadata = {
            title: item.metaTitle,
            description: item.metaDescription,
          };
          await template.save();
          console.log(`✅ Optimized Template: ${item.slug} -> "${item.metaTitle}"`);
        } else {
          console.log(`⚠️ Template not found: ${item.slug}`);
        }
      }
    }

    console.log('\n🎉 High-impression pages optimization complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error optimizing pages:', err);
    process.exit(1);
  }
}

optimizePages();
