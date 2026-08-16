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
    {
      question: 'JioMart / Ajio / Nykaa pe complaint kaise karein?',
      answer:
        'JioMart helpline 1800-890-1222, Ajio app ke Help section, ya Nykaa customer support se contact karein. Written complaint karein order ID ke saath. 7 din mein resolve na ho toh NCH (1915) pe escalate karein ya e-Daakhil pe consumer court complaint file karein.',
    },
    {
      question: 'BigBasket / Blinkit mein missing items ka complaint kaise karein?',
      answer:
        'App mein order open karein aur "Report Issue" pe tap karein. Missing items select karein aur photo attach karein. Refund ya redelivery 24-48 hours mein hona chahiye. Nahi ho toh customer care ko email karein aur NCH escalate karein.',
    },
    {
      question: 'OLX pe fraud hua toh kya karein? (ओएलएक्स धोखाधड़ी)',
      answer:
        'Turant Cyber Crime Helpline 1930 pe call karein. cybercrime.gov.in pe online FIR file karein. Bank ko turant inform karein aur account freeze karwaayein. Nearest police station mein bhi FIR darj karein BNS Section 318 ke tahat.',
    },
    {
      question: 'Electronics warranty claim reject hua toh kya karein? (बोट / सैमसंग वारंटी)',
      answer:
        'Warranty card aur purchase invoice ke saath brand ke service center mein written complaint dein. Consumer Protection Act 2019 ke anusaar manufacturing defect mein warranty deny nahi ho sakti. Reject ho toh consumer court mein complaint file karein.',
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
    {
      question: 'CIBIL score galat hai toh kaise theek karein? (सिबिल स्कोर सुधार)',
      answer:
        'CIBIL website pe login karein aur credit report download karein. "Dispute" option se galat entry select karein aur supporting documents upload karein (loan closure NOC, bank statement). Bank ko bhi likhi complaint dein CIBIL update karne ke liye. 30 din mein correction hona chahiye.',
    },
    {
      question: 'Loan recovery agent threat kar raha hai toh kya karein? (वसूली एजेंट शिकायत)',
      answer:
        'RBI guidelines ke anusaar recovery agent subah 8 baje se shaam 7 baje ke beech hi contact kar sakta hai. Threat, gaali, ya karyasthal pe aana RBI rules ka violation hai. Call recording rakhein aur RBI Banking Ombudsman (cms.rbi.org.in) pe complaint karein. Police mein bhi FIR darj karein.',
    },
    {
      question: 'Cheque bounce hone pe kya karna chahiye? (चेक बाउंस शिकायत)',
      answer:
        'Cheque bounce hone pe 30 din ke andar drawer ko legal notice bhejein (Section 138, Negotiable Instruments Act). Notice mein 15 din ka time dein payment karne ka. Payment na ho toh Magistrate Court mein criminal complaint file karein. 2 saal tak ki saza aur cheque amount ka 2x tak fine ho sakta hai.',
    },
    {
      question: 'NBFC (Bajaj Finance, IIFL) se pareshaan hain toh kahan complaint karein?',
      answer:
        'Pehle NBFC ke Grievance Officer ko written complaint dein. 30 din mein response na aaye toh RBI ke NBFC Ombudsman portal cms.rbi.org.in pe complaint file karein. Hidden charges ya zyada interest rate ke liye consumer court bhi ja sakte hain.',
    },
    {
      question: 'FD maturity ka paisa nahi mila toh kya karein? (एफडी मैच्योरिटी शिकायत)',
      answer:
        'Bank branch mein FD receipt aur passbook le jaayein aur written complaint dein. Maturity date ke baad bhi paisa na mile toh RBI Banking Ombudsman mein complaint karein. Delay ke liye FD interest rate pe additional interest ka haq hai.',
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
    {
      question: 'Car/Bike insurance claim reject hua toh kya karein? (गाड़ी बीमा क्लेम)',
      answer:
        'Rejection letter ka reason padhen. Insurer ke Grievance Officer ko appeal letter likhen additional evidence ke saath (FIR, repair estimate, photos). 15 din mein satisfactory response na mile toh Insurance Ombudsman (cioins.co.in) mein complaint file karein.',
    },
    {
      question: 'Travel insurance claim kaise file karein?',
      answer:
        'Trip cancel, medical emergency ya baggage loss ke 48 ghante ke andar insurer ki helpline pe intimation dein. Claim form, medical bills, PIR report (baggage loss), flight delay proof ke saath submit karein. IRDAI guidelines ke anusaar 30 din mein settlement hona chahiye.',
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
    {
      question: 'IRCTC se train ticket refund kaise milega? (रेलवे रिफंड)',
      answer:
        'IRCTC website/app pe "My Transactions" mein jaayein aur cancel/TDR file karein. PNR number ready rakhein. Tatkal ticket mein refund rules alag hain. Refund 15-60 din mein original payment method mein aata hai. Nahi aaya toh RailMadad (railmadad.indianrailways.gov.in) pe complaint karein.',
    },
    {
      question: 'EPF/PF withdrawal ya transfer mein delay ho toh kya karein? (पीएफ निकासी)',
      answer:
        'EPFO Member Portal pe claim status check karein (UAN se login). 20 working days se zyada delay ho toh EPFO Grievance Portal (epfigms.gov.in) pe complaint file karein. Regional PF Commissioner office mein bhi personally ja sakte hain. CPGRAMS pe bhi escalate kar sakte hain.',
    },
    {
      question: 'Income tax refund nahi aaya toh kya karein? (इनकम टैक्स रिफंड शिकायत)',
      answer:
        'e-Filing portal pe login karein aur "View Filed Returns" mein ITR processing status check karein. Bank account pre-validate hona chahiye. e-Nivaran pe grievance file karein. CPC Bengaluru helpline 1800-425-2229 pe call karein. Long delay pe CPGRAMS (pgportal.gov.in) pe complaint karein.',
    },
    {
      question: 'Aadhaar card mein correction kaise karwaayein? (आधार सुधार)',
      answer:
        'myaadhaar.uidai.gov.in pe login karein aur "Update Aadhaar" se online correction request karein. Name change ke liye Aadhaar Enrolment Centre jaana padta hai original documents ke saath. Reject ho toh UIDAI helpline 1947 pe complaint karein.',
    },
    {
      question: 'LPG gas cylinder mein kam gas ya late delivery ki shikayat kaise karein?',
      answer:
        'LPG company helpline pe complaint karein (Indane: 1800-2333-555, HP Gas: 1800-2333-666, Bharat Gas: 1800-2333-444). Under-weight cylinder ka weight delivery boy ke saamne check karein (standard: 14.2 kg ± 150 gm). Complaint ka number lein. MoPNG e-Seva portal pe bhi complaint file kar sakte hain.',
    },
    {
      question: 'PM Kisan ki kist nahi aayi toh kya karein? (पीएम किसान शिकायत)',
      answer:
        'pmkisan.gov.in pe Beneficiary Status check karein. eKYC complete hai ya nahi verify karein. PM-KISAN Helpline 155261 pe call karein. Block Development Officer (BDO) ya Agriculture Office mein personally complaint dein apna registration number le jaake.',
    },
    {
      question: 'FASTag se paisa double kat gaya toh refund kaise milega? (फास्टैग शिकायत)',
      answer:
        'FASTag issuer bank ke customer care ko call karein transaction details ke saath. NHAI helpline 1033 pe bhi complaint karein. My FASTag app mein transaction history check karein. Bank ko written complaint dein toll plaza name, date, time, aur amount ke saath. 7 din mein reversal hona chahiye.',
    },
    {
      question: 'Courier parcel kho gaya toh complaint kaise karein? (कूरियर शिकायत)',
      answer:
        'Courier company (BlueDart, DTDC, Delhivery) ke customer care ko tracking number ke saath complaint karein. Declared value ka compensation maangein. Speed Post kho gaya toh Postmaster ko written complaint dein aur India Post grievance portal pe complaint file karein.',
    },
    {
      question: 'RTI application kaise file karein? (सूचना का अधिकार)',
      answer:
        'rtionline.gov.in pe online RTI file karein ya ₹10 ke postal order ke saath CPIO ko written application bhejein. 5 sawaal tak pooch sakte hain. 30 din mein jawab aana chahiye. Jawab na aaye toh First Appellate Authority ko appeal karein.',
    },
    {
      question: 'Consumer court mein complaint kaise file karein? (उपभोक्ता अदालत)',
      answer:
        'edaakhil.nic.in pe register karein. ₹5 lakh tak ke case District Commission mein, ₹5 lakh-₹2 crore State Commission mein, aur ₹2 crore+ National Commission mein file hote hain. ₹5 lakh tak court fee free hai. Complaint form, invoice, proof, aur previous complaint records attach karein.',
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
