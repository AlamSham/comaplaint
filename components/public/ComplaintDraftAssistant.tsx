'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type IssueKey =
  | 'ecommerce'
  | 'banking'
  | 'telecom'
  | 'rera'
  | 'insurance'
  | 'govt'
  | 'rcTransfer'
  | 'upiDispute'
  | 'cyberFraud'
  | 'meeshoRefund'
  | 'irctcRefund'
  | 'cibilDispute'
  | 'lpgGas'
  | 'incomeTaxRefund'
  | 'airlinesComplaint'
  | 'fastagIssue'
  | 'courierLost'
  | 'rtiApplication';
type DraftLanguage = 'hinglish' | 'hindi' | 'english';

type IssueConfig = {
  label: string;
  authority: string;
  guideHref: string;
  templateHref: string;
  proof: string[];
  route: string[];
};

const ISSUE_CONFIG: Record<IssueKey, IssueConfig> = {
  upiDispute: {
    label: 'UPI payment failed & money debited',
    authority: 'Bank Nodal Officer / NPCI / RBI Ombudsman',
    guideHref: '/guides/upi-failed-transaction-money-deducted-guide',
    templateHref: '/templates/upi-transaction-failed-money-deducted-complaint-hinglish',
    proof: ['UPI UTR / RRN (12 digit number)', 'Bank statement showing debit', 'GPay/PhonePe/Paytm failed transaction screenshot', 'Merchant order failure proof'],
    route: ['Raise dispute in UPI app & copy UTR number', 'Submit official UPI dispute on Bank App/NetBanking', 'Escalate to NPCI or RBI Ombudsman if unresolved after 48-72 hrs'],
  },
  cyberFraud: {
    label: 'Online cyber fraud / OTP scam (Emergency)',
    authority: '1930 Cyber Crime Helpline / Bank Fraud Cell',
    guideHref: '/guides/cyber-fraud-online-scam-urgent-police-bank-complaint-guide',
    templateHref: '/templates/cyber-fraud-emergency-bank-account-freeze-request-hindi',
    proof: ['Bank statement / Debit SMS screenshot', '1930 Cyber Helpline complaint ACK number', 'Fraudster phone number / WhatsApp chat / Phishing link', 'Police FIR copy'],
    route: ['Call 1930 helpline immediately', 'Contact Bank 24x7 helpline to FREEZE account/card', 'File complaint on cybercrime.gov.in & submit Zero Liability claim with bank'],
  },
  meeshoRefund: {
    label: 'Meesho return rejected / refund pending',
    authority: 'Meesho Support / Customer Grievance Cell',
    guideHref: '/guides/meesho-refund-return-complaint-guide',
    templateHref: '/templates/meesho-refund-not-received-hindi',
    proof: ['Meesho Order ID and Invoice', 'Unboxing video & damaged/wrong product photos', 'Shipping label outer box photo', 'Bank statement showing missing refund'],
    route: ['Raise ticket or Call Back Request in Meesho Help Center', 'Email full proof to query@meesho.com', 'Escalate to National Consumer Helpline (1915) if ignored'],
  },
  ecommerce: {
    label: 'Shopping refund / delivery issue',
    authority: 'Customer Support / Seller Grievance Team',
    guideHref: '/guides?category=ecommerce',
    templateHref: '/templates',
    proof: ['Order ID and invoice', 'Payment screenshot', 'Support ticket or chat proof', 'Product photos or delivery proof'],
    route: ['Raise issue with seller/platform support', 'Save ticket number and response deadline', 'Escalate to NCH or e-Daakhil if unresolved'],
  },
  banking: {
    label: 'Banking / UPI dispute',
    authority: 'Branch Manager / Bank Grievance Officer',
    guideHref: '/guides?category=banking',
    templateHref: '/templates',
    proof: ['Transaction ID or account statement', 'Bank complaint reference', 'SMS/email alerts', 'Any reversal or rejection message'],
    route: ['Complain to bank first', 'Wait for bank response or final reply', 'Escalate to RBI Integrated Ombudsman where applicable'],
  },
  telecom: {
    label: 'Mobile / broadband complaint',
    authority: 'Telecom Customer Care / Appellate Authority',
    guideHref: '/guides?category=telecom',
    templateHref: '/templates',
    proof: ['Mobile number or customer ID', 'Bill/recharge proof', 'Complaint docket number', 'Speed test or outage screenshots'],
    route: ['Register complaint with operator', 'Collect docket number', 'Escalate to appellate authority or consumer route if unresolved'],
  },
  rera: {
    label: 'Builder / RERA issue',
    authority: 'Builder Grievance Team / State RERA Authority',
    guideHref: '/guides?category=rera',
    templateHref: '/templates',
    proof: ['Builder-buyer agreement', 'Payment receipts', 'Project RERA number', 'Builder emails or notices'],
    route: ['Send written complaint to builder', 'Prepare project and payment proof', 'File with state RERA if the matter remains unresolved'],
  },
  insurance: {
    label: 'Insurance claim complaint',
    authority: 'Insurer Grievance Cell / Insurance Ombudsman',
    guideHref: '/guides?category=insurance',
    templateHref: '/templates',
    proof: ['Policy copy', 'Claim number', 'Rejection/delay letter', 'Bills, reports, or survey documents'],
    route: ['Complain to insurer grievance cell', 'Keep written acknowledgement', 'Escalate to Bima Bharosa or Insurance Ombudsman where applicable'],
  },
  govt: {
    label: 'Government service delay',
    authority: 'Concerned Department / Public Grievance Officer',
    guideHref: '/guides?category=govt',
    templateHref: '/templates',
    proof: ['Application number', 'Payment receipt', 'Department acknowledgement', 'Previous follow-up proof'],
    route: ['Check official application status', 'Send written complaint to department', 'Escalate through state or central grievance channel'],
  },
  irctcRefund: {
    label: 'IRCTC / Railway ticket refund (रेलवे रिफंड)',
    authority: 'Station Master / Chief Commercial Manager / RailMadad',
    guideHref: '/guides/irctc-train-ticket-refund-railway-complaint-guide',
    templateHref: '/templates/irctc-train-ticket-refund-application-hindi',
    proof: ['PNR number and e-ticket', 'Payment receipt / bank statement', 'Train cancel / delay proof', 'RailMadad complaint reference'],
    route: ['File TDR on IRCTC website/app', 'Complain on RailMadad (railmadad.indianrailways.gov.in)', 'Escalate to Railway Helpline 139 or Consumer Court'],
  },
  cibilDispute: {
    label: 'CIBIL score wrong / dispute (सिबिल स्कोर)',
    authority: 'TransUnion CIBIL / Bank Nodal Officer',
    guideHref: '/guides/cibil-score-dispute-correction-guide',
    templateHref: '/templates/cibil-score-correction-application-hindi',
    proof: ['CIBIL report (error highlighted)', 'Loan closure NOC from bank', 'Bank statement showing timely payments', 'PAN Card copy'],
    route: ['Raise dispute on CIBIL website', 'Send written complaint to bank to update CIBIL', 'Escalate to RBI Ombudsman if bank doesn\'t respond in 30 days'],
  },
  lpgGas: {
    label: 'LPG gas cylinder complaint (गैस सिलेंडर)',
    authority: 'Gas Agency / Oil Company (IOCL/BPCL/HPCL)',
    guideHref: '/guides/lpg-gas-cylinder-complaint-guide',
    templateHref: '/templates/lpg-gas-cylinder-complaint-letter-hindi',
    proof: ['LPG consumer number', 'Booking reference / IVRS receipt', 'Payment proof', 'Cylinder weight check proof (if under-weight)'],
    route: ['Complain to gas agency dealer', 'Call oil company helpline (Indane: 1800-2333-555)', 'Escalate to MoPNG e-Seva portal (mopng.gov.in)'],
  },
  incomeTaxRefund: {
    label: 'Income Tax refund delay (इनकम टैक्स रिफंड)',
    authority: 'CPC Bengaluru / CBDT / CPGRAMS',
    guideHref: '/guides/income-tax-refund-delay-complaint-guide',
    templateHref: '/templates/income-tax-refund-delay-complaint-to-cpgrams-hindi',
    proof: ['PAN number', 'ITR acknowledgment number', 'e-Filing portal refund status screenshot', 'Bank account pre-validation proof'],
    route: ['Check refund status on e-Filing portal', 'File e-Nivaran grievance on incometax.gov.in', 'Escalate to CPGRAMS (pgportal.gov.in) for CBDT action'],
  },
  airlinesComplaint: {
    label: 'Airlines / flight cancel complaint (फ्लाइट शिकायत)',
    authority: 'Airline Customer Care / DGCA AirSewa',
    guideHref: '/guides/airlines-flight-cancel-refund-complaint-dgca-guide',
    templateHref: '/templates/dgca-airlines-complaint-application-english',
    proof: ['PNR and booking confirmation', 'Boarding pass (if applicable)', 'Flight delay/cancel notification', 'Additional expense receipts (hotel, food, transport)'],
    route: ['Complain to airline customer care first', 'If no response in 15 days, file on AirSewa (airsewa.gov.in)', 'DGCA compensation rules apply for airline-caused cancellations'],
  },
  fastagIssue: {
    label: 'FASTag double deduction / KYC issue (फास्टैग)',
    authority: 'FASTag Issuer Bank / NHAI',
    guideHref: '/guides/fastag-complaint-guide',
    templateHref: '/templates/fastag-double-deduction-complaint-hindi',
    proof: ['FASTag ID and vehicle number', 'Transaction history from My FASTag app', 'Toll plaza name, date, and time', 'Bank statement showing deductions'],
    route: ['Call FASTag issuer bank customer care', 'File complaint on NHAI Helpline 1033', 'Written complaint to bank for refund within 7 days'],
  },
  courierLost: {
    label: 'Courier / parcel lost complaint (कूरियर शिकायत)',
    authority: 'Courier Company / Postmaster / Consumer Court',
    guideHref: '/guides/courier-lost-parcel-complaint-guide-bluedart-dtdc-delhivery',
    templateHref: '/templates/bluedart-lost-parcel-complaint-english',
    proof: ['AWB / Tracking number', 'Booking receipt', 'Declared value proof', 'Tracking status screenshot showing no update'],
    route: ['Contact courier customer care with tracking number', 'Send written complaint demanding compensation', 'If no response, file NCH (1915) and consumer court complaint'],
  },
  rtiApplication: {
    label: 'RTI application filing (सूचना का अधिकार)',
    authority: 'CPIO / State Public Information Officer',
    guideHref: '/guides/rti-filing-guide',
    templateHref: '/templates/rti-application-format-hindi',
    proof: ['₹10 postal order or online fee receipt', 'RTI application copy', 'Department name and address', 'Previous RTI responses (if appeal)'],
    route: ['File online on rtionline.gov.in or send by post', 'Wait 30 days for CPIO response', 'If no response, file First Appeal to Appellate Authority within 30 days'],
  },
  rcTransfer: {
    label: 'RC transfer delay',
    authority: 'RTO / Vehicle Dealer / Transport Department',
    guideHref: '/guides/rc-transfer-delay-complaint-guide',
    templateHref: '/templates/rc-transfer-complaint-letter-hinglish',
    proof: ['Form 29 and Form 30', 'RC copy and vehicle number', 'VAHAN/RTO application receipt', 'Sale receipt or delivery note', 'Insurance and PUC copy'],
    route: ['Check VAHAN application status', 'Ask dealer, buyer, seller, or RTO for written reason', 'Escalate to transport grievance channel if pending'],
  },
};

