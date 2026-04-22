// Load environment variables FIRST before any imports
import './loadEnv';

import { connectDB } from './mongoose';
import Guide from './models/Guide';
import Template from './models/Template';
import Portal from './models/Portal';
import { slugify } from '../utils/slugify';
import { templatesData } from './seedTemplates';

// Seed data for portals
const portalsData = [
  {
    name: 'National Consumer Helpline (NCH)',
    category: 'govt',
    url: 'https://consumerhelpline.gov.in',
    description: 'Central government portal for consumer complaints across all sectors',
    phone: '1800-11-4000',
    isActive: true,
  },
  {
    name: 'e-Daakhil Consumer Court',
    category: 'govt',
    url: 'https://edaakhil.nic.in',
    description: 'Online filing of consumer complaints in consumer courts',
    phone: '1800-11-4000',
    isActive: true,
  },
  {
    name: 'TRAI - Telecom Complaints',
    category: 'telecom',
    url: 'https://www.trai.gov.in',
    description: 'Telecom Regulatory Authority of India for mobile and internet complaints',
    phone: '1800-110-420',
    isActive: true,
  },
  {
    name: 'RBI Ombudsman',
    category: 'banking',
    url: 'https://cms.rbi.org.in',
    description: 'Reserve Bank of India Banking Ombudsman for banking complaints',
    phone: '1800-22-1912',
    isActive: true,
  },
  {
    name: 'RERA National Portal',
    category: 'rera',
    url: 'https://rera.india.gov.in',
    description: 'Real Estate Regulatory Authority for property disputes',
    phone: '011-23061014',
    isActive: true,
  },
  {
    name: 'IRDA - Insurance Complaints',
    category: 'insurance',
    url: 'https://www.irdai.gov.in',
    description: 'Insurance Regulatory and Development Authority for insurance complaints',
    phone: '155255',
    isActive: true,
  },
];

