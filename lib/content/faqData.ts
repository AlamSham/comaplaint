import { Category } from '@/lib/constants';

export interface FaqItem {
  question: string;
  answer: string;
}

export const CATEGORY_FAQS: Record<Category, FaqItem[]> = {
  ecommerce: [
    {
      question: 'Amazon pe complaint kaise kare? (अमेज़न पर शिकायत कैसे करें)',
      answer:
        'Amazon app ya website pe "Your Orders" mein jaayein, order select karein, "Problem with order" pe click karein, aur issue describe karein. Agar resolve nahi hota toh Consumer Helpline 1800-11-4000 pe call karein ya e-Daakhil pe complaint file karein.',
    },
    {
      question: 'Flipkart refund nahi mila toh kya kare? (फ्लिपकार्ट रिफंड नहीं मिला)',
      answer:
        'Flipkart app mein "My Orders" se return/refund request karein. Agar 7-10 din mein refund nahi aaya toh Flipkart customer care ko email karein. Last resort mein National Consumer Helpline ya Consumer Forum mein complaint darj karein.',
    },
    {
      question: 'Online shopping complaint kaise file karein?',
      answer:
        'Sabse pehle seller/platform ke customer care se baat karein aur complaint ticket number lein. Agar resolve nahi hota toh National Consumer Helpline (NCH) 1800-11-4000 pe call karein ya consumerhelpline.gov.in pe online complaint file karein.',
    },
    {
      question: 'Consumer forum mein online complaint kaise darj karein?',
      answer:
        'E-Daakhil portal (edaakhil.nic.in) pe register karein, complaint form bharen, documents upload karein (invoice, chat screenshot, refund proof), aur filing fee pay karein. Aapka case Consumer Commission ke paas assign hoga.',
    },
  ],
  banking: [
    {
      question: 'RBI Ombudsman mein complaint kaise file karein? (आरबीआई लोकपाल शिकायत)',
      answer:
        'RBI ke Integrated Ombudsman portal cms.rbi.org.in pe online complaint file karein. Pehle bank ke paas likhi complaint karein aur 30 din wait karein. Bank ka response unsatisfactory ho ya koi response na aaye toh Ombudsman approach karein.',
    },
    {
      question: 'UPI transaction fail hone pe paisa kaise wapas milega?',
      answer:
        'Agar UPI transaction fail hua hai aur paisa kat gaya hai toh 48 ghante wait karein - auto-reversal ho sakta hai. Nahi hua toh bank customer care ko call karein, UPI reference number dein, aur complaint register karein. 5-7 working days mein resolve hona chahiye.',
    },
    {
      question: 'Bank account se unauthorized transaction complaint kaise karein?',
      answer:
        'Turant bank ko inform karein aur account freeze karwaayein. Police FIR file karein. Bank branch mein written complaint dein transaction details ke saath. 10 working days mein response na aaye toh Banking Ombudsman approach karein.',
    },
  ],
  telecom: [
    {
      question: 'Jio/Airtel/Vi network complaint kaise kare? (नेटवर्क शिकायत)',
      answer:
        'Pehle provider ke customer care number pe call karein (Jio: 199, Airtel: 121, Vi: 199) aur docket number lein. Resolve nahi hota toh Appellate Authority ko escalate karein. Last resort: TRAI portal ya Consumer Helpline use karein.',
    },
    {
      question: 'Mobile number port nahi ho raha toh kya karein?',
      answer:
        'MNP request ke liye SMS MNPREQ space mobile number bhejein 1900 pe. Agar provider port nahi kar raha toh docket number ke saath TRAI mein complaint karein. 7 working days mein porting complete honi chahiye.',
    },
    {
      question: 'Wrong billing/extra charges katne pe complaint kaise karein?',
      answer:
        'Bill ka screenshot rakhein, customer care ko call karein aur docket number lein. 7 din mein resolve nahi ho toh Appellate Authority ko written complaint bhejein. Uske baad Consumer Forum ka raasta khula hai.',
    },
  ],
  rera: [
    {
      question: 'RERA mein builder ke khilaf complaint kaise karein? (रेरा शिकायत)',
      answer:
        'Apne state ki RERA website pe jaayein (Maharashtra: maharera.mahaonline.gov.in, UP: up-rera.in). Online complaint form bharen, builder-buyer agreement, payment receipts, aur communication proof upload karein.',
    },
    {
      question: 'Builder ne possession nahi diya toh kya karein?',
      answer:
        'Pehle builder ko written notice bhejein registered post se. 30 din mein response na aaye toh RERA authority mein delayed possession complaint file karein. Penalty aur interest claim kar sakte hain agreement ke anusar.',
    },
    {
      question: 'RERA complaint mein kya documents chahiye?',
      answer:
        'Builder-buyer agreement, allotment letter, payment receipts, bank loan documents agar applicable, builder ke saath emails/notices, aur property ka registration number. Sab documents ki clear copies rakhein.',
    },
  ],
  insurance: [
    {
      question: 'Insurance claim reject hone pe kya karein? (बीमा दावा अस्वीकार)',
      answer:
        'Pehle rejection letter padh kar reason samjhein. Insurer ke Grievance Cell mein written complaint karein additional documents ke saath. 15 din mein resolve na ho toh IRDAI ke Bima Bharosa portal pe complaint file karein ya Insurance Ombudsman approach karein.',
    },
    {
      question: 'Health insurance claim mein delay ho raha hai toh kya karein?',
      answer:
        'IRDAI guidelines ke anusar cashless claim 2 ghante mein aur reimbursement claim 30 din mein settle hona chahiye. Delay ho toh insurer ko written complaint dein claim number ke saath. Uske baad IRDAI helpline 155255 pe call karein.',
    },
    {
      question: 'IRDAI mein complaint kaise file karein?',
      answer:
        'IRDAI ke Bima Bharosa portal (bimabharosa.irdai.gov.in) pe online complaint file karein. Policy number, claim number, insurer ka naam, aur complaint details bharen. Alternatively, igms.irda.gov.in portal bhi use kar sakte hain.',
    },
  ],
  govt: [
    {
      question: 'RC transfer mein delay ho raha hai toh complaint kaise karein?',
      answer:
        'VAHAN portal pe application status check karein. RTO office mein written complaint dein application number ke saath. Resolve nahi ho toh Parivahan Seva portal pe online grievance file karein ya Transport Commissioner ko complaint bhejein.',
    },
    {
      question: 'Electricity bill dispute mein complaint kaise karein? (बिजली बिल शिकायत)',
      answer:
        'Pehle local electricity office mein meter reading verify karwaayein. Dispute ho toh written complaint dein account number ke saath. State Electricity Regulatory Commission (SERC) mein appeal kar sakte hain agar local office resolve nahi karta.',
    },
    {
      question: 'Ration card issue mein online complaint kaise karein?',
      answer:
        'Apne state ki food supply department website pe online grievance file karein. National Food Security portal annavitran.nic.in pe bhi complaint kar sakte hain. CM Helpline number pe bhi call kar sakte hain apne state ka.',
    },
  ],
};

export function createFaqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function createHowToJsonLd(
  name: string,
  description: string,
  steps: string[],
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step,
      name: `Step ${index + 1}`,
    })),
    totalTime: `PT${Math.max(5, steps.length * 3)}M`,
    inLanguage: ['hi', 'en'],
  };
}
