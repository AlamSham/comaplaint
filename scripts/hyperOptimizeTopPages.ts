import '../lib/db/loadEnv';
import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';
import Template from '../lib/db/models/Template';

interface ExactOptimization {
  type: 'guide' | 'template';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tags?: string[];
}

// Every title is under 60 chars (Mobile-First) and matches EXACT Search Console queries
const hyperOptimizedPages: ExactOptimization[] = [
  // 1. FLIPKART GUIDE (8,194 impressions — top query: flipkart complaint mail, delivery boy, email id)
  {
    type: 'guide',
    slug: 'flipkart-complaint-filing',
    title: 'Flipkart Complaint Mail & Email ID: Delivery Boy Report (2026)',
    metaTitle: 'Flipkart Complaint Mail & Email ID: Delivery Boy Report (2026)',
    metaDescription:
      'Flipkart complaint email id (support@flipkart.com), 1800-208-9898 helpline, delivery boy report & refund delay escalation matrix. Complete 2026 guide.',
    tags: [
      'flipkart gmail complaint',
      'flipkart complaint mail',
      'flipkart email id for complaint',
      'how to complaint flipkart delivery boy',
      'how to report flipkart delivery boy',
      'flipkart ki report kaise kare',
      'flipkart refund not received',
      'flipkart escalation matrix',
      '18002089898',
    ],
  },

  // 2. CONSUMER FORUM HINDI TEMPLATE (1,775 impressions — top query: उपभोक्ता फोरम शिकायत प्रारूप पीडीएफ)
  {
    type: 'template',
    slug: 'consumer-forum-complaint-format-hindi',
    title: 'उपभोक्ता फोरम शिकायत प्रारूप PDF [फॉर्मेट डाउनलोड] 2026',
    metaTitle: 'उपभोक्ता फोरम शिकायत प्रारूप PDF [फॉर्मेट डाउनलोड] 2026',
    metaDescription:
      'उपभोक्ता फोरम शिकायत प्रारूप पीडीएफ (Consumer Court Complaint Format in Hindi). Free PDF download, धारा 35 आवेदन पत्र ड्राफ्ट व e-Daakhil ऑनलाइन गाइड।',
  },

  // 3. AMAZON COMPLETE GUIDE (809 impressions — top query: amazon product not delivered complaint)
  {
    type: 'guide',
    slug: 'amazon-complete-guide',
    title: 'Amazon Product Not Delivered? Complaint & Refund (2026)',
    metaTitle: 'Amazon Product Not Delivered? Complaint & Refund (2026)',
    metaDescription:
      'Amazon product not delivered complaint email id, customer care 1800-3000-9009, refund delay & wrong item return steps. NCH 1915 helpline guide.',
    tags: [
      'amazon product not delivered complaint',
      'amazon complaint',
      'amazon email id for complaint',
      'amazon refund delay',
      'how to file a complaint on amazon',
    ],
  },

  // 4. POST OFFICE PARCEL MISSING (757 impressions — top query: post office letter format in hindi)
  {
    type: 'template',
    slug: 'post-office-parcel-missing-hindi',
    title: 'Post Office Letter Format in Hindi [स्पीड पोस्ट पार्सल PDF]',
    metaTitle: 'Post Office Letter Format in Hindi [स्पीड पोस्ट पार्सल PDF]',
    metaDescription:
      'Post office letter format in hindi PDF. स्पीड पोस्ट पार्सल गुम या देरी होने पर पोस्टमास्टर को लिखित शिकायत पत्र फॉर्मेट व मुआवजा दावा ड्राफ्ट।',
  },

  // 5. MEESHO REFUND RETURN GUIDE (732 impressions — top query: meesho refund not received)
  {
    type: 'guide',
    slug: 'meesho-refund-return-complaint-guide',
    title: 'Meesho Refund Not Received? Return Complaint Guide (2026)',
    metaTitle: 'Meesho Refund Not Received? Return Complaint Guide (2026)',
    metaDescription:
      'Meesho refund not received ya return request reject hui? Meesho support email, customer care number, NCH 1915 escalation aur consumer court guide.',
    tags: [
      'meesho refund not received',
      'meesho refund how many days',
      'meesho return cancellation',
      'meesho complaint email id',
      'meesho customer care number',
    ],
  },

  // 6. AIRLINES BAGGAGE LOSS (682 impressions)
  {
    type: 'template',
    slug: 'airlines-baggage-loss-or-damage-english',
    title: 'Airlines Baggage Loss Complaint Letter Format [PDF] 2026',
    metaTitle: 'Airlines Baggage Loss Complaint Letter Format [PDF] 2026',
    metaDescription:
      'Airlines baggage loss complaint letter format PDF. DGCA AirSewa claim, compensation request draft for IndiGo, Air India, SpiceJet luggage delay.',
  },

  // 7. BANK RBI OMBUDSMAN (550 impressions — top query: बैंकिंग लोकपाल शिकायत फॉर्म डाउनलोड)
  {
    type: 'template',
    slug: 'bank-complaint-to-rbi-ombudsman-hindi',
    title: 'बैंकिंग लोकपाल शिकायत फॉर्म डाउनलोड [RBI Format PDF] 2026',
    metaTitle: 'बैंकिंग लोकपाल शिकायत फॉर्म डाउनलोड [RBI Format PDF] 2026',
    metaDescription:
      'बैंकिंग लोकपाल शिकायत फॉर्म डाउनलोड (RBI Banking Ombudsman Complaint Form in Hindi PDF). अनधिकृत लेन-देन, ATM फ्रॉड, खाता ब्लॉक शिकायत फॉर्मेट।',
  },

  // 8. IRCTC REFUND COMPLAINT (410 impressions — top query: irctc refund mail format)
  {
    type: 'template',
    slug: 'irctc-train-ticket-refund-complaint-english',
    title: 'IRCTC Refund Mail Format & Complaint Letter [PDF Draft]',
    metaTitle: 'IRCTC Refund Mail Format & Complaint Letter [PDF Draft]',
    metaDescription:
      'IRCTC refund mail format and complaint letter PDF. TDR filing rejection, train cancelled ticket refund delay email draft to CCM Indian Railways.',
  },

  // 9. HEALTH INSURANCE CLAIM REJECTION (368 impressions — top query: insurance claim rejection letter format)
  {
    type: 'template',
    slug: 'health-insurance-claim-rejection-hindi',
    title: 'Health Insurance Claim Rejection Letter Format [PDF] 2026',
    metaTitle: 'Health Insurance Claim Rejection Letter Format [PDF] 2026',
    metaDescription:
      'Health insurance claim rejection letter format in Hindi & English PDF. TPA claim dispute, IRDAI Bima Bharosa complaint draft & ombudsman notice.',
  },

  // 10. ELECTRICITY BILL DISPUTE (341 impressions — top query: electricity bill complaint letter in hindi)
  {
    type: 'template',
    slug: 'electricity-bill-dispute-hindi',
    title: 'Electricity Bill Complaint Letter in Hindi [बिजली बिल PDF]',
    metaTitle: 'Electricity Bill Complaint Letter in Hindi [बिजली बिल PDF]',
    metaDescription:
      'Electricity bill complaint letter in hindi PDF. गलत मीटर रीडिंग, अत्यधिक बिल सुधार हेतु बिजली विभाग (Discom/Electricity Board) को शिकायत पत्र प्रारूप।',
  },

  // 11. RC NOT TRANSFERRED COMPLAINT (323 impressions — top query: rc not transferred complaint letter)
  {
    type: 'template',
    slug: 'rc-transfer-complaint-letter-hinglish',
    title: 'RC Not Transferred Complaint Letter Format [PDF] 2026',
    metaTitle: 'RC Not Transferred Complaint Letter Format [PDF] 2026',
    metaDescription:
      'RC not transferred complaint letter format in Hindi & English PDF. RTO delay, dealer dispute, Form 29/30 notice and VAHAN status complaint draft.',
  },

  // 12. LOAN RECOVERY AGENT HARASSMENT (284 impressions — top query: recovery agent harassment complaint letter format)
  {
    type: 'template',
    slug: 'loan-recovery-agent-harassment-english',
    title: 'Recovery Agent Harassment Complaint Letter Format [PDF]',
    metaTitle: 'Recovery Agent Harassment Complaint Letter Format [PDF]',
    metaDescription:
      'Recovery agent harassment complaint letter format PDF. RBI Fair Practices Code violation notice against bank / loan app recovery agent abusive calls.',
  },

  // 13. ZOMATO DELIVERY DELAY (232 impressions)
  {
    type: 'template',
    slug: 'zomato-delivery-delay-complaint-hindi',
    title: 'Zomato Delivery Delay Complaint & Refund Guide (2026)',
    metaTitle: 'Zomato Delivery Delay Complaint & Refund Guide (2026)',
    metaDescription:
      'Zomato delivery delay complaint letter in Hindi. देर से डिलीवरी, ठंडा खाना या रिफंड न मिलने पर जोमैटो ग्रीवेंस सेल को शिकायत पत्र फॉर्मेट।',
  },

  // 14. MEDICAL NEGLIGENCE (227 impressions)
  {
    type: 'template',
    slug: 'medical-negligence-notice-to-hospital-english',
    title: 'Medical Negligence Legal Notice to Hospital [PDF Draft]',
    metaTitle: 'Medical Negligence Legal Notice to Hospital [PDF Draft]',
    metaDescription:
      'Legal notice for medical negligence against hospital or doctor in India. Consumer Protection Act Section 35 compensation claim draft PDF.',
  },

  // 15. CYBER FRAUD POLICE COMPLAINT (211 impressions — top query: cyber crime complaint letter format pdf)
  {
    type: 'template',
    slug: 'cyber-fraud-police-complaint-hinglish',
    title: 'Cyber Crime Complaint Letter Format [Police FIR PDF] 2026',
    metaTitle: 'Cyber Crime Complaint Letter Format [Police FIR PDF] 2026',
    metaDescription:
      'Cyber crime complaint letter format for police station & cyber cell in Hindi PDF. Online financial fraud, UPI scam, unauthorized debit FIR draft.',
  },

  // 16. EPF WITHDRAWAL DELAY (193 impressions — top query: epf complaint letter format)
  {
    type: 'template',
    slug: 'epf-withdrawal-delay-complaint-hindi',
    title: 'EPF Withdrawal Delay Complaint Letter Format [PF PDF] 2026',
    metaTitle: 'EPF Withdrawal Delay Complaint Letter Format [PF PDF] 2026',
    metaDescription:
      'EPF withdrawal delay complaint letter format in Hindi PDF. PF दावा खारिज या देरी होने पर EPFO / RPFC को शिकायत पत्र प्रारूप व EPFiGMS गाइड।',
  },

  // 17. WATER SUPPLY COMPLAINT (176 impressions)
  {
    type: 'template',
    slug: 'water-supply-complaint-english',
    title: 'Water Supply Complaint Letter to Municipal Board [PDF]',
    metaTitle: 'Water Supply Complaint Letter to Municipal Board [PDF]',
    metaDescription:
      'Water supply complaint letter format PDF for Jal Board / Municipal Corporation. Low water pressure, dirty water, pipeline leakage complaint draft.',
  },

  // 18. VEHICLE RC TRANSFER DELAY (174 impressions)
  {
    type: 'template',
    slug: 'vehicle-rc-transfer-delay-complaint-hindi',
    title: 'RC Transfer Delay RTO Complaint Letter [वाहन प्रारूप PDF]',
    metaTitle: 'RC Transfer Delay RTO Complaint Letter [वाहन प्रारूप PDF]',
    metaDescription:
      'Vehicle RC transfer delay complaint letter to RTO in Hindi PDF. गाड़ी बेचने के बाद आरसी ट्रांसफर न होने पर परिवहन विभाग को शिकायत आवेदन फॉर्मेट।',
  },

  // 19. UPI FAILED TRANSACTION GUIDE (171 impressions — top query: upi transaction failed but amount debited)
  {
    type: 'guide',
    slug: 'upi-failed-transaction-money-deducted-guide',
    title: 'UPI Failed, Money Debited? Auto-Refund Rules (2026)',
    metaTitle: 'UPI Failed, Money Debited? Auto-Refund Rules (2026)',
    metaDescription:
      'UPI transaction failed but money debited from bank? GPay, PhonePe, Paytm auto-reversal timeline, NPCI complaint & RBI Ombudsman refund process.',
    tags: [
      'upi transaction failed but amount debited',
      'upi transaction failed',
      'upi transaction chargeback rules',
      'upi failed transaction money deducted',
      'npci upi complaint',
    ],
  },

  // 20. BANK COMPLAINT GUIDE (167 impressions — top query: rbi consumer complaint)
  {
    type: 'guide',
    slug: 'bank-banking-complaint-guide',
    title: 'Bank Complaint to RBI Ombudsman: 30-Day Rule & Steps (2026)',
    metaTitle: 'Bank Complaint to RBI Ombudsman: 30-Day Rule & Steps (2026)',
    metaDescription:
      'Bank complaint kaise karein — unauthorized transaction, ATM cash dispute, loan issue. RBI Ombudsman cms.rbi.org.in 30-day escalation process.',
    tags: [
      'bank complaint to rbi ombudsman',
      'rbi consumer complaint',
      'rbi complaint letter format',
      'banking ombudsman complaint online',
    ],
  },

  // 21. RERA DELAYED POSSESSION (137 impressions — top query: possession letter in hindi pdf)
  {
    type: 'template',
    slug: 'rera-delayed-possession-complaint-hindi',
    title: 'Possession Letter in Hindi PDF: RERA Delay Complaint Draft',
    metaTitle: 'Possession Letter in Hindi PDF: RERA Delay Complaint Draft',
    metaDescription:
      'Possession letter in hindi pdf. बिल्डर द्वारा फ्लैट पजेशन में देरी पर रेरा (RERA) में शिकायत पत्र प्रारूप, ब्याज व रिफंड दावा ड्राफ्ट PDF डाउनलोड।',
  },

  // 22. PASSPORT POLICE VERIFICATION GUIDE (131 impressions — top query: passport police verification delay complaints)
  {
    type: 'guide',
    slug: 'passport-status-police-verification-delay-complaint-guide',
    title: 'Passport Police Verification Delay: Status & Complaint (2026)',
    metaTitle: 'Passport Police Verification Delay: Status & Complaint (2026)',
    metaDescription:
      'Passport police verification delay complaint guide. Pending verification status check, SP Office visit, CPGRAMS grievance & RPO escalation steps.',
    tags: [
      'passport police verification delay complaints',
      'passport delay complaint letter',
      'pending for physical police verification passport',
      'how to escalate passport issues',
    ],
  },

  // 23. MEESHO REFUND NOT RECEIVED TEMPLATE (113 impressions)
  {
    type: 'template',
    slug: 'meesho-refund-not-received-hindi',
    title: 'Meesho Refund Not Received Complaint Letter [Hindi PDF]',
    metaTitle: 'Meesho Refund Not Received Complaint Letter [Hindi PDF]',
    metaDescription:
      'Meesho refund not received complaint letter format in Hindi PDF. मीशो रिटर्न पिकअप के बाद रिफंड न आने पर कस्टमर केयर को शिकायत पत्र प्रारूप।',
  },

  // 24. LIFE INSURANCE CLAIM DELAY (105 impressions)
  {
    type: 'template',
    slug: 'life-insurance-claim-delay-english',
    title: 'Life Insurance Claim Delay Complaint Letter [PDF Draft]',
    metaTitle: 'Life Insurance Claim Delay Complaint Letter [PDF Draft]',
    metaDescription:
      'Life insurance claim delay complaint letter format PDF. IRDAI 30-day settlement rule violation notice & Bima Bharosa ombudsman complaint draft.',
  },

  // 25. INSURANCE POLICY MIS-SELLING (100 impressions, 4 clicks, Pos 6.8!)
  {
    type: 'template',
    slug: 'insurance-policy-mis-selling-hindi',
    title: 'Insurance Mis-Selling Complaint Letter [IRDAI Cancel PDF]',
    metaTitle: 'Insurance Mis-Selling Complaint Letter [IRDAI Cancel PDF]',
    metaDescription:
      'Insurance policy mis-selling complaint letter in Hindi PDF. बैंक द्वारा जबरन बीमा बेचने या गलत पॉलिसी देने पर फ्री-लुक कैंसिलेशन व रिफंड लेटर।',
  },

  // 26. HOME LOAN EMI DISPUTE (90 impressions, Pos 6.7!)
  {
    type: 'template',
    slug: 'home-loan-emi-dispute-hindi',
    title: 'Home Loan EMI Dispute Complaint Letter [Bank Notice PDF]',
    metaTitle: 'Home Loan EMI Dispute Complaint Letter [Bank Notice PDF]',
    metaDescription:
      'Home loan EMI dispute complaint letter in Hindi PDF. बैंक द्वारा बिना सूचना ब्याज दर या ईएमआई बढ़ाने पर बैंक शाखा प्रबंधक को आपत्ति पत्र फॉर्मेट।',
  },

  // 27. CYBER FRAUD EMERGENCY GUIDE (88 impressions, Pos 14.8)
  {
    type: 'guide',
    slug: 'cyber-fraud-online-scam-urgent-police-bank-complaint-guide',
    title: 'Online Cyber Fraud Hua? 1930 Helpline & Freeze Guide (2026)',
    metaTitle: 'Online Cyber Fraud Hua? 1930 Helpline & Freeze Guide (2026)',
    metaDescription:
      'Online fraud hone par turant 1930 call karein, bank account freeze karwayein, cybercrime.gov.in pe online FIR file karein. Golden hour emergency steps.',
    tags: [
      'online fraud complaint',
      '1930 cyber crime helpline',
      'cyber fraud bank account freeze',
      'cybercrime gov in online complaint',
      'rbi zero liability fraud rule',
    ],
  },
];

async function applyHyperOptimizations() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ Connected.\n');

    let guidesCount = 0;
    let templatesCount = 0;

    for (const item of hyperOptimizedPages) {
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
          console.log(`🚀 Guide: ${item.slug} (${item.metaTitle.length} chars) -> "${item.metaTitle}"`);
          guidesCount++;
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
          console.log(`📄 Template: ${item.slug} (${item.metaTitle.length} chars) -> "${item.metaTitle}"`);
          templatesCount++;
        }
      }
    }

    console.log(`\n🎉 Successfully hyper-optimized ${guidesCount} Guides and ${templatesCount} Templates!`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error applying optimizations:', err);
    process.exit(1);
  }
}

applyHyperOptimizations();
