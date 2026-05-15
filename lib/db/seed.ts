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
  {
    name: 'VAHAN 4.0 Citizen Services',
    category: 'govt',
    url: 'https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml',
    description: 'Official MoRTH portal for vehicle registration, RC services, and transfer of ownership services',
    isActive: true,
  },
];

// Seed data for guides
export const guidesData = [
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
    title: 'RC Transfer Delay Complaint Guide',
    category: 'govt',
    language: 'hinglish',
    content: `Vehicle sale ke baad RC transfer delay hona common problem hai. Agar buyer, seller, dealer, ya RTO side se transfer pending hai to written record banana important hai.

**Common RC Transfer Issues:**
- VAHAN application pending hai
- Dealer ne documents submit nahi kiye
- Buyer/seller OTP ya document verification pending hai
- Form 29 / Form 30 mismatch hai
- Fee paid hai lekin receipt/status update nahi hua
- Old owner ke naam par challan ya notice aa raha hai

**Important Documents:**
- Vehicle registration number and RC copy
- Form 29 and Form 30
- Sale receipt, delivery note, or sale agreement
- Insurance and PUC copy
- Application number / payment receipt from VAHAN or RTO
- Follow-up emails, WhatsApp chats, dealer receipts, or complaint references

**Best Approach:**
Pehle VAHAN/RTO application status check karein, phir dealer/buyer/seller ko written complaint bhejein. Agar issue unresolved rahe to RTO helpdesk/transport department grievance channel par complaint raise karein.`,
    steps: [
      'VAHAN citizen service portal par vehicle registration number se status check karein',
      'Application number, receipt, fee payment, and pending reason note karein',
      'Seller, buyer, dealer, ya agent ko written reminder bhejein',
      'Form 29, Form 30, RC copy, insurance, PUC, address proof, and payment receipt ready rakhein',
      'RTO office/helpdesk se written status maangein',
      'Agar dealer delay kar raha hai to dealer ko legal notice style complaint bhejein',
      'Transport department grievance portal ya state public grievance portal par complaint escalate karein',
      'Agar financial loss, challan, or misuse ka risk ho to local legal advice lein',
    ],
    tags: [
      'rc transfer',
      'vehicle ownership transfer',
      'rto complaint',
      'vahan parivahan',
      'form 29 form 30',
      'vehicle transfer delay',
    ],
    metadata: {
      title: 'RC Transfer Delay Complaint Guide | Vehicle Ownership Transfer',
      description: 'RC transfer delay complaint guide: documents, VAHAN status, RTO escalation, and ready complaint format for vehicle ownership transfer.',
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

type SeedGuide = (typeof guidesData)[number];

const complaintDepthSections: Record<SeedGuide['category'], string> = {
  ecommerce: `## Real Problem Examples
Use this route when the product is marked delivered but you did not receive it, the seller sent a different item, the package was damaged, the refund is stuck after pickup, the return window is being wrongly denied, or customer support keeps giving the same scripted reply. These cases become stronger when you show the order timeline clearly: order date, promised delivery date, actual delivery or pickup date, first complaint date, and every follow-up reference.

## Exact Complaint Strategy
Start inside the shopping app because marketplace support can see order logs, return pickup status, seller replies, payment method, and refund initiation status. Keep your first complaint short and factual. Mention the order ID, product name, amount paid, exact issue, what resolution you want, and the evidence attached. Avoid emotional language or threats in the first complaint. If support closes the ticket without resolution, reopen or reply once with proof. After the platform gives no useful response, escalate to National Consumer Helpline or e-Daakhil depending on the value and seriousness of the issue.

## Documents and Proof
Keep order invoice, payment screenshot, delivery SMS or email, package photos, unboxing video if available, return pickup proof, courier tracking, chat screenshots, email replies, and refund status screenshots. If the product is fake, damaged, expired, missing accessories, or different from the listing, save the product listing page also. If you paid by card, UPI, or wallet, keep the transaction ID and bank statement line ready.

## Timeline to Follow
Raise the first complaint immediately after discovering the problem. Give the platform 48 hours for basic response and 7 to 10 days for refund or replacement where applicable. If the refund is already approved but not credited, wait for the stated banking timeline and then escalate with the refund reference. If there is fraud, fake product, or repeated closure of tickets, do not wait too long; create a written complaint trail and move to NCH.

## Escalation Route
First: app or website support. Second: email support or grievance contact if available. Third: National Consumer Helpline with all proof. Fourth: e-Daakhil/consumer commission for serious monetary loss or unresolved deficiency in service. For payment failure or unauthorized debit, you may also need to raise a parallel complaint with your bank.

## Sample Complaint Draft
Subject: Complaint regarding order {{order_id}} - {{issue_type}}

I purchased {{product_name}} for Rs. {{amount}} on {{order_date}}. The issue is {{brief_issue}}. I contacted support on {{first_complaint_date}} and received complaint/ticket number {{ticket_number}}, but the matter is still unresolved. I am attaching invoice, payment proof, product/delivery photos, and support chat screenshots. Please provide {{refund_or_replacement_or_resolution}} within a reasonable time and confirm the action in writing.

## FAQs
Q: Can I complain if the return window is closed?
A: Yes, if the product was defective, wrong, fake, or the delay happened because of support or seller action. Explain why the issue could not be resolved within the window.

Q: Should I file directly in consumer court?
A: Usually create a written trail with the platform and NCH first. For high-value or serious disputes, e-Daakhil can be used when informal escalation fails.

Q: What is the most important proof?
A: Order invoice, payment proof, issue photos/video, and support ticket history.`,
  banking: `## Real Problem Examples
Use this route for failed UPI debit without refund, unauthorized transaction, ATM cash not dispensed, credit card charge dispute, account freeze without proper notice, loan EMI error, wrong penalty charge, delayed closure request, or poor response from branch/customer care. Banking disputes need a clean paper trail because the RBI Ombudsman normally expects proof that the bank was approached first.

## Exact Complaint Strategy
First submit a written complaint to the bank through branch, official email, internet banking, or grievance portal. Write the account number only partially in public-facing documents and keep sensitive details private. Mention transaction ID, date, amount, merchant/beneficiary, complaint category, and the exact relief requested. Ask for written acknowledgment. If the bank does not reply within 30 days, rejects the complaint without proper reason, or gives an unsatisfactory response, escalate through the RBI Integrated Ombudsman Scheme portal.

## Documents and Proof
Keep account statement, transaction screenshot, UTR/RRN, ATM slip if available, SMS/email alerts, card statement, previous complaint acknowledgment, bank replies, KYC or account closure request proof, loan sanction letter if relevant, and any fraud report or cyber complaint reference if the issue involves unauthorized debit.

## Timeline to Follow
For unauthorized transactions, inform the bank immediately because delay can affect liability. For ordinary service complaints, submit a bank complaint and preserve acknowledgment. Wait up to 30 days for bank response before RBI Ombudsman escalation, unless the issue is urgent fraud where parallel cyber/bank reporting is needed. After RBI submission, track the complaint regularly and respond to document requests quickly.

## Escalation Route
First: branch/customer care/grievance officer. Second: principal nodal officer of the bank. Third: RBI Complaint Management System / Integrated Ombudsman. For cyber fraud, also use the cybercrime helpline/portal and inform the bank in writing.

## Sample Complaint Draft
Subject: Banking complaint regarding {{transaction_or_account_issue}}

I am customer {{your_name}} holding account/card ending {{last_digits}}. On {{date}}, an issue occurred: {{issue_details}}. The amount involved is Rs. {{amount}} and the transaction/reference number is {{reference_number}}. I complained to the bank on {{bank_complaint_date}} with reference {{bank_ticket_number}}, but the issue is unresolved/response is unsatisfactory. Please investigate, reverse the amount or correct the service issue, and provide a written explanation.

## FAQs
Q: Can I approach RBI directly?
A: In most cases, first complain to the bank and wait up to 30 days or receive a final unsatisfactory response.

Q: What if fraud happened?
A: Inform the bank immediately, block card/account access if needed, and file cybercrime complaint where applicable.

Q: Is a phone call enough proof?
A: No. Always keep written acknowledgment, ticket number, email, or branch-stamped copy.`,
  telecom: `## Real Problem Examples
Use this route for repeated call drops, no network despite active plan, wrong bill, unauthorized value-added service charge, mobile number portability delay, SIM deactivation, broadband speed far below promised plan, DTH service interruption, or plan change without consent. Telecom complaints are stronger when you show dates, recharge or bill details, service area, speed screenshots, and complaint numbers.

## Exact Complaint Strategy
Start with the telecom operator's customer care or app. Mention the mobile number/customer ID, plan name, billing cycle, area or installation address, issue duration, and what resolution you expect. Ask for a complaint docket number. If the first-level support closes the complaint without actual resolution, escalate to the operator's appellate authority within the allowed time. Keep every SMS and email. Use TRAI resources to understand the complaint mechanism, but remember that many consumer grievances first go through the operator and appellate process.

## Documents and Proof
Keep bill copy, recharge proof, speed test screenshots, network screenshots, complaint docket numbers, call logs, SMS alerts, email/chat transcripts, installation/work order details, and payment receipts. For broadband, note router status, outage dates, promised speed, actual speed, and technician visit records.

## Timeline to Follow
Raise the operator complaint as soon as the issue repeats or billing error appears. Give the stated resolution time from the complaint docket. If unresolved, escalate to appellate authority with the original complaint number. For billing disputes, complain before the due date if possible and ask the operator to mark the disputed amount.

## Escalation Route
First: customer care/app complaint. Second: operator nodal/appellate authority. Third: consumer grievance route/NCH if service deficiency or unfair billing remains unresolved. For repeated billing or refund issues, keep payment proof and written operator response.

## Sample Complaint Draft
Subject: Telecom complaint for {{mobile_or_customer_id}} - {{issue_type}}

I am using {{operator_name}} connection/customer ID {{customer_id}}. Since {{date}}, I am facing {{issue_details}} at {{location}}. I raised complaint number {{docket_number}} on {{complaint_date}}, but the issue is not resolved. I am attaching bill/recharge proof, screenshots, speed test records, and support messages. Please resolve the issue, reverse incorrect charges if any, and confirm the action in writing.

## FAQs
Q: What is the most important telecom proof?
A: Complaint docket number, bill/recharge proof, and screenshots showing the issue.

Q: Can I complain for poor internet speed?
A: Yes, keep repeated speed tests, plan details, outage dates, and technician visit records.

Q: Should I stop paying the bill?
A: Do not ignore bills blindly. Dispute the incorrect amount in writing and ask the operator for clarification.`,
  govt: `## Real Problem Examples
Use this route for RC transfer delay, public utility complaint, ration card issue, water supply complaint, electricity billing error, document update delay, or local authority inaction. Government-service complaints need specific office details, application number, receipt, date of submission, and the exact pending action.

## Exact Complaint Strategy
Start by checking the official portal status and downloading receipts or application acknowledgments. Then contact the concerned office or helpdesk in writing. Mention the application number, date, office name, vehicle/document/service details, and pending stage. If an agent, dealer, buyer, seller, or local official is causing delay, keep separate written communication with that person also. Escalate through the department grievance portal, state public grievance system, or consumer forum route if there is service deficiency by a paid service provider.

## Documents and Proof
Keep application receipt, payment challan, ID/address proof, old and new document copies, SMS/email status, portal screenshots, office visit proof, written reminders, and any agent/dealer communication. For RC transfer, keep Form 29, Form 30, sale receipt, insurance, PUC, delivery note, and VAHAN payment/status screenshots.

## Timeline to Follow
Check official status first. If the application remains pending beyond the normal processing window, send a written reminder. Give a reasonable time for response, usually 7 to 15 working days depending on service. Escalate if there is no written update, repeated wrong objections, or financial/legal risk such as challans going to the old vehicle owner.

## Escalation Route
First: official portal/helpdesk or local office. Second: department grievance officer/state grievance portal. Third: higher transport/municipal/public service authority. Fourth: legal advice or consumer forum route where a paid service provider, dealer, or agent caused loss or deficiency.

## Sample Complaint Draft
Subject: Complaint regarding delay in {{service_name}} - application {{application_number}}

I submitted {{service_name}} application on {{date}} with reference number {{application_number}}. The current status is {{current_status}} and the pending issue is {{pending_reason}}. I have attached receipt, payment proof, ID/documents, and previous follow-up records. Please update the status, complete the pending action, or provide a written reason for delay.

## FAQs
Q: What if the portal status is not changing?
A: Take screenshots with date, contact the helpdesk/office, and ask for written status.

Q: Is a dealer responsible for RC transfer delay?
A: If the dealer agreed to handle transfer, keep receipt/chat proof and send a written reminder.

Q: Can I escalate to consumer forum?
A: For pure government processing, use department grievance first. For paid service deficiency by dealer/agent/service provider, consumer remedies may apply.`,
  rera: `## Real Problem Examples
Use this route for delayed possession, builder refund delay, project not matching promised amenities, poor construction quality, extra charges not in agreement, cancellation refund dispute, or misleading advertisement. RERA complaints become stronger when you connect every allegation to booking form, allotment letter, builder-buyer agreement, payment receipts, brochure, RERA registration details, and possession timeline.

## Exact Complaint Strategy
First identify the correct state RERA because real estate regulation is state-wise. Search the project registration number and promoter details on the state RERA portal. Prepare a concise chronology: booking date, agreement date, promised possession date, amount paid, reminders sent, builder response, and current status. Ask for specific relief: possession with delay compensation, refund with interest, rectification, documents, or withdrawal of illegal demand.

## Documents and Proof
Keep booking form, allotment letter, builder-buyer agreement, payment receipts, bank loan documents, demand letters, possession letter if any, email/WhatsApp communication, brochure/advertisement, site photos, RERA project registration page, and previous legal or complaint notices.

## Timeline to Follow
Do not wait endlessly after the promised possession or refund date passes. Send a written reminder to the builder first. If there is no clear response, file on the state RERA portal with documents. Hearing and decision timelines vary by state and case load, so track notices and respond quickly.

## Escalation Route
First: written complaint to builder/promoter. Second: state RERA complaint. Third: RERA appellate authority if needed. Depending on facts, consumer commission may also be an option, but avoid duplicate proceedings without legal advice.

## Sample Complaint Draft
Subject: RERA complaint regarding {{project_name}} - {{flat_or_unit_number}}

I booked unit {{unit_number}} in {{project_name}} by promoter {{builder_name}}. As per agreement, possession/refund/action was due on {{due_date}}, but {{issue_details}}. I have paid Rs. {{amount_paid}} and attached agreement, receipts, builder communication, project details, and proof of delay/defect. I request {{specific_relief}} with applicable compensation/interest as per law and authority directions.

## FAQs
Q: Do I need project RERA number?
A: It is highly useful. Search the state RERA portal using project or promoter details.

Q: Can I claim delay compensation?
A: Many delayed possession cases include compensation/interest claims, depending on agreement and facts.

Q: Should I file RERA or consumer complaint?
A: It depends on relief and case history. If confused, get legal advice before filing multiple proceedings.`,
  insurance: `## Real Problem Examples
Use this route for health insurance claim rejection, partial settlement, cashless denial, delay in claim processing, life insurance claim delay, vehicle insurance dispute, policy mis-selling, wrong premium deduction, or cancellation/refund issue. Insurance complaints need policy terms, claim documents, rejection reason, and proof that you answered insurer queries.

## Exact Complaint Strategy
Read the rejection or deficiency letter carefully. Identify whether the insurer cited waiting period, exclusion, non-disclosure, missing document, delay in intimation, hospital issue, surveyor finding, or policy lapse. Reply with documents and facts, not only anger. First escalate to the insurer grievance cell. If unresolved or unsatisfactory, approach Bima Bharosa/IRDAI route or Insurance Ombudsman depending on the nature and value of the dispute.

## Documents and Proof
Keep policy schedule, proposal form if available, premium receipts, claim form, hospital bills, discharge summary, investigation reports, rejection letter, insurer emails, surveyor report if available, repair estimate for vehicle claims, and all grievance acknowledgments.

## Timeline to Follow
Inform the insurer as early as possible after hospitalization, accident, death claim, or loss. Reply quickly to document deficiency notices. If the insurer rejects or delays without proper reason, file a written grievance and wait for the official response window. Escalate when the company fails to respond or gives an unsatisfactory decision.

## Escalation Route
First: insurer claim/grievance cell. Second: insurer grievance officer. Third: Bima Bharosa/IRDAI complaint or Insurance Ombudsman as applicable. For large or complex claims, consult a qualified professional before drafting final legal submissions.

## Sample Complaint Draft
Subject: Insurance complaint regarding policy {{policy_number}} and claim {{claim_number}}

I hold policy number {{policy_number}} with {{insurer_name}}. I submitted claim number {{claim_number}} for {{claim_reason}} on {{claim_date}}. The claim was rejected/delayed/partly settled citing {{rejection_reason}}. I believe this is incorrect because {{brief_explanation}}. I am attaching policy copy, premium receipts, claim documents, medical/repair records, and insurer communication. Please reconsider and settle the claim with written reasons.

## FAQs
Q: What should I do first after claim rejection?
A: Read the rejection reason, collect missing documents, and send a written grievance to the insurer.

Q: Can I complain for partial settlement?
A: Yes, if deduction is unexplained or contrary to policy terms. Ask for calculation details.

Q: Is Insurance Ombudsman free?
A: It is intended as an accessible grievance route, but check current official rules and eligibility before filing.`,
};

export function enrichGuideContent(guide: SeedGuide) {
  return `${guide.content}

${complaintDepthSections[guide.category]}`;
}

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
    } catch {
      // Index might not exist, ignore
    }
    try {
      await Template.collection.dropIndex('title_text_content_text');
    } catch {
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
    const guidesWithPortals = guidesData.map((guide) => {
      // Assign relevant portals based on category
      const relevantPortals = portals.filter((portal) => {
        switch (guide.category) {
          case 'ecommerce':
            return portal.category === 'govt';
          case 'banking':
            return portal.category === 'banking' || portal.category === 'govt';
          case 'telecom':
            return portal.category === 'telecom' || portal.category === 'govt';
          case 'rera':
            return portal.category === 'rera' || portal.category === 'govt';
          case 'insurance':
            return portal.category === 'insurance' || portal.category === 'govt';
          default:
            return portal.category === 'govt';
        }
      });

      return {
        ...guide,
        content: enrichGuideContent(guide),
        slug: slugify(guide.title),
        portals: relevantPortals.map(p => p._id),
        views: Math.floor(Math.random() * 1000) + 100, // Random views between 100-1100
      };
    });

    const guides = await Guide.insertMany(guidesWithPortals);
    console.log(`✅ Seeded ${guides.length} guides`);

    // Seed templates with guide references
    console.log('📝 Seeding templates...');
    const templatesWithGuides = templatesData.map((template) => {
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
      } else if (template.title.includes('RERA')) {
        guideRef = guides.find(g => g.category === 'rera')?._id;
      } else if (template.title.includes('Insurance')) {
        guideRef = guides.find(g => g.category === 'insurance')?._id;
      } else if (
        template.title.includes('Electricity') ||
        template.title.includes('Ration') ||
        template.title.includes('Water') ||
        template.title.includes('RC Transfer') ||
        template.title.includes('Vehicle RC')
      ) {
        guideRef = guides.find(g => g.category === 'govt')?._id;
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
