import { CATEGORY_LABELS, type Category } from '@/lib/constants';

export type CategoryDetail = {
  shortDescription: string;
  guideIntro: string;
  documents: string[];
  commonMistakes: string[];
  escalationPath: string[];
  popularQueries: string[];
};

export const CATEGORY_DETAILS: Record<Category, CategoryDetail> = {
  ecommerce: {
    shortDescription:
      'Refund, return, damaged product, delayed delivery, wrong item, and seller support issues.',
    guideIntro:
      'Use order proof, screenshots, and refund timelines to escalate from seller support to consumer complaint channels.',
    documents: [
      'Order invoice or payment receipt',
      'Delivery status, return pickup proof, or cancellation screenshot',
      'Customer support chat, email, ticket, or call reference number',
      'Product photos or unboxing proof if the product is damaged or wrong',
    ],
    commonMistakes: [
      'Filing without order ID, invoice, or complaint ticket number',
      'Deleting chat/email proof before the complaint is resolved',
      'Skipping the platform support escalation before official complaint filing',
    ],
    escalationPath: [
      'Raise a complaint with the platform or seller support',
      'Save the complaint ticket and wait for the promised resolution window',
      'Escalate to National Consumer Helpline or e-Daakhil when the issue remains unresolved',
    ],
    popularQueries: [
      'amazon complaint kaise kare',
      'flipkart refund complaint letter',
      'online shopping complaint India',
    ],
  },
  banking: {
    shortDescription:
      'Unauthorized transaction, failed ATM withdrawal, UPI dispute, credit card charges, and loan issues.',
    guideIntro:
      'Banking complaints work best when dates, transaction IDs, and written bank responses are clearly attached.',
    documents: [
      'Account statement or transaction screenshot',
      'UPI reference number, ATM ID, card statement, or loan account number',
      'Complaint acknowledgement from bank branch, app, or customer care',
      'Any SMS/email alert connected with the disputed transaction',
    ],
    commonMistakes: [
      'Sharing full card, CVV, OTP, or passwords in complaint letters',
      'Approaching the ombudsman before first complaining to the bank',
      'Not preserving SMS alerts and bank acknowledgement numbers',
    ],
    escalationPath: [
      'Complain to bank customer care or branch and record the acknowledgement',
      'Escalate to the bank nodal officer if the first response is delayed or unsatisfactory',
      'Approach RBI Integrated Ombudsman after the required waiting period or final rejection',
    ],
    popularQueries: [
      'rbi ombudsman complaint process',
      'bank complaint letter format Hindi',
      'UPI failed transaction complaint',
    ],
  },
  telecom: {
    shortDescription:
      'Network, billing, SIM, mobile number portability, DTH, broadband, and plan-change complaints.',
    guideIntro:
      'Telecom complaints usually need complaint docket numbers and a clear timeline from customer care to appellate authority.',
    documents: [
      'Mobile number, customer ID, or broadband/DTH account number',
      'Bill copy, recharge screenshot, plan details, or payment proof',
      'Complaint docket number from customer care',
      'Network speed screenshots or service outage proof where relevant',
    ],
    commonMistakes: [
      'Complaining without a docket or service request number',
      'Mixing billing, network, and portability issues in one unclear request',
      'Missing the appellate authority step when it applies',
    ],
    escalationPath: [
      'Raise the issue with telecom customer care and collect docket number',
      'Escalate to the provider appellate authority if unresolved',
      'Use official consumer complaint channels for unresolved service deficiency',
    ],
    popularQueries: [
      'jio complaint kaise kare',
      'airtel network complaint',
      'TRAI telecom complaint process',
    ],
  },
  govt: {
    shortDescription:
      'Public utility, government service, document, ration, electricity, water, and local authority issues.',
    guideIntro:
      'Government service complaints need exact application numbers, department names, and proof of previous follow-up.',
    documents: [
      'Application number, bill number, or service request ID',
      'Identity/address proof only where the official portal asks for it',
      'Payment receipt, acknowledgement, or department response',
      'Photos or local proof if the issue is about service quality',
    ],
    commonMistakes: [
      'Uploading unclear documents or mismatched application details',
      'Filing on the wrong department portal',
      'Not noting the acknowledgement number after submission',
    ],
    escalationPath: [
      'Start with the official department or state grievance portal',
      'Escalate through district/state grievance channels when unresolved',
      'Use consumer complaint routes only for eligible service deficiency matters',
    ],
    popularQueries: [
      'online complaint darj kare',
      'electricity bill complaint format',
      'water supply complaint letter',
      'RC transfer delay complaint',
    ],
  },
  rera: {
    shortDescription:
      'Delayed possession, builder refund, construction quality, project registration, and real-estate disputes.',
    guideIntro:
      'RERA complaints need project details, builder communication, payment proof, and agreement clauses.',
    documents: [
      'Builder-buyer agreement or allotment letter',
      'Payment receipts, bank statements, and demand letters',
      'Project registration number and possession timeline proof',
      'Emails, notices, photos, or site visit proof for delay or quality issues',
    ],
    commonMistakes: [
      'Filing without project registration or agreement details',
      'Not separating delay, refund, and construction-quality demands',
      'Missing proof of payments and builder promises',
    ],
    escalationPath: [
      'Send a written complaint or notice to the builder',
      'File before the relevant state RERA authority with documents',
      'Track hearings/orders and escalate according to the state RERA process',
    ],
    popularQueries: [
      'RERA complaint online kaise kare',
      'builder delayed possession complaint',
      'RERA refund complaint format',
    ],
  },
  insurance: {
    shortDescription:
      'Claim rejection, claim delay, policy mis-selling, premium dispute, and health/life/vehicle insurance issues.',
    guideIntro:
      'Insurance complaints need policy wording, claim forms, rejection letters, and hospital or repair documents.',
    documents: [
      'Policy document, proposal form, and premium receipt',
      'Claim form, claim number, and insurer acknowledgement',
      'Rejection letter, settlement offer, or delay communication',
      'Medical bills, discharge summary, repair estimate, or survey report as applicable',
    ],
    commonMistakes: [
      'Not reading the rejection reason before drafting the complaint',
      'Missing policy number, claim number, or insurer branch details',
      'Filing with incomplete bills, reports, or claim correspondence',
    ],
    escalationPath: [
      'Raise a written complaint with insurer grievance cell',
      'Escalate to insurer grievance officer if unresolved',
      'Approach IRDAI/Bima Bharosa or Insurance Ombudsman as applicable',
    ],
    popularQueries: [
      'insurance claim rejection complaint',
      'IRDAI complaint kaise kare',
      'health insurance complaint letter',
    ],
  },
};