const LANGUAGE_LABELS: Record<DraftLanguage, string> = {
  hinglish: 'Hinglish',
  hindi: 'Hindi',
  english: 'English',
};

function valueOrPlaceholder(value: string, placeholder: string) {
  return value.trim() || placeholder;
}

function buildDraft({
  issue,
  language,
  name,
  oppositeParty,
  reference,
  date,
  amount,
  summary,
}: {
  issue: IssueConfig;
  language: DraftLanguage;
  name: string;
  oppositeParty: string;
  reference: string;
  date: string;
  amount: string;
  summary: string;
}) {
  const userName = valueOrPlaceholder(name, '{{your_name}}');
  const party = valueOrPlaceholder(oppositeParty, issue.authority);
  const complaintRef = valueOrPlaceholder(reference, '{{complaint_or_application_number}}');
  const issueDate = valueOrPlaceholder(date, '{{issue_date}}');
  const money = valueOrPlaceholder(amount, '{{amount_if_any}}');
  const details = valueOrPlaceholder(summary, '{{write_issue_details_here}}');

  if (language === 'hindi') {
    return `सेवा में,
${party}

विषय: ${issue.label} के संबंध में शिकायत

महोदय/महोदया,

मैं ${userName} इस पत्र के माध्यम से अपनी शिकायत दर्ज कर रहा/रही हूं।

शिकायत विवरण:
${details}

महत्वपूर्ण जानकारी:
1. तारीख: ${issueDate}
2. संदर्भ / आवेदन संख्या: ${complaintRef}
3. राशि: Rs. ${money}

मेरे पास संबंधित दस्तावेज और follow-up proof उपलब्ध हैं। कृपया इस मामले की जांच करके लिखित status दें और उचित समाधान करें।

मेरी मांग:
1. लंबित कार्य / complaint का तुरंत समाधान
2. देरी या अस्वीकृति का लिखित कारण
3. लागू होने पर refund / correction / compensation

धन्यवाद,
${userName}
दिनांक: {{today_date}}`;
  }

  if (language === 'english') {
    return `To,
${party}

Subject: Complaint regarding ${issue.label}

Dear Sir/Madam,

I, ${userName}, am filing this complaint for the following issue:

Issue details:
${details}

Important information:
1. Date of issue: ${issueDate}
2. Reference / application number: ${complaintRef}
3. Amount involved: Rs. ${money}

I have kept the relevant documents, payment proof, and previous follow-up records ready. Please investigate this matter, share a written status, and provide a proper resolution.

I request:
1. Immediate resolution of the pending complaint/service
2. Written reason for delay or rejection
3. Refund, correction, or compensation wherever applicable

Regards,
${userName}
Date: {{today_date}}`;
  }

  return `To,
${party}

Subject: Complaint regarding ${issue.label}

Dear Sir/Madam,

Main ${userName} is complaint ko submit kar raha/rahi hoon.

Issue details:
${details}

Important information:
1. Issue date: ${issueDate}
2. Reference / application number: ${complaintRef}
3. Amount involved: Rs. ${money}

Mere paas related documents, payment proof, aur previous follow-up records available hain. Please is matter ko check karke written status aur proper resolution provide karein.

I request:
1. Pending complaint/service ka immediate resolution
2. Delay ya rejection ka written reason
3. Applicable refund, correction, ya compensation

Thanks,
${userName}
Date: {{today_date}}`;
}

