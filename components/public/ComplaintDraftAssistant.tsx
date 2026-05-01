'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type IssueKey = 'ecommerce' | 'banking' | 'telecom' | 'rera' | 'insurance' | 'govt' | 'rcTransfer';
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