// Seed data for guides
const guidesData = [
  {
    title: 'Amazon पर शिकायत कैसे दर्ज करें - Complete Guide',
    category: 'ecommerce',
    language: 'hinglish',
    content: `Amazon India पर product या service से related complaint file करना बहुत आसान है। Ye guide आपको step-by-step बताएगी कि कैसे आप अपनी complaint effectively दर्ज कर सकते हैं।

**Common Issues:**
- Wrong product delivery
- Damaged या defective items
- Refund नहीं मिलना
- Seller से response नहीं मिलना
- Fake या counterfeit products

**Important Documents:**
- Order ID और invoice
- Product photos (अगर damaged है)
- Communication screenshots
- Payment proof

**Timeline:**
- First response: 24-48 hours
- Resolution: 7-10 days
- Refund processing: 5-7 business days`,
    steps: [
      'Amazon app या website पर login करें',
      'Your Orders section में जाएं',
      'Problem वाले order को select करें',
      'Get Help या Problem with Order पर click करें',
      'Issue type select करें (wrong item, damaged, etc.)',
      'Details भरें और photos upload करें',
      'Submit करें और complaint number note करें',
      'Email confirmation check करें',
      'Customer care से follow-up करें (1800-3000-9009)',
      'अगर resolve नहीं हो तो NCH portal पर complaint करें',
    ],
    tags: ['amazon', 'ecommerce', 'online shopping', 'refund', 'return'],
    metadata: {
      title: 'Amazon Complaint Guide - शिकायत कैसे करें | Consumer Portal',
      description: 'Amazon India पर complaint कैसे file करें - complete step-by-step guide in Hindi',
    },
    published: true,
  },
  {
    title: 'Flipkart Complaint Filing - फ्लिपकार्ट शिकायत गाइड',
    category: 'ecommerce',
    language: 'hinglish',
    content: `Flipkart पर shopping करते समय अगर कोई problem आती है तो आप easily complaint file कर सकते हैं। Ye comprehensive guide है Flipkart complaints के लिए।

**Common Problems:**
- Product quality issues
- Delivery delays
- Missing items
- Wrong size/color delivery
- Seller fraud

**Required Information:**
- Order number
- Product details
- Issue description
- Supporting photos/videos

**Contact Methods:**
- Customer care: 1800-208-9898
- Email: support@flipkart.com
- App/Website complaint form`,
    steps: [
      'Flipkart app open करें या website पर जाएं',
      'My Orders में जाएं',
      'Problem वाला order select करें',
      'Need Help पर click करें',
      'Issue category choose करें',
      'Detailed description लिखें',
      'Photos/videos attach करें',
      'Submit complaint',
      'Complaint ID save करें',
      'Resolution के लिए 24-48 hours wait करें',
    ],
    tags: ['flipkart', 'ecommerce', 'online shopping', 'customer care'],
    metadata: {
      title: 'Flipkart Complaint Guide | फ्लिपकार्ट शिकायत कैसे करें',
      description: 'Flipkart पर complaint file करने का complete process - Hindi guide',
    },
    published: true,
  },
  {
    title: 'Bank में शिकायत कैसे करें - Banking Complaint Guide',
    category: 'banking',
    language: 'hinglish',
    content: `Banking services से related कोई भी problem हो तो आप RBI Ombudsman के through complaint कर सकते हैं। Ye guide banking complaints के लिए है।

**Common Banking Issues:**
- Unauthorized transactions
- ATM disputes
- Loan problems
- Credit card issues
- Poor customer service
- Account closure problems

**Documents Needed:**
- Account details
- Transaction records
- Complaint reference number from bank
- Communication proof with bank

**Important Points:**
- पहले bank को complaint करें
- 30 days wait करें bank response के लिए
- फिर RBI Ombudsman approach करें`,
    steps: [
      'अपने bank branch में written complaint दें',
      'Complaint acknowledgment लें',
      '30 days तक bank response wait करें',
      'अगर unsatisfied हैं तो RBI Ombudsman portal पर जाएं',
      'Online complaint form भरें',
      'सभी documents upload करें',
      'Complaint submit करें',
      'Reference number note करें',
      'Email confirmation check करें',
      'Ombudsman decision के लिए wait करें (30-60 days)',
    ],
    tags: ['banking', 'rbi', 'ombudsman', 'bank complaint', 'financial'],
    metadata: {
      title: 'Banking Complaint Guide - RBI Ombudsman | Consumer Portal',
      description: 'Bank में complaint कैसे करें - RBI Ombudsman process in Hindi',
    },
    published: true,
  },
  {
    title: 'Airtel/Jio/Vi Mobile Complaint - टेलीकॉम शिकायत गाइड',
    category: 'telecom',
    language: 'hinglish',
    content: `Mobile network या internet service से problem है? TRAI के through complaint करें। Ye guide telecom complaints के लिए है।

**Common Telecom Issues:**
- Network problems
- Bill disputes
- Unauthorized charges
- Poor customer service
- Plan changes without consent
- Internet speed issues

**Contact Details:**
- Airtel: 121
- Jio: 198
- Vi (Vodafone Idea): 199
- TRAI: 1800-110-420

**Important:**
- पहले operator को complaint करें
- Complaint number note करें
- 7 days wait करें
- फिर TRAI approach करें`,
    steps: [
      'अपने operator को call/email करें',
      'Complaint register करें',
      'Complaint reference number लें',
      '7 days तक resolution wait करें',
      'अगर unsatisfied हैं तो TRAI portal पर जाएं',
      'Consumer complaint form भरें',
      'Operator complaint number enter करें',
      'Issue details provide करें',
      'Submit complaint',
      'TRAI से response wait करें (30 days)',
    ],
    tags: ['telecom', 'mobile', 'airtel', 'jio', 'vodafone', 'trai'],
    metadata: {
      title: 'Telecom Complaint Guide - TRAI | Mobile Network Issues',
      description: 'Mobile network complaint कैसे करें - TRAI process in Hindi',
    },
    published: true,
  },
  {
    title: 'RERA Complaint - Property Dispute में शिकायत कैसे करें',
    category: 'rera',
    language: 'hinglish',
    content: `Real estate में problem है? Builder delivery नहीं कर रहा? RERA complaint file करें। Ye comprehensive guide है property disputes के लिए।

**Common RERA Issues:**
- Delayed possession
- Builder not delivering promised amenities
- Quality issues
- Refund problems
- Agreement violations
- Misleading advertisements

**Documents Required:**
- Sale agreement copy
- Payment receipts
- Builder correspondence
- Project RERA registration number
- Photos/videos of issues

**Timeline:**
- Complaint filing: Online
- Hearing: 30-60 days
- Decision: 60-90 days`,
    steps: [
      'अपने state का RERA portal खोलें',
      'Register as complainant',
      'Login करें',
      'File new complaint',
      'Project RERA number enter करें',
      'Builder details भरें',
      'Detailed grievance लिखें',
      'सभी documents upload करें',
      'Submit complaint',
      'Hearing date के लिए wait करें',
    ],
    tags: ['rera', 'property', 'real estate', 'builder', 'flat'],
    metadata: {
      title: 'RERA Complaint Guide - Property Dispute | Consumer Portal',
      description: 'RERA में complaint कैसे file करें - complete Hindi guide',
    },
    published: true,
  },
  {
    title: 'Insurance Claim Rejection - बीमा शिकायत कैसे करें',
    category: 'insurance',
    language: 'hinglish',
    content: `Insurance claim reject हो गया? IRDA Ombudsman के through complaint करें। Ye guide insurance disputes के लिए है।

**Common Insurance Issues:**
- Claim rejection
- Delayed claim settlement
- Mis-selling of policies
- Premium disputes
- Policy cancellation issues
- Poor service quality

**Documents Needed:**
- Policy document
- Claim rejection letter
- Medical reports (health insurance)
- Communication with insurance company
- Premium payment receipts

**Process:**
- First approach insurance company
- Wait for 30 days
- Then file IRDA complaint`,
    steps: [
      'Insurance company को written complaint भेजें',
      'Complaint acknowledgment लें',
      '30 days wait करें company response के लिए',
      'IRDA Ombudsman portal पर जाएं',
      'Online complaint form भरें',
      'Policy details enter करें',
      'Rejection reason explain करें',
      'सभी documents upload करें',
      'Submit complaint',
      'Ombudsman decision wait करें (3 months)',
    ],
    tags: ['insurance', 'irda', 'claim', 'health insurance', 'life insurance'],
    metadata: {
      title: 'Insurance Complaint Guide - IRDA Ombudsman | Claim Rejection',
      description: 'Insurance claim reject होने पर complaint कैसे करें - IRDA process',
    },
    published: true,
  },
];