export const TOPIC_CLUSTERS = [
  {
    title: 'Shopping refund and delivery issues',
    href: '/guides/category/ecommerce',
    keywords: ['amazon complaint', 'flipkart refund', 'wrong product complaint'],
  },
  {
    title: 'Banking and UPI disputes',
    href: '/guides/category/banking',
    keywords: ['RBI ombudsman', 'UPI failed transaction', 'unauthorized debit'],
  },
  {
    title: 'Mobile, DTH, and broadband complaints',
    href: '/guides/category/telecom',
    keywords: ['TRAI complaint', 'network issue', 'billing dispute'],
  },
  {
    title: 'Builder and property complaints',
    href: '/guides/category/rera',
    keywords: ['RERA complaint', 'delayed possession', 'builder refund'],
  },
  {
    title: 'RC transfer and public service delay',
    href: '/guides/category/govt',
    keywords: ['RC transfer delay', 'RTO complaint', 'Form 29 Form 30'],
  },
];

export function getCategoryLabel(category: Category) {
  return CATEGORY_LABELS[category];
}

export function getReadingMinutes(content: string) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 180));
}

export function getContentExcerpt(content: string, maxLength = 160) {
  const compact = content.replace(/\s+/g, ' ').trim();

  if (compact.length <= maxLength) {
    return compact;
  }

  return `${compact.slice(0, maxLength).replace(/\s+\S*$/, '')}...`;
}

export function getTemplatePlaceholders(content: string) {
  return Array.from(new Set(content.match(/\{\{[^}]+\}\}/g) || []));
}