export function ComplaintDraftAssistant() {
  const [issueKey, setIssueKey] = useState<IssueKey>('rcTransfer');
  const [language, setLanguage] = useState<DraftLanguage>('hinglish');
  const [name, setName] = useState('');
  const [oppositeParty, setOppositeParty] = useState('');
  const [reference, setReference] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [summary, setSummary] = useState('');
  const [copied, setCopied] = useState(false);

  const issue = ISSUE_CONFIG[issueKey];
  const draft = useMemo(
    () =>
      buildDraft({
        issue,
        language,
        name,
        oppositeParty,
        reference,
        date,
        amount,
        summary,
      }),
    [amount, date, issue, language, name, oppositeParty, reference, summary]
  );

  async function copyDraft() {
    await navigator.clipboard.writeText(draft);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-lg border border-stone-200 bg-white p-5 md:p-6">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-950">Draft Details</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Details stay in your browser. Replace blanks before sending.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="issue" className="mb-2 block text-sm font-semibold text-gray-800">
              Issue type
            </label>
            <select
              id="issue"
              value={issueKey}
              onChange={(event) => setIssueKey(event.target.value as IssueKey)}
              className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {Object.entries(ISSUE_CONFIG).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="language" className="mb-2 block text-sm font-semibold text-gray-800">
              Draft language
            </label>
            <select
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value as DraftLanguage)}
              className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {Object.entries(LANGUAGE_LABELS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-800">
                Your name
              </label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="Shamshad Alam"
              />
            </div>
            <div>
              <label htmlFor="party" className="mb-2 block text-sm font-semibold text-gray-800">
                Company / authority
              </label>
              <input
                id="party"
                value={oppositeParty}
                onChange={(event) => setOppositeParty(event.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder={issue.authority}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="reference" className="mb-2 block text-sm font-semibold text-gray-800">
                Ref / application no.
              </label>
              <input
                id="reference"
                value={reference}
                onChange={(event) => setReference(event.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="ABC123"
              />
            </div>
            <div>
              <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-800">
                Issue date
              </label>
              <input
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="01 May 2026"
              />
            </div>
            <div>
              <label htmlFor="amount" className="mb-2 block text-sm font-semibold text-gray-800">
                Amount
              </label>
              <input
                id="amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="5000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="summary" className="mb-2 block text-sm font-semibold text-gray-800">
              Issue summary
            </label>
            <textarea
              id="summary"
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
              rows={6}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              placeholder="RC transfer 20 din se pending hai, dealer clear update nahi de raha..."
            />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="rounded-lg border border-stone-200 bg-white p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-950">Generated Draft</h2>
              <p className="mt-1 text-sm text-gray-600">Review every fact before using it.</p>
            </div>
            <button
              type="button"
              onClick={copyDraft}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              {copied ? 'Copied' : 'Copy Draft'}
            </button>
          </div>
          <pre className="max-h-[520px] overflow-auto rounded-lg border border-stone-200 bg-stone-50 p-4 whitespace-pre-wrap text-sm leading-7 text-gray-800">
            {draft}
          </pre>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="font-bold text-gray-950">Proof Checklist</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
              {issue.proof.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="font-bold text-gray-950">Next Route</h3>
            <ol className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
              {issue.route.map((item, index) => (
                <li key={item}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-amber-950">Related Resources</h3>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href={issue.guideHref}
              className="inline-flex justify-center rounded-lg bg-amber-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-950"
            >
              Open Guide
            </Link>
            <Link
              href={issue.templateHref}
              className="inline-flex justify-center rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-950 transition hover:bg-amber-100"
            >
              Open Template
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