export async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    await connectDB();
    console.log('✅ Connected to database');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Guide.deleteMany({});
    await Template.deleteMany({});
    await Portal.deleteMany({});
    console.log('✅ Existing data cleared');

    // Drop old text indexes that might have language conflicts
    try {
      await Guide.collection.dropIndex('title_text_content_text_tags_text');
    } catch (e) {
      // Index might not exist, ignore
    }
    try {
      await Template.collection.dropIndex('title_text_content_text');
    } catch (e) {
      // Index might not exist, ignore
    }
    console.log('✅ Old indexes dropped');

    // Seed portals
    console.log('📍 Seeding portals...');
    const portalsWithSlugs = portalsData.map(portal => ({
      ...portal,
      slug: slugify(portal.name),
    }));
    const portals = await Portal.insertMany(portalsWithSlugs);
    console.log(`✅ Seeded ${portals.length} portals`);

    // Seed guides with portal references
    console.log('📖 Seeding guides...');
    const guidesWithPortals = guidesData.map((guide, index) => {
      // Assign relevant portals based on category
      let relevantPortals: any[] = [];
      
      switch (guide.category) {
        case 'ecommerce':
          relevantPortals = portals.filter(p => p.category === 'govt');
          break;
        case 'banking':
          relevantPortals = portals.filter(p => p.category === 'banking' || p.category === 'govt');
          break;
        case 'telecom':
          relevantPortals = portals.filter(p => p.category === 'telecom' || p.category === 'govt');
          break;
        case 'rera':
          relevantPortals = portals.filter(p => p.category === 'rera' || p.category === 'govt');
          break;
        case 'insurance':
          relevantPortals = portals.filter(p => p.category === 'insurance' || p.category === 'govt');
          break;
        default:
          relevantPortals = portals.filter(p => p.category === 'govt');
      }

      return {
        ...guide,
        slug: slugify(guide.title),
        portals: relevantPortals.map(p => p._id),
        views: Math.floor(Math.random() * 1000) + 100, // Random views between 100-1100
      };
    });

    const guides = await Guide.insertMany(guidesWithPortals);
    console.log(`✅ Seeded ${guides.length} guides`);

    // Seed templates with guide references
    console.log('📝 Seeding templates...');
    const templatesWithGuides = templatesData.map((template, index) => {
      // Match template to relevant guide
      let guideRef;
      
      if (template.title.includes('Amazon')) {
        guideRef = guides.find(g => g.title.includes('Amazon'))?._id;
      } else if (template.title.includes('Flipkart')) {
        guideRef = guides.find(g => g.title.includes('Flipkart'))?._id;
      } else if (template.title.includes('Bank') || template.title.includes('RBI')) {
        guideRef = guides.find(g => g.category === 'banking')?._id;
      } else if (template.title.includes('TRAI') || template.title.includes('Telecom')) {
        guideRef = guides.find(g => g.category === 'telecom')?._id;
      }

      return {
        ...template,
        slug: slugify(template.title),
        guideRef,
        downloadCount: Math.floor(Math.random() * 500) + 50, // Random downloads between 50-550
      };
    });

    const templates = await Template.insertMany(templatesWithGuides);
    console.log(`✅ Seeded ${templates.length} templates`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log(`\nSummary:`);
    console.log(`- Portals: ${portals.length}`);
    console.log(`- Guides: ${guides.length}`);
    console.log(`- Templates: ${templates.length}`);
    
    return {
      portals: portals.length,
      guides: guides.length,
      templates: templates.length,
    };
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

export async function resetDatabase() {
  try {
    console.log('🗑️  Resetting database...');
    
    await connectDB();
    
    await Guide.deleteMany({});
    await Template.deleteMany({});
    await Portal.deleteMany({});
    
    console.log('✅ Database reset completed');
  } catch (error) {
    console.error('❌ Error resetting database:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('✅ Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}
