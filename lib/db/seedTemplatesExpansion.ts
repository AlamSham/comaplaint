// Expansion Templates — 60 new complaint letter templates
// Imported by seed.ts and merged with existing templatesData

export const expansionTemplatesData = [
  // ═══════════════════════════════════════════════
  // E-COMMERCE TEMPLATES (10 new)
  // ═══════════════════════════════════════════════

  {
    title: 'JioMart Order Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा विभाग
JioMart (Reliance Retail)
{{jiomart_address}}

विषय: ऑर्डर संख्या {{order_id}} के संबंध में शिकायत

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, आपको सूचित करना चाहता/चाहती हूं कि मैंने दिनांक {{order_date}} को JioMart App/Website से ऑर्डर संख्या {{order_id}} के तहत {{product_name}} की खरीदारी की थी।

शिकायत का विवरण:
{{complaint_details}}

मैंने दिनांक {{first_complaint_date}} को आपकी ग्राहक सेवा (हेल्पलाइन: 1800-890-1222) से संपर्क किया था और शिकायत संख्या {{complaint_number}} प्राप्त की थी, परंतु अभी तक कोई समाधान नहीं मिला है।

भुगतान विवरण:
- भुगतान राशि: ₹{{amount}}
- भुगतान माध्यम: {{payment_method}}
- Transaction ID: {{transaction_id}}

मैं निम्नलिखित समाधान की मांग करता/करती हूं:
1. {{demand_1}}
2. {{demand_2}}

कृपया 7 दिनों के भीतर इस मामले का समाधान करें, अन्यथा मैं उपभोक्ता संरक्षण अधिनियम 2019 के तहत National Consumer Helpline (1915) और उपभोक्ता अदालत में शिकायत दर्ज करने को बाध्य होऊंगा/होऊंगी।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'JioMart Complaint Letter Hindi Format 2026 | जियोमार्ट शिकायत पत्र',
      description: 'Free JioMart complaint letter in Hindi. Ready-to-use format for wrong delivery, refund delay, expired product. Download and fill placeholders.',
    }
  },

  {
    title: 'JioMart Refund Not Received Complaint - English',
    language: 'english',
    content: `To,
Customer Care Department
JioMart (Reliance Retail Ventures Limited)
{{jiomart_address}}

Subject: Refund Not Received for Cancelled Order No. {{order_id}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to file a complaint regarding the non-receipt of refund for my cancelled order.

Order Details:
- Order ID: {{order_id}}
- Order Date: {{order_date}}
- Cancellation Date: {{cancellation_date}}
- Product: {{product_name}}
- Amount Paid: ₹{{amount}}
- Payment Method: {{payment_method}}
- Transaction/UTR Number: {{transaction_id}}

The order was cancelled on {{cancellation_date}} and I was informed that the refund of ₹{{amount}} would be credited within 5-7 business days. However, {{days_passed}} days have passed and the refund has not been received in my bank account.

I contacted your customer care on {{complaint_date}} and received complaint reference {{complaint_ref}}, but no action has been taken.

I request immediate processing of my refund and written confirmation of the same.

If this matter is not resolved within 7 working days, I shall be constrained to approach the National Consumer Helpline and Consumer Court under the Consumer Protection Act, 2019.

Thanking you,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'JioMart Refund Complaint Letter English 2026 | Download Free Format',
      description: 'Free JioMart refund not received complaint letter in English. Ready format for consumer court, legal notice. Fill placeholders and send.',
    }
  },

  {
    title: 'Ajio Return Rejected Complaint Letter - English',
    language: 'english',
    content: `To,
Customer Support / Grievance Officer
Ajio (Reliance Retail Ventures Limited)
{{ajio_address}}

Subject: Return Request Rejected - Order No. {{order_id}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to file a formal complaint regarding the wrongful rejection of my return request.

Order Details:
- Order ID: {{order_id}}
- Order Date: {{order_date}}
- Product: {{product_name}}
- Amount: ₹{{amount}}
- Delivery Date: {{delivery_date}}
- Return Request Date: {{return_date}}

Issue Description:
{{issue_description}}

My return request was rejected with the reason: "{{rejection_reason}}". However, this rejection is unjustified because:
{{counter_argument}}

I had contacted your customer care on {{complaint_date}} (Ref: {{complaint_ref}}) but the issue remains unresolved.

I am attaching the following evidence:
1. Product photos showing the defect/issue
2. Order invoice and payment proof
3. Return rejection screenshot
4. Previous complaint communication

I request:
1. Acceptance of my return request
2. Full refund of ₹{{amount}} to my original payment method
3. Free pickup arrangement for the product

Please resolve this within 7 days, failing which I will escalate to NCH (1915) and Consumer Court.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Ajio Return Rejected Complaint Letter 2026 | English Format Free Download',
      description: 'Free Ajio return rejected complaint letter in English. Ready format for return denial, refund issue. For consumer court and legal notice use.',
    }
  },

  {
    title: 'Nykaa Wrong Product Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा / ग्रीवांस ऑफिसर
Nykaa (FSN E-Commerce Ventures Limited)
{{nykaa_address}}

विषय: गलत उत्पाद डिलीवरी - ऑर्डर {{order_id}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} का/की निवासी हूं। मैंने दिनांक {{order_date}} को Nykaa App/Website से ऑर्डर {{order_id}} के तहत {{ordered_product}} खरीदा था।

समस्या: मैंने {{ordered_product}} (Shade: {{ordered_shade}}) ऑर्डर किया था, लेकिन मुझे {{received_product}} (Shade: {{received_shade}}) प्राप्त हुआ है।

भुगतान विवरण:
- राशि: ₹{{amount}}
- भुगतान माध्यम: {{payment_method}}

मैंने दिनांक {{complaint_date}} को ग्राहक सेवा से संपर्क किया (शिकायत संख्या: {{complaint_ref}}) परंतु अभी तक कोई समाधान नहीं मिला।

संलग्न प्रमाण:
1. प्राप्त उत्पाद की फोटो (batch number और expiry date सहित)
2. ऑर्डर invoice
3. भुगतान प्रमाण

मांग:
1. सही उत्पाद की डिलीवरी या पूर्ण रिफंड ₹{{amount}}
2. गलत उत्पाद की रिटर्न पिकअप व्यवस्था

कृपया 5 दिनों के भीतर समाधान करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Nykaa Wrong Product Complaint Hindi 2026 | निका शिकायत पत्र',
      description: 'Free Nykaa wrong product complaint letter in Hindi. Wrong shade, expired cosmetics, damaged beauty products. Download ready format.',
    }
  },

  {
    title: 'BigBasket Missing Items Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
Customer Support / Grievance Officer
BigBasket (Supermarket Grocery Supplies Pvt. Ltd.)
{{bigbasket_address}}

Subject: Missing Items in Order {{order_id}}

Dear Team,

Main {{your_name}}, {{your_address}} se hoon. Maine {{order_date}} ko order {{order_id}} place kiya tha jismein total {{total_items}} items the.

Problem:
Delivery date {{delivery_date}} ko jab order mila to neeche diye gaye items missing the:

Missing Items:
1. {{missing_item_1}} - ₹{{price_1}}
2. {{missing_item_2}} - ₹{{price_2}}
3. {{missing_item_3}} - ₹{{price_3}}

Total Missing Items Value: ₹{{total_missing_amount}}
Total Order Amount Paid: ₹{{total_paid}}
Payment Mode: {{payment_mode}}

Maine immediately app se complaint raise ki (Ref: {{complaint_ref}}) lekin {{days_passed}} din ho gaye, abhi tak na to missing items mile na refund.

I request:
1. Missing items ki delivery ya equivalent refund ₹{{total_missing_amount}}
2. Inconvenience ke liye additional credit/compensation

Agar 5 din mein resolution nahi milta to NCH (1915) aur Consumer Court mein complaint karunga/karungi.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'BigBasket Missing Items Complaint Hinglish 2026 | Download Free Format',
      description: 'Free BigBasket missing items complaint letter in Hinglish. Grocery order incomplete delivery, missing products. Ready format for consumer complaint.',
    }
  },

  {
    title: 'Blinkit Late Delivery Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा विभाग
Blinkit (Zomato Group)
{{blinkit_address}}

विषय: देरी से डिलीवरी / डिलीवरी न होने की शिकायत - ऑर्डर {{order_id}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} का निवासी हूं। मैंने दिनांक {{order_date}} को Blinkit App से ऑर्डर {{order_id}} प्लेस किया था।

Blinkit "{{promised_time}} मिनट में डिलीवरी" का वादा करता है, परंतु:
{{delivery_issue_details}}

ऑर्डर विवरण:
- ऑर्डर राशि: ₹{{amount}}
- भुगतान माध्यम: {{payment_method}}
- वादा किया गया समय: {{promised_time}} मिनट
- वास्तविक डिलीवरी: {{actual_delivery_status}}

शिकायत संख्या: {{complaint_ref}} (दिनांक {{complaint_date}})

मांग:
1. ₹{{amount}} का पूर्ण रिफंड
2. असुविधा के लिए उचित क्षतिपूर्ति

कृपया 5 दिनों के भीतर समाधान करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Blinkit Delivery Complaint Hindi 2026 | ब्लिंकिट शिकायत पत्र',
      description: 'Free Blinkit late delivery complaint in Hindi. Order not delivered, wrong items. Ready format for consumer complaint and NCH escalation.',
    }
  },

  {
    title: 'OLX Fraud Complaint to Police - Hindi',
    language: 'hindi',
    content: `सेवा में,
थाना प्रभारी / साइबर क्राइम सेल
{{police_station_name}}
{{police_station_address}}

विषय: OLX/Quikr के माध्यम से ऑनलाइन धोखाधड़ी की प्राथमिकी (FIR) दर्ज करने हेतु

महोदय,

मैं {{your_name}}, पुत्र/पुत्री {{father_name}}, निवासी {{your_address}}, आपको सूचित करना चाहता/चाहती हूं कि मेरे साथ OLX/Quikr platform पर ऑनलाइन धोखाधड़ी हुई है।

घटना का विवरण:
- दिनांक: {{fraud_date}}
- Platform: {{platform_name}} (OLX/Quikr)
- विज्ञापन विवरण: {{ad_details}}
- धोखेबाज़ का नाम (जो बताया): {{fraudster_name}}
- धोखेबाज़ का मोबाइल नंबर: {{fraudster_phone}}
- धोखेबाज़ का UPI ID / बैंक खाता: {{fraudster_upi_bank}}

कैसे हुई धोखाधड़ी:
{{fraud_description}}

हानि का विवरण:
- कुल राशि: ₹{{amount}}
- भुगतान माध्यम: {{payment_method}}
- Transaction ID / UTR: {{transaction_id}}

मैंने निम्न कार्यवाही पहले ही की है:
1. National Cyber Crime Helpline 1930 पर शिकायत (Ref: {{cyber_complaint_ref}})
2. बैंक को सूचित किया और खाता freeze करवाया
3. cybercrime.gov.in पर ऑनलाइन शिकायत दर्ज की

अतः आपसे अनुरोध है कि भारतीय न्याय संहिता (BNS) की धारा 318 (धोखाधड़ी) एवं IT Act 2000 की धारा 66D के तहत FIR दर्ज करें और तत्काल कार्यवाही करें।

संलग्न प्रमाण:
1. Chat screenshots (WhatsApp/OLX)
2. Payment proof (UPI/Bank transfer)
3. OLX/Quikr listing screenshot
4. Bank statement
5. Cyber Crime complaint acknowledgment

{{your_name}}
{{your_phone}}
{{your_email}}
Aadhaar No: {{aadhaar_last_4}}XXXX
दिनांक: {{date}}`,
    metadata: {
      title: 'OLX Fraud Police FIR Complaint Hindi 2026 | OLX ठगी FIR प्रारूप',
      description: 'Free OLX/Quikr fraud FIR complaint in Hindi. Online scam police complaint format. BNS Section 318, IT Act 66D. Ready for police station submission.',
    }
  },

  {
    title: 'PharmEasy Wrong Medicine Complaint - English',
    language: 'english',
    content: `To,
Customer Care / Grievance Officer
PharmEasy (API Holdings Ltd.)
{{pharmeasy_address}}
Email: grievance@pharmeasy.in

Subject: URGENT - Wrong Medicine Delivered - Order {{order_id}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to report a SERIOUS issue of wrong medicine delivery which poses a direct health risk.

Order Details:
- Order ID: {{order_id}}
- Order Date: {{order_date}}
- Delivery Date: {{delivery_date}}

Medicine Ordered (as per prescription): {{ordered_medicine}} ({{ordered_dosage}})
Medicine Received: {{received_medicine}} ({{received_dosage}})
Prescribing Doctor: Dr. {{doctor_name}}

⚠️ This is a critical patient safety issue. Wrong medicine delivery can cause serious adverse health effects.

Actions already taken:
1. I have NOT consumed the wrong medicine
2. I have preserved the delivered medicine with packaging intact
3. I have photographic evidence of the wrong medicine, batch number, and expiry date

I demand:
1. Immediate delivery of the CORRECT medicine as prescribed
2. Free pickup of the wrong medicine delivered
3. Full investigation into how this error occurred
4. Written explanation and assurance this will not recur

I am also reporting this to:
- Central Drugs Standard Control Organisation (CDSCO)
- State Drug Controller
- National Consumer Helpline (1915)

Please treat this as an URGENT matter and respond within 24 hours.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'PharmEasy Wrong Medicine Complaint 2026 | Medicine Delivery Error Letter',
      description: 'Free PharmEasy wrong medicine complaint letter in English. Wrong dosage, expired drugs. CDSCO complaint reference included. Ready format for urgent complaint.',
    }
  },

  {
    title: 'Boat Warranty Claim Complaint - English',
    language: 'english',
    content: `To,
Customer Support / Warranty Department
Imagine Marketing Pvt. Ltd. (boAt Lifestyle)
{{boat_address}}
Email: support@boat-lifestyle.com

Subject: Warranty Claim for Defective Product - Invoice {{invoice_number}}

Dear Sir/Madam,

I, {{your_name}}, from {{your_address}}, purchased {{product_name}} (Model: {{model_number}}) on {{purchase_date}} from {{purchase_source}} (Order/Invoice: {{invoice_number}}).

The product is within the warranty period of {{warranty_period}} (warranty valid until {{warranty_end_date}}).

Defect Description:
{{defect_description}}

The defect appeared on {{defect_date}}, which is within the warranty period. This is clearly a manufacturing defect and NOT caused by misuse or physical damage.

I contacted your customer support on {{complaint_date}} (Ticket: {{ticket_number}}) but was informed that {{denial_reason}}, which I believe is incorrect.

Under the Consumer Protection Act 2019:
- A warranty is a legal guarantee and cannot be arbitrarily denied
- Manufacturing defects within warranty period must be repaired or replaced free of cost
- If repair is not possible within 45 days, I am entitled to replacement or full refund

I request:
1. Free repair or replacement of the product under warranty
2. If repair/replacement not possible, full refund of ₹{{amount}}
3. Written acknowledgment of this warranty claim

Attached:
1. Purchase invoice
2. Warranty card
3. Photos/videos of the defect
4. Previous complaint communication

Please resolve within 15 days, failing which I will file a consumer court complaint.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Boat Warranty Claim Letter 2026 | Electronics Warranty Complaint English',
      description: 'Free boAt/electronics warranty complaint letter in English. Warranty denied for earbuds, smartwatch, speaker. Consumer Protection Act reference included.',
    }
  },

  {
    title: 'CRED UPI Charges Reversal Request - English',
    language: 'english',
    content: `To,
Customer Support / Grievance Officer
CRED (Dreamplug Technologies Pvt. Ltd.)
Email: grievanceofficer@cred.club

Subject: Unauthorized Charges / Payment Failure - Transaction {{transaction_id}}

Dear Sir/Madam,

I, {{your_name}}, am a CRED user (registered mobile: {{mobile_number}}) and writing regarding an unauthorized charge / payment issue on my account.

Issue Details:
- Transaction ID: {{transaction_id}}
- Date: {{transaction_date}}
- Amount: ₹{{amount}}
- Issue Type: {{issue_type}}

Description:
{{issue_description}}

Payment Details:
- Payment debited from: {{bank_name}} account ending {{account_last_4}}
- Credit card company: {{credit_card_company}}
- Credit card ending: {{card_last_4}}
- Current status on CRED App: {{cred_status}}
- Bank statement status: {{bank_status}}

I request:
1. Immediate reversal of ₹{{amount}} to my bank account
2. Written confirmation of the reversal
3. Investigation into why this error occurred

Previous complaint: Ticket {{ticket_number}} filed on {{complaint_date}} — unresolved.

If not resolved within 7 days, I will escalate to RBI Banking Ombudsman and National Consumer Helpline.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'CRED Charges Reversal Complaint 2026 | CRED UPI Payment Failed Letter',
      description: 'Free CRED unauthorized charges / payment failure complaint letter. CRED coins, UPI payment, subscription charges. Ready English format.',
    }
  },

  // ═══════════════════════════════════════════════
  // BANKING & FINANCE TEMPLATES (12 new)
  // ═══════════════════════════════════════════════

  {
    title: 'CIBIL Score Correction Application - Hindi',
    language: 'hindi',
    content: `सेवा में,
Consumer Dispute Resolution Team
TransUnion CIBIL Limited
One World Centre, Tower 2A, 19th Floor
Senapati Bapat Marg, Mumbai - 400013

विषय: CIBIL रिपोर्ट में गलत सूचना के सुधार हेतु आवेदन

महोदय/महोदया,

मैं {{your_name}}, CIBIL Score Subscriber, अपनी CIBIL रिपोर्ट में निम्नलिखित गलत सूचना के सुधार हेतु आवेदन कर रहा/रही हूं।

मेरा विवरण:
- नाम: {{your_name}}
- PAN: {{pan_number}}
- CIBIL Report Date: {{report_date}}
- Dispute Reference: {{dispute_ref}}

गलत सूचना का विवरण:
{{error_details}}

सही सूचना:
{{correct_information}}

संलग्न प्रमाण:
1. CIBIL रिपोर्ट (गलत entry highlighted)
2. बैंक/NBFC से Loan Closure Certificate / NOC
3. बैंक स्टेटमेंट (समय पर भुगतान का प्रमाण)
4. PAN Card कॉपी

Credit Information Companies (Regulation) Act 2005 के अनुसार, आपको 30 दिनों के भीतर इस dispute की जांच करके सुधार करना अनिवार्य है।

कृपया तत्काल कार्यवाही करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'CIBIL Score Correction Application Hindi 2026 | सिबिल सुधार आवेदन',
      description: 'Free CIBIL score correction application in Hindi. Wrong loan status, duplicate entry, paid loan showing overdue. TransUnion CIBIL dispute format.',
    }
  },

  {
    title: 'CIBIL Dispute Letter to Bank - English',
    language: 'english',
    content: `To,
The Branch Manager / Nodal Officer
{{bank_name}}
{{branch_address}}

Subject: Request to Update Correct Loan/Credit Card Information with CIBIL

Dear Sir/Madam,

I, {{your_name}}, am an account holder (Account/Loan No: {{account_number}}) at your branch. I am writing to request that you update the correct status of my loan/credit card account with TransUnion CIBIL, as the current CIBIL report reflects incorrect information.

CIBIL Report Error:
- Account showing as: {{current_wrong_status}} (e.g., "Written Off" / "Settled" / "Overdue")
- Correct status should be: {{correct_status}} (e.g., "Closed" / "Paid in Full" / "Current")
- DPD (Days Past Due) showing: {{wrong_dpd}}
- Correct DPD should be: {{correct_dpd}}

Evidence Attached:
1. Loan Closure Certificate / NOC from your branch dated {{noc_date}}
2. Bank statement showing all EMIs paid on time
3. CIBIL report highlighting the incorrect entry
4. PAN Card copy

As per RBI guidelines and Credit Information Companies (Regulation) Act, banks are required to report accurate data to credit bureaus. I request you to:

1. Update the correct loan/credit card status with CIBIL immediately
2. Provide written confirmation that the correction has been submitted
3. Mention the expected timeline for CIBIL report update

Thanking you,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'CIBIL Dispute Letter to Bank 2026 | Credit Score Correction Request English',
      description: 'Free CIBIL dispute letter to bank in English. Request bank to update correct loan status with CIBIL. Loan closure, NOC, paid in full correction.',
    }
  },

  {
    title: 'Loan Recovery Agent Harassment Complaint to RBI - Hindi',
    language: 'hindi',
    content: `सेवा में,
Banking Ombudsman
भारतीय रिज़र्व बैंक (RBI)
Complaint Management System
cms.rbi.org.in

विषय: लोन रिकवरी एजेंट द्वारा उत्पीड़न की शिकायत - {{bank_nbfc_name}}

महोदय/महोदया,

मैं {{your_name}}, लोन खाता संख्या {{loan_account}}, {{bank_nbfc_name}} का ग्राहक हूं। मैं {{bank_nbfc_name}} के लोन रिकवरी एजेंट द्वारा किए जा रहे उत्पीड़न की शिकायत दर्ज करना चाहता/चाहती हूं।

उत्पीड़न का विवरण:
{{harassment_details}}

एजेंट की जानकारी:
- एजेंट का नाम: {{agent_name}}
- एजेंसी का नाम: {{agency_name}}
- एजेंट का फोन नंबर: {{agent_phone}}

RBI गाइडलाइंस का उल्लंघन:
1. {{violation_1}} (उदा: रात {{time}} बजे फोन किया)
2. {{violation_2}} (उदा: परिवार के सदस्यों को धमकी)
3. {{violation_3}} (उदा: कार्यस्थल पर आकर अपमान)

मेरे द्वारा उठाए गए कदम:
- बैंक ग्रीवांस ऑफिसर को शिकायत: दिनांक {{bank_complaint_date}}, Ref: {{bank_complaint_ref}}
- पुलिस शिकायत: {{police_complaint_status}}

संलग्न प्रमाण:
1. कॉल रिकॉर्डिंग / WhatsApp स्क्रीनशॉट
2. बैंक शिकायत acknowledgment
3. पुलिस शिकायत / FIR कॉपी (यदि लागू)

RBI Master Circular के अनुसार यह स्पष्ट उल्लंघन है। कृपया तत्काल कार्यवाही करें।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Loan Recovery Harassment RBI Complaint Hindi 2026 | वसूली एजेंट शिकायत RBI',
      description: 'Free loan recovery agent harassment complaint to RBI Ombudsman in Hindi. RBI guidelines violation, threatening calls, physical harassment. Ready format.',
    }
  },

  {
    title: 'Cheque Bounce Legal Notice (Section 138) - English',
    language: 'english',
    content: `LEGAL NOTICE
Under Section 138 of the Negotiable Instruments Act, 1881

To,
{{drawer_name}}
{{drawer_address}}

From,
{{your_name}}
Through: Advocate {{advocate_name}}
{{advocate_address}}

Date: {{notice_date}}

Subject: Legal Notice for Dishonour of Cheque No. {{cheque_number}}

Dear {{drawer_name}},

Under instructions from and on behalf of my client {{your_name}}, I hereby serve upon you the following Legal Notice:

1. That my client is the lawful holder of Cheque No. {{cheque_number}} dated {{cheque_date}} for an amount of ₹{{amount}} (Rupees {{amount_in_words}} only), drawn on {{bank_name}}, {{branch_name}} branch, bearing account number ending {{account_last_4}}.

2. That the said cheque was issued by you towards {{purpose_of_cheque}}.

3. That my client presented the said cheque for encashment on {{presentation_date}} through {{client_bank_name}}, but the same was dishonoured/returned unpaid with the endorsement "{{bounce_reason}}" as per the Cheque Return Memo dated {{return_memo_date}}.

4. That the dishonour of the cheque constitutes an offence punishable under Section 138 of the Negotiable Instruments Act, 1881, which provides for imprisonment up to two years, or fine which may extend to twice the amount of the cheque, or both.

5. THEREFORE, in compliance with the proviso to Section 138 of the NI Act, you are hereby called upon to make payment of ₹{{amount}} (Rupees {{amount_in_words}} only) within FIFTEEN (15) DAYS from the date of receipt of this notice.

6. In the event of your failure to make payment within the stipulated period, my client shall be constrained to initiate criminal proceedings against you under Section 138 of the NI Act before the competent Magistrate Court, at your risk, cost, and consequences.

{{advocate_name}}
Advocate
Enrollment No: {{enrollment_number}}
{{advocate_phone}}
{{advocate_email}}`,
    metadata: {
      title: 'Cheque Bounce Legal Notice English 2026 | Section 138 NI Act Format',
      description: 'Free cheque bounce legal notice format in English (Section 138 NI Act). Ready format with all legal clauses. Dishonour of cheque notice for Magistrate Court.',
    }
  },

  {
    title: 'Cheque Bounce Legal Notice - Hindi',
    language: 'hindi',
    content: `कानूनी नोटिस
परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के अंतर्गत

प्रति,
{{drawer_name}}
{{drawer_address}}

प्रेषक,
{{your_name}}
द्वारा: अधिवक्ता {{advocate_name}}
{{advocate_address}}

दिनांक: {{notice_date}}

विषय: चेक संख्या {{cheque_number}} के अनादरण (बाउंस) के संबंध में कानूनी नोटिस

{{drawer_name}} जी,

मेरे मुवक्किल {{your_name}} के निर्देशानुसार, मैं आपको निम्नलिखित कानूनी नोटिस प्रेषित करता/करती हूं:

1. मेरे मुवक्किल के पास चेक संख्या {{cheque_number}}, दिनांक {{cheque_date}}, राशि ₹{{amount}} (रुपये {{amount_in_words}} मात्र), {{bank_name}}, शाखा {{branch_name}} पर आहरित, विधिपूर्वक धारक के रूप में है।

2. उक्त चेक आपने {{purpose_of_cheque}} के लिए जारी किया था।

3. मेरे मुवक्किल ने दिनांक {{presentation_date}} को उक्त चेक {{client_bank_name}} के माध्यम से भुनाने हेतु प्रस्तुत किया, परंतु वह "{{bounce_reason}}" कारण से अनादरित/बाउंस हो गया।

4. चेक का अनादरण परक्राम्य लिखत अधिनियम 1881 की धारा 138 के अंतर्गत दंडनीय अपराध है जिसमें दो वर्ष तक का कारावास, या चेक की राशि से दोगुनी तक का जुर्माना, या दोनों हो सकते हैं।

5. अतः धारा 138 के प्रावधान के अनुपालन में, आपको इस नोटिस की प्राप्ति के 15 (पंद्रह) दिनों के भीतर ₹{{amount}} का भुगतान करने हेतु कहा जाता है।

6. निर्धारित अवधि में भुगतान न करने पर मेरे मुवक्किल को आपके विरुद्ध सक्षम मजिस्ट्रेट न्यायालय में धारा 138 के अंतर्गत आपराधिक कार्यवाही प्रारंभ करने को बाध्य होना पड़ेगा।

अधिवक्ता {{advocate_name}}
नामांकन संख्या: {{enrollment_number}}
{{advocate_phone}}
{{advocate_email}}`,
    metadata: {
      title: 'चेक बाउंस कानूनी नोटिस हिंदी 2026 | धारा 138 NI Act',
      description: 'Free cheque bounce legal notice Hindi format. धारा 138 परक्राम्य लिखत अधिनियम के अंतर्गत कानूनी नोटिस का प्रारूप। मजिस्ट्रेट कोर्ट complaint के लिए।',
    }
  },

  {
    title: 'NBFC Loan Complaint to RBI Ombudsman - Hindi',
    language: 'hindi',
    content: `सेवा में,
NBFC Ombudsman
भारतीय रिज़र्व बैंक
Complaint Management System (cms.rbi.org.in)

विषय: {{nbfc_name}} द्वारा अनुचित व्यवहार / नियम उल्लंघन की शिकायत

महोदय/महोदया,

मैं {{your_name}}, लोन खाता {{loan_account_number}}, {{nbfc_name}} का ग्राहक हूं।

शिकायत का विवरण:
{{complaint_details}}

लोन विवरण:
- NBFC का नाम: {{nbfc_name}}
- लोन खाता संख्या: {{loan_account_number}}
- लोन प्रकार: {{loan_type}}
- लोन राशि: ₹{{loan_amount}}
- EMI राशि: ₹{{emi_amount}}
- बताई गई ब्याज दर: {{stated_interest_rate}}%
- वास्तव में काटी जा रही दर: {{actual_interest_rate}}%

NBFC से शिकायत:
- दिनांक: {{nbfc_complaint_date}}
- शिकायत संख्या: {{nbfc_complaint_ref}}
- NBFC का जवाब: {{nbfc_response}}

संलग्न दस्तावेज़:
1. लोन सैंक्शन लेटर / Agreement
2. EMI भुगतान रिकॉर्ड (बैंक स्टेटमेंट)
3. NBFC शिकायत acknowledgment
4. अन्य प्रासंगिक दस्तावेज़

कृपया RBI NBFC Ombudsman Scheme के अंतर्गत इस शिकायत की जांच करें और उचित कार्यवाही करें।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'NBFC Complaint to RBI Hindi 2026 | गैर बैंकिंग कंपनी RBI शिकायत',
      description: 'Free NBFC loan complaint to RBI Ombudsman in Hindi. Bajaj Finance, IIFL, Home Credit excessive interest, hidden charges. Ready RBI complaint format.',
    }
  },

  {
    title: 'Gold Loan Release Request Letter - English',
    language: 'english',
    content: `To,
The Branch Manager
{{bank_nbfc_name}}
{{branch_address}}

Subject: Request for Release of Pledged Gold Ornaments - Loan Account {{loan_account}}

Dear Sir/Madam,

I, {{your_name}}, Gold Loan Account No. {{loan_account}}, am writing to request the release of my pledged gold ornaments after full repayment of the loan.

Loan Details:
- Loan Account Number: {{loan_account}}
- Loan Amount: ₹{{loan_amount}}
- Date of Pledge: {{pledge_date}}
- Final Payment Date: {{final_payment_date}}
- Total Amount Paid: ₹{{total_paid}}
- Remaining Outstanding: NIL

Gold Ornaments Pledged (as per Pledge Receipt):
1. {{item_1}} - Weight: {{weight_1}} grams
2. {{item_2}} - Weight: {{weight_2}} grams
3. {{item_3}} - Weight: {{weight_3}} grams
Total Gold Weight Pledged: {{total_weight}} grams

I have completed full repayment of the loan as on {{final_payment_date}}. As per RBI guidelines and loan agreement terms, the pledged gold ornaments should be released immediately upon full repayment.

I request:
1. Immediate release of all pledged gold ornaments
2. Verification of gold weight and items in my presence
3. Loan closure certificate / NOC
4. Return of all original documents

Please note that I will verify the weight and condition of each ornament at the time of release. Any shortage in weight or damage to ornaments will be reported.

Thanking you,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Gold Loan Release Request Letter 2026 | Gold Ornament Release English Format',
      description: 'Free gold loan release request letter in English. After full repayment, demand gold ornament release from Muthoot, Manappuram, bank. Ready format.',
    }
  },

  {
    title: 'SEBI Complaint Against Stock Broker - English',
    language: 'english',
    content: `To,
SEBI SCORES Portal
Securities and Exchange Board of India
scores.sebi.gov.in

Subject: Complaint Against Stock Broker / Mutual Fund AMC - {{entity_name}}

Dear Sir/Madam,

I, {{your_name}}, am filing a complaint against {{entity_name}} (SEBI Registration: {{sebi_reg_number}}) for the following grievance:

Complainant Details:
- Name: {{your_name}}
- PAN: {{pan_number}}
- Demat Account / Folio: {{account_number}}
- Depository: {{depository}} (NSDL/CDSL)
- DP ID: {{dp_id}}

Complaint Details:
{{complaint_details}}

Financial Details:
- Investment Amount: ₹{{investment_amount}}
- Loss/Dispute Amount: ₹{{dispute_amount}}
- Transaction Date(s): {{transaction_dates}}
- Transaction/Contract Note No: {{contract_note}}

Previous Complaint to Entity:
- Date: {{entity_complaint_date}}
- Reference: {{entity_complaint_ref}}
- Response: {{entity_response}}

I request SEBI to:
1. Direct the entity to {{relief_requested}}
2. Investigate the matter and take appropriate action
3. Compensate for the financial loss caused

Attached Documents:
1. Contract notes / Transaction statements
2. Bank statement showing debits/credits
3. Communication with the entity
4. KYC documents
5. Previous complaint correspondence

{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'SEBI SCORES Complaint Format 2026 | Stock Broker, Mutual Fund Complaint',
      description: 'Free SEBI SCORES complaint format in English. Stock broker unauthorized trades, mutual fund redemption delay, demat charges. Ready format for SEBI portal.',
    }
  },

  {
    title: 'FD Maturity Amount Not Received Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
शाखा प्रबंधक / ग्रीवांस ऑफिसर
{{bank_name}}
{{branch_address}}

विषय: सावधि जमा (FD) मैच्योरिटी राशि प्राप्त न होने की शिकायत

महोदय/महोदया,

मैं {{your_name}}, बचत खाता {{savings_account}} का खाताधारक, आपकी शाखा में रखी अपनी सावधि जमा के संबंध में शिकायत दर्ज करना चाहता/चाहती हूं।

FD विवरण:
- FD खाता / रसीद संख्या: {{fd_number}}
- FD राशि: ₹{{fd_amount}}
- जमा दिनांक: {{deposit_date}}
- मैच्योरिटी दिनांक: {{maturity_date}}
- ब्याज दर: {{interest_rate}}%
- मैच्योरिटी राशि (अपेक्षित): ₹{{expected_maturity_amount}}
- Linked बचत खाता: {{savings_account}}

समस्या:
{{problem_description}}

मैच्योरिटी दिनांक {{maturity_date}} बीत चुकी है, परंतु ₹{{expected_maturity_amount}} की मैच्योरिटी राशि मेरे बचत खाते में जमा नहीं हुई है।

मांग:
1. मैच्योरिटी राशि ₹{{expected_maturity_amount}} तत्काल बचत खाते में जमा करें
2. विलंब के लिए FD ब्याज दर पर अतिरिक्त ब्याज दें
3. लिखित स्पष्टीकरण दें कि विलंब क्यों हुआ

कृपया 7 दिनों में कार्यवाही करें, अन्यथा RBI Banking Ombudsman में शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'FD Maturity Complaint Hindi 2026 | एफडी मैच्योरिटी शिकायत पत्र',
      description: 'Free FD maturity amount not received complaint in Hindi. Fixed deposit maturity delay, wrong interest. Ready format for bank branch and RBI complaint.',
    }
  },

  {
    title: 'Bank Locker Missing Items Complaint - English',
    language: 'english',
    content: `To,
The Branch Manager
{{bank_name}}
{{branch_address}}

Subject: URGENT - Missing Items from Bank Locker No. {{locker_number}}

Dear Sir/Madam,

I, {{your_name}}, Locker Holder No. {{locker_number}} at your branch, am writing to report that items are missing from my bank locker.

Locker Details:
- Locker Number: {{locker_number}}
- Locker Agreement Date: {{agreement_date}}
- Annual Rent: ₹{{annual_rent}}
- Last Accessed by Me: {{last_access_date}}
- Discovery Date of Missing Items: {{discovery_date}}

Missing Items:
1. {{missing_item_1}} - Estimated Value: ₹{{value_1}}
2. {{missing_item_2}} - Estimated Value: ₹{{value_2}}
3. {{missing_item_3}} - Estimated Value: ₹{{value_3}}
Total Estimated Value: ₹{{total_value}}

I DEMAND the following IMMEDIATE actions:
1. Preservation and review of CCTV footage of the locker room from {{last_access_date}} to {{discovery_date}}
2. Complete locker access register for the same period
3. Internal investigation by the bank
4. Filing of FIR by the bank (as custodian of the locker)
5. Compensation as per RBI Revised Locker Guidelines (100x annual rent for bank negligence)

As per RBI's revised guidelines on safe deposit lockers (2022, updated 2025), the bank is liable for loss if it occurs due to bank's negligence, including inadequate security, staff fraud, or failure to maintain proper access records.

I am also filing:
- FIR at {{police_station_name}} Police Station
- Complaint with RBI Banking Ombudsman

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Bank Locker Missing Items Complaint 2026 | Locker Theft English Format',
      description: 'Free bank locker missing items complaint in English. RBI locker guidelines, CCTV demand, compensation claim. Ready format for bank, police, and RBI Ombudsman.',
    }
  },

  {
    title: 'EMI Wrong Debit Reversal Request - Hinglish',
    language: 'hinglish',
    content: `To,
Branch Manager / Customer Care
{{bank_name}}
{{branch_address}}

Subject: Wrong EMI Amount Debited - Reversal Request - Account {{account_number}}

Dear Sir/Madam,

Main {{your_name}}, savings account {{account_number}} ka holder hoon. Meri complaint hai ki mere account se galat EMI amount debit hua hai.

Loan/EMI Details:
- Loan Account: {{loan_account}}
- Loan Provider: {{lender_name}}
- Agreed EMI Amount: ₹{{agreed_emi}}
- Actually Debited: ₹{{debited_amount}}
- Extra Amount Debited: ₹{{extra_amount}}
- Debit Date: {{debit_date}}
- NACH/ECS Mandate Ref: {{mandate_ref}}

Issue:
{{issue_details}}

Mere loan agreement ke according EMI ₹{{agreed_emi}} hai, lekin mere account se ₹{{debited_amount}} debit kiya gaya hai. Ye ₹{{extra_amount}} extra amount galat hai.

Agar ye loan already closed hai to:
- Loan Closure Date: {{closure_date}}
- NOC/Closure Certificate: Attached

I request:
1. ₹{{extra_amount}} ka immediate reversal mere savings account mein
2. NACH mandate cancel ya correct karein
3. Agar wrongful debit se overdraft/bounce charges lage hain to wo bhi reverse karein
4. Written confirmation bhejein

Agar 7 din mein action nahi hua to RBI Banking Ombudsman mein complaint karunga.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'EMI Wrong Debit Reversal Hinglish 2026 | NACH Mandate Complaint Format',
      description: 'Free EMI wrong debit reversal complaint in Hinglish. NACH mandate wrong amount, double deduction, EMI after loan closure. Ready format for bank complaint.',
    }
  },

  {
    title: 'Mutual Fund Redemption Delay Complaint - English',
    language: 'english',
    content: `To,
Grievance Cell / Compliance Officer
{{amc_name}} Asset Management Company
{{amc_address}}

Subject: Mutual Fund Redemption Amount Not Received - Folio {{folio_number}}

Dear Sir/Madam,

I, {{your_name}} (PAN: {{pan_number}}), am a unit holder in {{scheme_name}} (Folio: {{folio_number}}).

Redemption Details:
- Redemption Date: {{redemption_date}}
- Units Redeemed: {{units_redeemed}}
- NAV Applied: ₹{{nav}}
- Expected Amount: ₹{{expected_amount}}
- Registered Bank Account: {{bank_name}} ending {{account_last_4}}
- Settlement Due Date (T+3): {{settlement_due_date}}

As of today ({{days_passed}} days since redemption), the redemption amount of ₹{{expected_amount}} has NOT been credited to my registered bank account.

SEBI regulations mandate mutual fund redemption proceeds to be credited within T+3 business days. The delay beyond this period is a regulatory violation.

I request:
1. Immediate credit of ₹{{expected_amount}} to my registered bank account
2. Interest compensation for the delay period at applicable rate
3. Written explanation for the delay

Previous complaint to AMC: {{complaint_ref}} on {{complaint_date}} — unresolved.

If not resolved within 7 days, I will escalate to SEBI SCORES portal.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Mutual Fund Redemption Delay Complaint 2026 | SEBI MF Complaint English',
      description: 'Free mutual fund redemption delay complaint in English. SIP, lump sum redemption not credited. T+3 SEBI rule reference. Ready AMC and SEBI SCORES format.',
    }
  },

  // ═══════════════════════════════════════════════
  // GOVERNMENT TEMPLATES (14 new)
  // ═══════════════════════════════════════════════

  {
    title: 'IRCTC Train Ticket Refund Application - Hindi',
    language: 'hindi',
    content: `सेवा में,
मुख्य वाणिज्य प्रबंधक / स्टेशन मास्टर
{{station_name}} रेलवे स्टेशन
{{railway_zone}}

विषय: ट्रेन टिकट रिफंड / TDR के लिए आवेदन

महोदय,

मैं {{your_name}}, PNR संख्या {{pnr_number}} का यात्री, निम्नलिखित के लिए आवेदन कर रहा/रही हूं:

यात्रा विवरण:
- PNR संख्या: {{pnr_number}}
- ट्रेन संख्या व नाम: {{train_number}} - {{train_name}}
- यात्रा दिनांक: {{journey_date}}
- From: {{from_station}} → To: {{to_station}}
- श्रेणी: {{class}} (AC/Sleeper/General)
- यात्री: {{passenger_names}}
- टिकट राशि: ₹{{ticket_amount}}
- बुकिंग माध्यम: {{booking_source}} (IRCTC/Counter)

रिफंड का कारण:
{{refund_reason}}

भुगतान विवरण:
- Transaction ID: {{transaction_id}}
- भुगतान माध्यम: {{payment_method}}

मांग: कृपया रेलवे नियमों के अनुसार मेरे टिकट का पूर्ण/आंशिक रिफंड {{refund_mode}} में प्रोसेस करें।

संलग्न:
1. E-ticket / टिकट की कॉपी
2. भुगतान प्रमाण
3. {{additional_document}}

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'IRCTC Train Ticket Refund Application Hindi 2026 | रेलवे रिफंड आवेदन',
      description: 'Free IRCTC train ticket refund application in Hindi. TDR format, train cancel refund, tatkal refund rules. Ready format for railway station submission.',
    }
  },

  {
    title: 'EPF Withdrawal Delay Complaint to EPFO - Hindi',
    language: 'hindi',
    content: `सेवा में,
क्षेत्रीय भविष्य निधि आयुक्त
EPFO क्षेत्रीय कार्यालय
{{epfo_office_address}}

विषय: PF निकासी / Transfer claim में विलंब की शिकायत - UAN {{uan_number}}

महोदय/महोदया,

मैं {{your_name}}, UAN {{uan_number}}, Member ID {{member_id}} का सदस्य, अपने PF claim में हो रहे अत्यधिक विलंब की शिकायत दर्ज करना चाहता/चाहती हूं।

Claim विवरण:
- UAN: {{uan_number}}
- Member ID: {{member_id}}
- Claim प्रकार: {{claim_type}} (Withdrawal/Transfer/Advance)
- Claim Submit Date: {{claim_date}}
- Claim Reference: {{claim_reference}}
- Claim Amount: ₹{{claim_amount}}
- Current Status: {{current_status}}
- दिन बीत चुके: {{days_passed}}

नियोक्ता विवरण:
- कंपनी: {{company_name}}
- EPF Code: {{epf_code}}
- Date of Exit: {{exit_date}}

मैंने EPFO Grievance Portal (epfigms.gov.in) पर भी शिकायत दर्ज की है:
- Grievance Reference: {{grievance_ref}}

20 कार्य दिवस की सामान्य अवधि बीत चुकी है। कृपया मेरा claim तत्काल प्रोसेस करें।

{{your_name}}
{{your_phone}}
{{your_email}}
Aadhaar: {{aadhaar_last_4}}XXXX
दिनांक: {{date}}`,
    metadata: {
      title: 'EPF/PF Withdrawal Delay Complaint Hindi 2026 | EPFO शिकायत पत्र',
      description: 'Free EPF/PF withdrawal delay complaint in Hindi for EPFO Regional Office. UAN, Member ID, claim reference format. Ready for in-person submission.',
    }
  },

  {
    title: 'Income Tax Refund Delay Complaint to CPGRAMS - Hindi',
    language: 'hindi',
    content: `CPGRAMS Public Grievance
pgportal.gov.in
Ministry of Finance / Central Board of Direct Taxes (CBDT)

विषय: Income Tax Refund {{assessment_year}} में विलंब की शिकायत

महोदय/महोदया,

मैं {{your_name}} (PAN: {{pan_number}}) {{assessment_year}} के Income Tax Refund में अत्यधिक विलंब की शिकायत दर्ज कर रहा/रही हूं।

ITR विवरण:
- PAN: {{pan_number}}
- Assessment Year: {{assessment_year}}
- ITR Form: {{itr_form}} (ITR-1/2/3/4)
- Filing Date: {{filing_date}}
- Acknowledgment No: {{ack_number}}
- e-Verification Date: {{verification_date}}
- Refund Amount Claimed: ₹{{refund_amount}}
- CPC Processing Status: {{processing_status}}
- Refund Status: {{refund_status}}

समस्या:
{{problem_details}}

पहले की गई कार्यवाही:
1. e-Nivaran grievance filed: {{e_nivaran_ref}}
2. CPC Bengaluru helpline 1800-425-2229 पर call किया
3. Bank account pre-validated on e-Filing portal: हां

कृपया CBDT/CPC Bengaluru को निर्देशित करें कि मेरा refund तत्काल प्रोसेस किया जाए।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Income Tax Refund CPGRAMS Complaint Hindi 2026 | इनकम टैक्स रिफंड शिकायत',
      description: 'Free income tax refund delay CPGRAMS complaint in Hindi. ITR refund pending, refund failure. Ready format for pgportal.gov.in submission to CBDT.',
    }
  },

  {
    title: 'Aadhaar Card Correction Application - Hindi',
    language: 'hindi',
    content: `सेवा में,
UIDAI / Aadhaar Enrolment Centre
{{centre_address}}

विषय: आधार कार्ड में {{correction_type}} सुधार हेतु आवेदन

महोदय/महोदया,

मैं {{your_name}}, आधार संख्या {{aadhaar_number}}, निम्नलिखित सुधार के लिए आवेदन कर रहा/रही हूं:

वर्तमान (गलत) जानकारी:
- {{field_name}}: {{wrong_value}}

सही जानकारी:
- {{field_name}}: {{correct_value}}

पहले ऑनलाइन प्रयास किया:
- Update Request Number (URN): {{urn_number}}
- Status: {{online_status}} (Rejected/Pending)
- Reject Reason: {{reject_reason}}

संलग्न दस्तावेज़ ({{correction_type}} प्रमाण):
1. {{document_1}} (उदा: पासपोर्ट, मतदाता पहचान पत्र)
2. {{document_2}} (उदा: जन्म प्रमाण पत्र, मार्कशीट)
3. मौजूदा आधार कार्ड की कॉपी

कृपया मेरा सुधार अनुरोध स्वीकार करें और updated आधार जारी करें।

UIDAI Helpline 1947 पर भी शिकायत दर्ज की है: Ref {{helpline_ref}}

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Aadhaar Correction Application Hindi 2026 | आधार सुधार आवेदन',
      description: 'Free Aadhaar card correction application in Hindi. Name, DOB, address update rejected. Ready format for UIDAI centre and online resubmission.',
    }
  },

  {
    title: 'Driving License Delay RTO Complaint - English',
    language: 'english',
    content: `To,
The Regional Transport Officer (RTO)
{{rto_office_name}}
{{rto_address}}

Subject: Delay in Issuance of Driving License - Application No. {{application_number}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to complain about the excessive delay in the issuance of my Driving License.

Application Details:
- Application Number: {{application_number}}
- Application Type: {{application_type}} (New DL / Renewal / Duplicate / Address Change)
- Date of Application: {{application_date}}
- Driving Test Date: {{test_date}}
- Test Result: {{test_result}}
- Fee Paid: ₹{{fee_amount}} (Receipt No: {{receipt_number}})
- Current Status on Sarathi Portal: {{current_status}}

It has been {{days_passed}} days since my application, which far exceeds the standard processing time of {{standard_time}} days.

I request:
1. Immediate processing and dispatch of my Driving License
2. Written explanation for the delay
3. Updated timeline for DL receipt

If this matter is not resolved within 15 days, I will escalate to the State Transport Commissioner, CPGRAMS, and public grievance portals.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Driving License Delay RTO Complaint 2026 | DL Application Pending English',
      description: 'Free driving license delay RTO complaint in English. DL pending, Sarathi portal status stuck. Ready format for RTO office and State Transport escalation.',
    }
  },

  {
    title: 'LPG Gas Cylinder Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
{{gas_agency_name}}
{{agency_address}}
एवं प्रतिलिपि: {{oil_company}} (HP Gas/Bharat Gas/Indane Gas)

विषय: गैस सिलेंडर {{complaint_type}} की शिकायत - उपभोक्ता संख्या {{consumer_number}}

महोदय/महोदया,

मैं {{your_name}}, LPG उपभोक्ता संख्या {{consumer_number}}, आपकी एजेंसी {{gas_agency_name}} का ग्राहक हूं।

शिकायत का विवरण:
{{complaint_details}}

सिलेंडर बुकिंग विवरण:
- बुकिंग दिनांक: {{booking_date}}
- बुकिंग माध्यम: {{booking_mode}} (IVRS/App/SMS)
- बुकिंग संदर्भ: {{booking_ref}}
- भुगतान: ₹{{amount}} ({{payment_mode}})

{{#if_underweight}}
सिलेंडर वज़न शिकायत:
- डिलीवरी दिनांक: {{delivery_date}}
- तोलने पर वज़न: {{actual_weight}} kg (मानक: 14.2 kg ± 150 gm)
- कम वज़न: {{short_weight}} kg
{{/if_underweight}}

मांग:
1. {{demand_1}}
2. {{demand_2}}

अगर 7 दिनों में समाधान न हो तो MoPNG e-Seva portal (mopng.gov.in) पर शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'LPG Gas Cylinder Complaint Hindi 2026 | गैस सिलेंडर शिकायत पत्र',
      description: 'Free LPG gas cylinder complaint in Hindi. Delivery delay, under-weight, extra charges. HP Gas, Bharat Gas, Indane. Ready format for agency and oil company.',
    }
  },

  {
    title: 'PM Kisan Payment Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
कृषि अधिकारी / खंड विकास अधिकारी (BDO)
{{block_office_name}}
{{block_address}}

विषय: PM-KISAN योजना की किस्त प्राप्त न होने की शिकायत

महोदय/महोदया,

मैं {{your_name}}, ग्राम {{village}}, तहसील {{tehsil}}, ज़िला {{district}} का किसान, PM-KISAN सम्मान निधि योजना का पंजीकृत लाभार्थी हूं।

लाभार्थी विवरण:
- PM-KISAN Registration Number: {{registration_number}}
- Aadhaar Number: {{aadhaar_number}}
- बैंक खाता: {{bank_name}}, खाता संख्या {{account_number}}
- IFSC: {{ifsc_code}}
- मोबाइल: {{mobile_number}}

शिकायत:
मुझे {{installment_number}} किस्त ({{installment_period}}) की राशि ₹2,000 प्राप्त नहीं हुई है।

Beneficiary Status (pmkisan.gov.in पर):
{{status_details}}

eKYC Status: {{ekyc_status}}

पहले की गई कार्यवाही:
- PM-KISAN Helpline 155261 पर शिकायत: {{helpline_ref}}
- pmkisan-ict@gov.in पर email: दिनांक {{email_date}}

कृपया मेरी किस्त जारी करने हेतु आवश्यक कार्यवाही करें।

{{your_name}}
{{your_phone}}
ग्राम: {{village}}, तहसील: {{tehsil}}
दिनांक: {{date}}`,
    metadata: {
      title: 'PM Kisan Payment Complaint Hindi 2026 | पीएम किसान किस्त शिकायत पत्र',
      description: 'Free PM-KISAN payment not received complaint in Hindi. Installment pending, eKYC issue. Ready format for BDO office and Agriculture department.',
    }
  },

  {
    title: 'Electricity Meter Wrong Reading Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
कार्यपालक अभियंता / उपखंड अधिकारी (SDO)
{{discom_name}}
{{subdivision_name}}, {{area}}

विषय: बिजली मीटर की गलत रीडिंग / अत्यधिक बिल की शिकायत - Consumer No. {{consumer_number}}

महोदय/महोदया,

मैं {{your_name}}, बिजली उपभोक्ता संख्या {{consumer_number}}, {{your_address}} का निवासी, अपने बिजली मीटर की गलत रीडिंग / अत्यधिक बिल की शिकायत दर्ज कर रहा/रही हूं।

बिल विवरण:
- उपभोक्ता संख्या: {{consumer_number}}
- विवादित बिल माह: {{bill_month}}
- बिल राशि: ₹{{bill_amount}}
- पिछले माह का बिल: ₹{{previous_bill}}
- मीटर रीडिंग (बिल में): {{billed_reading}} Units
- वास्तविक मीटर रीडिंग: {{actual_reading}} Units
- अंतर: {{difference}} Units

{{problem_details}}

मांग:
1. मीटर की जांच (Meter Testing) करवाई जाए
2. सही रीडिंग के आधार पर revised बिल जारी किया जाए
3. अतिरिक्त राशि ₹{{excess_amount}} वापस/adjust की जाए
4. खराब मीटर है तो तुरंत बदला जाए

शिकायत संख्या: {{complaint_ref}} (दिनांक {{complaint_date}} - DISCOM helpline)

अगर 15 दिन में समाधान न हो तो Consumer Grievance Redressal Forum (CGRF) में शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Electricity Meter Complaint Hindi 2026 | बिजली मीटर/बिल शिकायत पत्र',
      description: 'Free electricity meter wrong reading complaint in Hindi. Excessive bill, faulty meter, wrong reading. Ready format for DISCOM, CGRF, and Electricity Ombudsman.',
    }
  },

  {
    title: 'Municipal Corporation Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
नगर आयुक्त / वार्ड पार्षद
{{municipal_body}} ({{mcd_bmc_bbmp}})
{{ward_name}}, {{city}}

विषय: {{complaint_type}} की शिकायत - वार्ड {{ward_number}}

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, वार्ड {{ward_number}} ({{ward_name}}) का निवासी, निम्नलिखित नागरिक समस्या की शिकायत करता/करती हूं:

समस्या का विवरण:
{{complaint_details}}

स्थान: {{exact_location}}
समस्या कब से है: {{since_when}}
प्रभावित परिवार/लोग: {{affected_people}}

पहले की गई शिकायत:
- नगर निगम helpline: {{helpline_ref}} (दिनांक {{complaint_date}})
- वार्ड कार्यालय: {{ward_complaint_ref}}

मांग:
1. {{demand_1}}
2. {{demand_2}}
3. तत्काल कार्यवाही और लिखित स्थिति अपडेट

कृपया 15 दिनों के भीतर कार्यवाही करें, अन्यथा District Magistrate / CPGRAMS पर शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Municipal Corporation Complaint Hindi 2026 | नगर निगम शिकायत पत्र',
      description: 'Free municipal corporation complaint in Hindi. Road, sewer, garbage, water, property tax. MCD, BMC, BBMP. Ready format for ward office and Nagar Ayukt.',
    }
  },

  {
    title: 'Birth Certificate Delay Application - English',
    language: 'english',
    content: `To,
The Sub-Registrar (Births & Deaths) / Municipal Commissioner
{{municipal_office_name}}
{{office_address}}

Subject: Delay in Issuance of Birth Certificate - Application No. {{application_number}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to complain about the delay in the issuance of a Birth Certificate for:

Child/Person Details:
- Name: {{child_name}}
- Date of Birth: {{date_of_birth}}
- Place of Birth: {{place_of_birth}} (Hospital: {{hospital_name}})
- Father's Name: {{father_name}}
- Mother's Name: {{mother_name}}

Application Details:
- Application Number: {{application_number}}
- Date of Application: {{application_date}}
- Registration Type: {{registration_type}} (Within 21 days / Late Registration)
- Fee Paid: ₹{{fee_paid}} (Receipt No: {{receipt_number}})
- Current Status: {{current_status}}

It has been {{days_passed}} days since my application, which exceeds the standard processing time.

Hospital/Institution has already provided the birth declaration form to the registrar on {{declaration_date}}.

I request immediate issuance of the Birth Certificate.

If not resolved within 15 days, I will escalate to the District Registrar and CPGRAMS (pgportal.gov.in).

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Birth Certificate Delay Complaint English 2026 | Registration Delay Letter',
      description: 'Free birth certificate delay complaint in English. Application pending, late registration. Ready format for Sub-Registrar, Municipal office, and CPGRAMS.',
    }
  },

  // ═══════════════════════════════════════════════
  // TRANSPORT & TRAVEL TEMPLATES (8 new)
  // ═══════════════════════════════════════════════

  {
    title: 'DGCA Airlines Complaint Application - English',
    language: 'english',
    content: `To,
Director General of Civil Aviation (DGCA)
Through: AirSewa Portal (airsewa.gov.in)

Subject: Complaint Against {{airline_name}} - PNR {{pnr_number}}

Dear Sir/Madam,

I, {{your_name}}, am filing a complaint against {{airline_name}} for violation of DGCA Civil Aviation Requirements (CAR).

Flight Details:
- Airline: {{airline_name}}
- PNR: {{pnr_number}}
- Flight: {{flight_number}}
- Date: {{flight_date}}
- Route: {{origin}} → {{destination}}
- Class: {{travel_class}}
- Ticket Amount: ₹{{ticket_amount}}

Complaint:
{{complaint_details}}

DGCA CAR Violation:
{{car_violation}} (e.g., Section 3 - Passenger Rights during delay/cancellation)

Compensation Claimed: ₹{{compensation_amount}} as per DGCA norms.

Previous Complaint to Airline:
- Date: {{airline_complaint_date}}
- Reference: {{airline_complaint_ref}}
- Airline Response: {{airline_response}}

Attached: Boarding pass, ticket, delay proof, expense receipts, airline communication.

{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'DGCA Airlines Complaint Format 2026 | AirSewa Flight Complaint English',
      description: 'Free DGCA airlines complaint format in English. Flight cancel, delay, denied boarding, baggage loss. AirSewa portal format with CAR reference.',
    }
  },

  {
    title: 'Flight Cancel Refund Demand Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा / Grievance Officer
{{airline_name}}
{{airline_address}}

विषय: फ्लाइट रद्द होने पर रिफंड की मांग - PNR {{pnr_number}}

महोदय/महोदया,

मैं {{your_name}}, PNR {{pnr_number}} का यात्री, आपकी एयरलाइन द्वारा फ्लाइट {{flight_number}} (दिनांक {{flight_date}}, {{origin}} → {{destination}}) रद्द करने पर ₹{{ticket_amount}} के रिफंड की मांग करता/करती हूं।

फ्लाइट रद्द की सूचना: {{cancellation_notice}} (कितने घंटे पहले मिली)
रद्द करने का कारण: {{cancellation_reason}}
वैकल्पिक फ्लाइट: {{alternative_offered}} (दी गई / नहीं दी गई)

DGCA नियमों के अनुसार:
- 24 घंटे से कम की सूचना पर रद्द: पूर्ण रिफंड + मुआवज़ा
- एयरलाइन की ग़लती से रद्द: भोजन, आवास, और परिवहन का खर्च भी देय

मांग:
1. ₹{{ticket_amount}} का पूर्ण रिफंड
2. मुआवज़ा ₹{{compensation_amount}}
3. अतिरिक्त खर्चे ₹{{additional_expenses}} (होटल/भोजन/परिवहन)

कृपया 15 दिनों में कार्यवाही करें, अन्यथा DGCA AirSewa और Consumer Court में शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Flight Cancel Refund Letter Hindi 2026 | फ्लाइट रद्द रिफंड शिकायत',
      description: 'Free flight cancel refund demand letter in Hindi. DGCA rules, compensation claim. IndiGo, Air India, SpiceJet. Ready format for airline and DGCA complaint.',
    }
  },

  {
    title: 'FASTag Double Deduction Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
प्रबंधक, ग्राहक सेवा
{{fastag_issuer}} (FASTag जारीकर्ता बैंक)
एवं प्रतिलिपि: NHAI (National Highways Authority of India)

विषय: FASTag से दोहरी/अतिरिक्त कटौती की शिकायत

महोदय/महोदया,

मैं {{your_name}}, FASTag खाता {{fastag_id}} का धारक, निम्नलिखित गलत toll कटौती की शिकायत करता/करती हूं।

वाहन विवरण:
- वाहन संख्या: {{vehicle_number}}
- वाहन श्रेणी: {{vehicle_class}} (Car/LMV)
- FASTag ID: {{fastag_id}}
- FASTag बैंक: {{fastag_issuer}}

गलत कटौती का विवरण:
- Toll Plaza: {{toll_plaza_name}}, {{highway}}
- दिनांक: {{transaction_date}}
- समय: {{transaction_time}}
- सही शुल्क: ₹{{correct_amount}}
- वास्तव में कटा: ₹{{debited_amount}}
- अतिरिक्त कटौती: ₹{{excess_amount}}
- Transaction Reference: {{transaction_ref}}

{{additional_details}}

मांग:
1. अतिरिक्त ₹{{excess_amount}} की तत्काल वापसी FASTag wallet में
2. गलत vehicle class classification सुधारें (यदि applicable)

NHAI Helpline 1033 पर भी शिकायत दर्ज की है: Ref {{nhai_ref}}

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'FASTag Double Deduction Complaint Hindi 2026 | फास्टैग शिकायत पत्र',
      description: 'Free FASTag double deduction complaint in Hindi. Toll overcharge, wrong vehicle class. Ready format for FASTag bank and NHAI 1033.',
    }
  },

  {
    title: 'BlueDart Lost Parcel Complaint - English',
    language: 'english',
    content: `To,
Customer Service / Claims Department
Blue Dart Express Limited
{{bluedart_address}}
Email: customerservice@bluedart.com

Subject: Lost Parcel - AWB/Tracking No. {{tracking_number}}

Dear Sir/Madam,

I, {{your_name}}, am writing to file a formal complaint regarding a parcel that has been lost in transit.

Shipment Details:
- AWB/Tracking Number: {{tracking_number}}
- Booking Date: {{booking_date}}
- Origin: {{origin_city}}
- Destination: {{destination_city}}
- Sender: {{sender_name}}
- Receiver: {{receiver_name}}
- Contents: {{parcel_contents}}
- Declared Value: ₹{{declared_value}}
- Weight: {{weight}} kg
- Service Type: {{service_type}} (Domestic Priority/Apex/Dart Apex)

Last Known Tracking Status:
- Status: {{last_status}}
- Date: {{last_update_date}}
- Location: {{last_location}}

The parcel has not been delivered and tracking shows no update for {{days_no_update}} days.

I demand:
1. Immediate investigation and tracing of the parcel
2. If parcel is lost, full compensation of ₹{{declared_value}} (declared value)
3. Refund of shipping charges ₹{{shipping_charge}}

Previous complaint: {{complaint_ref}} on {{complaint_date}} — unresolved.

If not resolved in 15 days, I will file NCH and consumer court complaint.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'BlueDart Lost Parcel Complaint 2026 | Courier Lost Package English Format',
      description: 'Free BlueDart lost parcel complaint in English. AWB tracking, compensation claim. Works for DTDC, Delhivery, Professional Courier too. Ready format.',
    }
  },

  {
    title: 'Speed Post Lost Complaint to Postmaster - Hindi',
    language: 'hindi',
    content: `सेवा में,
पोस्टमास्टर / उप डाक अधीक्षक
{{post_office_name}}
{{post_office_address}}

विषय: Speed Post / Registered Letter खोने की शिकायत - Tracking No. {{tracking_number}}

महोदय,

मैं {{your_name}}, {{your_address}} का निवासी, निम्नलिखित डाक सामग्री के खो जाने की शिकायत दर्ज करना चाहता/चाहती हूं।

डाक विवरण:
- Tracking Number: {{tracking_number}}
- प्रकार: {{mail_type}} (Speed Post / Registered Letter / Parcel)
- बुकिंग दिनांक: {{booking_date}}
- बुकिंग डाकघर: {{booking_post_office}}
- प्रेषक: {{sender_name}} ({{sender_address}})
- प्राप्तकर्ता: {{receiver_name}} ({{receiver_address}})
- घोषित मूल्य: ₹{{declared_value}}
- सामग्री: {{contents_description}}

अंतिम Tracking Status:
- स्थिति: {{last_status}}
- दिनांक: {{last_update_date}}
- स्थान: {{last_location}}

{{days_passed}} दिन बीत चुके हैं और डाक प्राप्तकर्ता तक नहीं पहुंची। India Post tracking पर कोई update नहीं आ रहा।

मांग:
1. तत्काल जांच और डाक का पता लगाना
2. खो जाने पर ₹{{declared_value}} का मुआवज़ा
3. डाक शुल्क ₹{{postage_amount}} की वापसी

India Post Complaint Portal (dfrequent.indiapost.gov.in) पर भी शिकायत दर्ज की है: {{portal_ref}}

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Speed Post Lost Complaint Hindi 2026 | स्पीड पोस्ट शिकायत पत्र',
      description: 'Free Speed Post/Registered Letter lost complaint in Hindi. India Post, Postmaster complaint format. Compensation claim. Ready for post office submission.',
    }
  },

  {
    title: 'Cab Overcharge Refund Request - Hinglish',
    language: 'hinglish',
    content: `To,
Customer Support / Grievance Cell
{{cab_company}} (Ola/Uber/Rapido)
{{cab_company_address}}

Subject: Overcharge Complaint & Refund Request - Trip ID {{trip_id}}

Dear Team,

Main {{your_name}}, {{your_address}} se hoon. Meri recent ride mein fare overcharge hua hai.

Trip Details:
- Trip ID: {{trip_id}}
- Date: {{trip_date}}
- Pickup: {{pickup_location}}
- Drop: {{drop_location}}
- Estimated Fare: ₹{{estimated_fare}}
- Actual Charged: ₹{{actual_fare}}
- Overcharge: ₹{{overcharge_amount}}
- Payment Mode: {{payment_mode}}
- Driver Name: {{driver_name}}
- Vehicle: {{vehicle_number}}

Issue:
{{overcharge_reason}}
(e.g., Driver ne longer route liya, app ne surge pricing galat lagaya, toll double charge hua, wait time incorrect add hua)

Mere according ye ride ka fair charge ₹{{fair_estimate}} hona chahiye tha based on {{distance}} km distance.

I request:
1. ₹{{overcharge_amount}} ka refund immediately
2. Driver ke account mein note karna for future rides
3. Fare breakdown ka detailed receipt bhejein

Agar 3 din mein refund na mile to NCH (1915) par complaint karunga/karungi.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Ola/Uber Overcharge Complaint Hinglish 2026 | Cab Fare Refund Letter',
      description: 'Free Ola/Uber cab overcharge complaint in Hinglish. Longer route, surge pricing, toll double charge. Ready format for app complaint and NCH escalation.',
    }
  },

  // ═══════════════════════════════════════════════
  // INSURANCE TEMPLATES (4 new)
  // ═══════════════════════════════════════════════

  {
    title: 'Car Insurance Claim Rejection Appeal - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्रीवांस ऑफिसर / क्लेम मैनेजर
{{insurance_company}}
{{company_address}}

विषय: मोटर बीमा क्लेम अस्वीकृति के विरुद्ध अपील - Policy {{policy_number}}, Claim {{claim_number}}

महोदय/महोदया,

मैं {{your_name}}, पॉलिसी संख्या {{policy_number}} का धारक, अपने मोटर बीमा क्लेम {{claim_number}} की अस्वीकृति के विरुद्ध अपील करता/करती हूं।

वाहन विवरण:
- वाहन: {{vehicle_make_model}}
- Registration: {{vehicle_number}}
- पॉलिसी अवधि: {{policy_start}} से {{policy_end}}
- पॉलिसी प्रकार: {{policy_type}} (Comprehensive/Third Party/OD)

दुर्घटना / नुकसान विवरण:
- दिनांक: {{incident_date}}
- स्थान: {{incident_location}}
- विवरण: {{incident_details}}
- अनुमानित नुकसान: ₹{{damage_amount}}
- FIR/Police Report: {{fir_number}}

क्लेम अस्वीकृति का कारण (बीमा कंपनी द्वारा):
{{rejection_reason}}

मेरी अपील:
{{counter_argument}}

IRDAI नियमों के अनुसार, {{irdai_rule_reference}} के तहत मेरा क्लेम वैध है।

मांग:
1. क्लेम पुनर्विचार करें और ₹{{claim_amount}} स्वीकृत करें
2. 15 दिन में लिखित निर्णय दें

15 दिन में अनुकूल निर्णय न आने पर IRDAI Bima Bharosa / Insurance Ombudsman में शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Car Insurance Claim Rejection Appeal Hindi 2026 | बीमा क्लेम अपील पत्र',
      description: 'Free car/bike insurance claim rejection appeal in Hindi. Accident, theft, flood damage claim denied. IRDAI rules reference. Ready format for insurance company.',
    }
  },

  {
    title: 'Travel Insurance Claim Letter - English',
    language: 'english',
    content: `To,
Claims Department / Grievance Officer
{{insurance_company}}
{{company_address}}

Subject: Travel Insurance Claim - Policy {{policy_number}}

Dear Sir/Madam,

I, {{your_name}} (Policy: {{policy_number}}), am filing a travel insurance claim for {{claim_type}} during my trip.

Travel Details:
- Destination: {{destination}}
- Travel Dates: {{travel_start}} to {{travel_end}}
- Policy Period: {{policy_start}} to {{policy_end}}
- Sum Insured: ₹{{sum_insured}} / USD {{sum_insured_usd}}

Incident Details:
- Date of Incident: {{incident_date}}
- Location: {{incident_location}}
- Description: {{incident_details}}
- Claim Amount: ₹{{claim_amount}} / USD {{claim_amount_usd}}

Claim Type: {{claim_type}}
(Trip Cancellation / Medical Emergency / Baggage Loss / Flight Delay / Passport Loss)

Assistance Helpline Called: {{helpline_called}} on {{helpline_date}} (Ref: {{assistance_ref}})

Documents Attached:
1. Policy document
2. Travel tickets and itinerary
3. {{claim_specific_document_1}} (e.g., Medical bills, PIR report, police report)
4. {{claim_specific_document_2}}
5. Payment receipts for emergency expenses
6. Claim form duly filled

Please process this claim within the stipulated 30-day timeline as per IRDAI guidelines.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Travel Insurance Claim Letter English 2026 | Trip Cancel, Medical Emergency',
      description: 'Free travel insurance claim letter in English. Trip cancellation, medical emergency abroad, baggage loss, flight delay. Ready format with IRDAI timeline.',
    }
  },

  {
    title: 'Insurance Ombudsman Complaint Application - Hindi',
    language: 'hindi',
    content: `सेवा में,
बीमा लोकपाल (Insurance Ombudsman)
{{ombudsman_office}}
{{ombudsman_address}}
(cioins.co.in)

विषय: बीमा कंपनी {{insurance_company}} के विरुद्ध शिकायत - Policy {{policy_number}}

महोदय/महोदया,

मैं {{your_name}}, पॉलिसी {{policy_number}} का धारक, {{insurance_company}} के विरुद्ध निम्नलिखित शिकायत दर्ज करना चाहता/चाहती हूं।

शिकायतकर्ता विवरण:
- नाम: {{your_name}}
- पता: {{your_address}}
- मोबाइल: {{your_phone}}
- Email: {{your_email}}

बीमा विवरण:
- बीमा कंपनी: {{insurance_company}}
- पॉलिसी संख्या: {{policy_number}}
- पॉलिसी प्रकार: {{policy_type}}
- क्लेम संख्या: {{claim_number}}
- क्लेम राशि: ₹{{claim_amount}}
- अस्वीकृति/विवाद दिनांक: {{rejection_date}}

शिकायत का विवरण:
{{complaint_details}}

बीमा कंपनी से शिकायत:
- दिनांक: {{company_complaint_date}}
- शिकायत संख्या: {{company_complaint_ref}}
- कंपनी का जवाब: {{company_response}}
- जवाब से असंतुष्ट क्योंकि: {{dissatisfaction_reason}}

मांग:
1. क्लेम ₹{{claim_amount}} का भुगतान
2. विलंब ब्याज
3. मानसिक उत्पीड़न का मुआवज़ा

संलग्न:
1. पॉलिसी document
2. क्लेम अस्वीकृति पत्र
3. बीमा कंपनी से पत्र-व्यवहार
4. सहायक दस्तावेज़

{{your_name}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Insurance Ombudsman Complaint Hindi 2026 | बीमा लोकपाल शिकायत पत्र',
      description: 'Free Insurance Ombudsman complaint application in Hindi. Claim rejected, delayed settlement. Health, life, motor insurance. Ready format for cioins.co.in.',
    }
  },

  // ═══════════════════════════════════════════════
  // LEGAL & CONSUMER RIGHTS TEMPLATES (8 new)
  // ═══════════════════════════════════════════════

  {
    title: 'Consumer Court e-Daakhil Complaint Draft - Hindi',
    language: 'hindi',
    content: `उपभोक्ता विवाद निवारण आयोग
{{commission_name}} (जिला / राज्य / राष्ट्रीय)
e-Daakhil Portal: edaakhil.nic.in

शिकायत संख्या: _______________ (कार्यालय द्वारा भरा जाएगा)

शिकायतकर्ता:
नाम: {{your_name}}
पिता/पति का नाम: {{father_husband_name}}
पता: {{your_address}}
मोबाइल: {{your_phone}}
Email: {{your_email}}

विपक्षी (Opposite Party):
नाम: {{opposite_party_name}}
पता: {{opposite_party_address}}
(कंपनी/व्यक्ति/सेवा प्रदाता)

शिकायत के तथ्य:

1. शिकायतकर्ता ने दिनांक {{transaction_date}} को विपक्षी से {{product_service}} खरीदा/सेवा ली थी, जिसकी राशि ₹{{amount}} थी।

2. {{complaint_facts}}

3. शिकायतकर्ता ने दिनांक {{first_complaint_date}} को विपक्षी से शिकायत की (संदर्भ: {{complaint_ref}}), परंतु {{days_passed}} दिन बीतने पर भी कोई समाधान नहीं मिला।

4. शिकायतकर्ता ने National Consumer Helpline (1915) पर भी शिकायत दर्ज की (Ref: {{nch_ref}})।

5. विपक्षी का यह कृत्य उपभोक्ता संरक्षण अधिनियम 2019 की धारा {{section_number}} के अंतर्गत {{violation_type}} (सेवा में कमी / अनुचित व्यापार प्रथा / दोषपूर्ण वस्तु) है।

मांगा गया उपचार (Relief):
1. ₹{{refund_amount}} की वापसी/मुआवज़ा
2. ₹{{compensation_amount}} मानसिक उत्पीड़न का मुआवज़ा
3. ₹{{legal_cost}} वाद व्यय
4. {{additional_relief}}

संलग्न दस्तावेज़ सूची:
1. खरीद रसीद / Invoice
2. भुगतान प्रमाण
3. शिकायत पत्र-व्यवहार
4. NCH शिकायत प्रमाण
5. {{additional_documents}}

सत्यापन:
मैं {{your_name}} सत्यापित करता/करती हूं कि उपरोक्त तथ्य मेरी जानकारी और विश्वास में सत्य हैं।

स्थान: {{city}}
दिनांक: {{date}}
हस्ताक्षर: _______________`,
    metadata: {
      title: 'Consumer Court e-Daakhil Complaint Hindi 2026 | उपभोक्ता अदालत शिकायत प्रारूप',
      description: 'Free consumer court (e-Daakhil) complaint draft in Hindi. Ready format for District/State Consumer Commission. Consumer Protection Act 2019 sections included.',
    }
  },

  {
    title: 'Consumer Court Complaint Format - English',
    language: 'english',
    content: `BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION
{{district_name}}, {{state_name}}

Consumer Complaint No. _____ of {{year}}

IN THE MATTER OF:

{{your_name}},
S/o / D/o / W/o {{father_husband_name}},
R/o {{your_address}}
...COMPLAINANT

VERSUS

{{opposite_party_name}},
{{opposite_party_designation}},
{{opposite_party_address}}
...OPPOSITE PARTY

COMPLAINT UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019

The Complainant most respectfully submits as under:

1. That the Complainant is a "consumer" as defined under Section 2(7) of the Consumer Protection Act, 2019, having purchased {{product_service}} from the Opposite Party for consideration of ₹{{amount}} on {{transaction_date}}.

2. {{fact_paragraph_1}}

3. {{fact_paragraph_2}}

4. {{fact_paragraph_3}}

5. That the Complainant made a complaint to the Opposite Party on {{complaint_date}} (Ref: {{complaint_ref}}) and also to the National Consumer Helpline (Ref: {{nch_ref}}), but the Opposite Party has failed to provide any satisfactory resolution.

6. That the act/omission of the Opposite Party amounts to:
   (a) Deficiency in service under Section 2(11)
   (b) {{additional_violation}}

PRAYER:
In view of the above facts and circumstances, it is most respectfully prayed that this Hon'ble Commission may be pleased to:
(a) Direct the Opposite Party to refund ₹{{refund_amount}} with interest at {{interest_rate}}% p.a.
(b) Award compensation of ₹{{compensation_amount}} for mental agony and harassment
(c) Award ₹{{litigation_cost}} towards cost of litigation
(d) {{additional_prayer}}

VERIFICATION:
I, {{your_name}}, do hereby verify that the contents of this complaint are true and correct to the best of my knowledge and belief.

Place: {{city}}
Date: {{date}}
(Signature of Complainant)

List of Documents:
1. {{document_1}}
2. {{document_2}}
3. {{document_3}}`,
    metadata: {
      title: 'Consumer Court Complaint Format English 2026 | e-Daakhil Draft Template',
      description: 'Free consumer court complaint format in English. Section 35 Consumer Protection Act 2019. Ready draft for District Consumer Commission filing via e-Daakhil.',
    }
  },

  {
    title: 'RTI Application Format - Hindi',
    language: 'hindi',
    content: `सूचना का अधिकार अधिनियम 2005
(Right to Information Act, 2005)
धारा 6(1) के अंतर्गत आवेदन

सेवा में,
केन्द्रीय/राज्य जन सूचना अधिकारी (CPIO/SPIO)
{{department_name}}
{{office_address}}

विषय: सूचना का अधिकार अधिनियम 2005 के अंतर्गत सूचना प्राप्ति हेतु आवेदन

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, सूचना का अधिकार अधिनियम 2005 की धारा 6(1) के अंतर्गत निम्नलिखित सूचना चाहता/चाहती हूं:

प्रश्न:

1. {{question_1}}

2. {{question_2}}

3. {{question_3}}

4. {{question_4}}

5. {{question_5}}

संबंधित अवधि: {{time_period}} (उदा: 01.01.2024 से 31.12.2024)

सूचना का प्रारूप: {{format}} (फोटोकॉपी / CD / ईमेल / निरीक्षण)

शुल्क: ₹10 (दस रुपये) {{fee_mode}} (पोस्टल ऑर्डर / ऑनलाइन / नकद) संलग्न

नोट: यदि मांगी गई सूचना किसी अन्य विभाग/कार्यालय से संबंधित है तो कृपया धारा 6(3) के अनुसार 5 दिनों के भीतर संबंधित CPIO को अंतरित करें।

{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'RTI Application Format Hindi 2026 | सूचना का अधिकार आवेदन प्रारूप',
      description: 'Free RTI application format in Hindi. Section 6(1) RTI Act 2005. Ready format for Central and State government departments. Download and fill.',
    }
  },

  {
    title: 'RTI Application Format - English',
    language: 'english',
    content: `APPLICATION UNDER SECTION 6(1) OF THE
RIGHT TO INFORMATION ACT, 2005

To,
The Central/State Public Information Officer (CPIO/SPIO)
{{department_name}}
{{office_address}}

Subject: Application for Information under RTI Act, 2005

Dear Sir/Madam,

I, {{your_name}}, resident of {{your_address}}, hereby request the following information under Section 6(1) of the Right to Information Act, 2005:

QUESTIONS:

1. {{question_1}}

2. {{question_2}}

3. {{question_3}}

4. {{question_4}}

5. {{question_5}}

Period of Information: {{time_period}}

Format Requested: {{format}} (Photocopies / CD / Email / Inspection)

Application Fee: ₹10 (Ten Rupees) enclosed via {{fee_mode}} (Indian Postal Order / Online Payment / DD)

Note: If the requested information pertains to another department/office, kindly transfer this application to the concerned CPIO within 5 days as per Section 6(3) of the RTI Act.

Thanking you,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'RTI Application Format English 2026 | Right to Information Application',
      description: 'Free RTI application format in English. Section 6(1) RTI Act 2005. Ready template for Central/State government. Download and submit via rtionline.gov.in.',
    }
  },

  {
    title: 'Medical Negligence Notice to Hospital - Hindi',
    language: 'hindi',
    content: `सेवा में,
चिकित्सा अधीक्षक / प्रबंध निदेशक
{{hospital_name}}
{{hospital_address}}

विषय: चिकित्सा लापरवाही / सेवा में कमी के संबंध में शिकायत

महोदय/महोदया,

मैं {{your_name}}, मरीज़ {{patient_name}} का/की {{relationship}} हूं। मैं {{hospital_name}} में दिनांक {{admission_date}} से {{discharge_date}} तक हुए उपचार में चिकित्सा लापरवाही / सेवा में कमी की शिकायत दर्ज करना चाहता/चाहती हूं।

मरीज़ विवरण:
- नाम: {{patient_name}}
- UHID / Registration No: {{uhid}}
- उम्र/लिंग: {{age}} वर्ष / {{gender}}
- भर्ती दिनांक: {{admission_date}}
- छुट्टी दिनांक: {{discharge_date}}
- उपचारक डॉक्टर: Dr. {{doctor_name}} ({{department}})

लापरवाही का विवरण:
{{negligence_details}}

परिणाम:
{{consequence}} (स्वास्थ्य बिगड़ना / अतिरिक्त उपचार / स्थायी क्षति / मृत्यु)

कुल अस्पताल बिल: ₹{{hospital_bill}}
अतिरिक्त उपचार व्यय: ₹{{additional_expense}}

मांग:
1. लिखित स्पष्टीकरण
2. ₹{{compensation_amount}} मुआवज़ा
3. बिल में अनुचित charges की वापसी ₹{{overcharge_amount}}
4. संबंधित डॉक्टर/स्टाफ के विरुद्ध कार्यवाही

चेतावनी: 15 दिनों में संतोषजनक जवाब न मिलने पर:
1. राज्य चिकित्सा परिषद (State Medical Council) में शिकायत
2. National Medical Commission (NMC) में शिकायत
3. उपभोक्ता अदालत (e-Daakhil) में मुआवज़ा दावा
4. पुलिस शिकायत (गंभीर लापरवाही के मामले में)

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Medical Negligence Hospital Complaint Hindi 2026 | चिकित्सा लापरवाही शिकायत पत्र',
      description: 'Free medical negligence complaint to hospital in Hindi. Wrong treatment, overcharging, death due to negligence. NMC, Medical Council, consumer court format.',
    }
  },

  {
    title: 'Legal Notice for Deficiency in Service - English',
    language: 'english',
    content: `LEGAL NOTICE
Under Section 35 of the Consumer Protection Act, 2019

To,
{{opposite_party_name}}
{{opposite_party_designation}}
{{opposite_party_address}}

From,
{{your_name}}
Through: Advocate {{advocate_name}} (if applicable)
{{your_address}}

Date: {{notice_date}}

Subject: Legal Notice for Deficiency in Service / Unfair Trade Practice

Dear {{opposite_party_name}},

Under instructions from my client {{your_name}}, I hereby serve upon you the following Legal Notice:

FACTS:

1. That my client availed {{service_product}} from you on {{transaction_date}} for a consideration of ₹{{amount}}, vide {{invoice_receipt_number}}.

2. {{fact_1}}

3. {{fact_2}}

4. That my client raised complaint with you on {{complaint_date}} (Ref: {{complaint_ref}}), and also filed complaint with National Consumer Helpline (Ref: {{nch_ref}}), but you have failed to provide any satisfactory resolution despite {{days_passed}} days.

5. That your above act/omission constitutes "Deficiency in Service" as defined under Section 2(11) and/or "Unfair Trade Practice" as defined under Section 2(47) of the Consumer Protection Act, 2019.

DEMAND:

You are hereby called upon to:
1. {{demand_1}} - within 15 days of receipt of this notice
2. {{demand_2}}
3. Pay compensation of ₹{{compensation_amount}} for mental agony and harassment

WARNING:

In the event of your failure to comply with the above demand within 15 (fifteen) days from the date of receipt of this notice, my client shall be constrained to initiate appropriate legal proceedings before the Consumer Disputes Redressal Commission, at your risk, cost, and consequences, without any further notice.

{{advocate_name}} / {{your_name}}
{{your_phone}}
{{your_email}}`,
    metadata: {
      title: 'Legal Notice Deficiency in Service English 2026 | Consumer Protection Act Format',
      description: 'Free legal notice for deficiency in service in English. Consumer Protection Act 2019, Section 35. Ready format for any service complaint before consumer court.',
    }
  },

  {
    title: 'Legal Notice for Deficiency in Service - Hindi',
    language: 'hindi',
    content: `कानूनी नोटिस
उपभोक्ता संरक्षण अधिनियम 2019 की धारा 35 के अंतर्गत

प्रति,
{{opposite_party_name}}
{{opposite_party_designation}}
{{opposite_party_address}}

प्रेषक,
{{your_name}}
द्वारा: अधिवक्ता {{advocate_name}} (यदि लागू हो)
{{your_address}}

दिनांक: {{notice_date}}

विषय: सेवा में कमी / अनुचित व्यापार प्रथा के लिए कानूनी नोटिस

{{opposite_party_name}} जी,

मेरे मुवक्किल {{your_name}} के निर्देशानुसार, मैं आपको निम्नलिखित कानूनी नोटिस प्रेषित करता/करती हूं:

तथ्य:

1. मेरे मुवक्किल ने दिनांक {{transaction_date}} को आपसे {{service_product}} ₹{{amount}} में खरीदा/सेवा ली थी (रसीद/Invoice: {{invoice_number}})।

2. {{fact_1}}

3. {{fact_2}}

4. मेरे मुवक्किल ने दिनांक {{complaint_date}} को आपसे शिकायत की (संदर्भ: {{complaint_ref}}) और National Consumer Helpline पर भी शिकायत दर्ज की (संदर्भ: {{nch_ref}}), परंतु {{days_passed}} दिन बीतने पर भी कोई समाधान नहीं मिला।

5. आपका उपरोक्त कृत्य उपभोक्ता संरक्षण अधिनियम 2019 की धारा 2(11) के अंतर्गत "सेवा में कमी" और/या धारा 2(47) के अंतर्गत "अनुचित व्यापार प्रथा" है।

मांग:

आपसे कहा जाता है कि इस नोटिस की प्राप्ति के 15 दिनों के भीतर:
1. {{demand_1}}
2. {{demand_2}}
3. मानसिक उत्पीड़न का मुआवज़ा ₹{{compensation_amount}} दें

चेतावनी:

15 दिनों में उपरोक्त मांग पूरी न करने पर, मेरे मुवक्किल को उपभोक्ता विवाद निवारण आयोग के समक्ष आपके विरुद्ध उचित कानूनी कार्यवाही करने को बाध्य होना पड़ेगा, जिसका समस्त जोखिम, व्यय और परिणाम आपके ऊपर होगा।

अधिवक्ता {{advocate_name}} / {{your_name}}
{{your_phone}}
{{your_email}}`,
    metadata: {
      title: 'Legal Notice Deficiency in Service Hindi 2026 | सेवा में कमी कानूनी नोटिस',
      description: 'Free legal notice for deficiency in service in Hindi. उपभोक्ता संरक्षण अधिनियम 2019 धारा 35. Consumer court से पहले कानूनी नोटिस का प्रारूप।',
    }
  },

  {
    title: 'Senior Citizen Consumer Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
जिला उपभोक्ता विवाद निवारण आयोग
{{district_name}}, {{state_name}}
(e-Daakhil: edaakhil.nic.in)

विषय: वरिष्ठ नागरिक उपभोक्ता शिकायत - प्राथमिकता सुनवाई हेतु

शिकायतकर्ता:
नाम: {{your_name}} (आयु: {{age}} वर्ष — वरिष्ठ नागरिक)
पिता/पति का नाम: {{father_husband_name}}
पता: {{your_address}}
मोबाइल: {{your_phone}}
Email: {{your_email}}

विपक्षी:
{{opposite_party_name}}
{{opposite_party_address}}

विशेष निवेदन: शिकायतकर्ता {{age}} वर्षीय वरिष्ठ नागरिक हैं। उपभोक्ता संरक्षण अधिनियम 2019 की धारा 37 के अंतर्गत वरिष्ठ नागरिकों और विकलांग व्यक्तियों की शिकायतों में प्राथमिकता सुनवाई का प्रावधान है। कृपया तदनुसार प्राथमिकता दें।

शिकायत के तथ्य:
{{complaint_facts}}

मांगा गया उपचार:
1. ₹{{refund_amount}} की वापसी
2. ₹{{compensation_amount}} मुआवज़ा
3. वाद व्यय

संलग्न: आयु प्रमाण (Aadhaar/Voter ID), खरीद रसीद, शिकायत प्रमाण, NCH reference

{{your_name}}
दिनांक: {{date}}
स्थान: {{city}}`,
    metadata: {
      title: 'Senior Citizen Consumer Complaint Hindi 2026 | वरिष्ठ नागरिक शिकायत प्रारूप',
      description: 'Free senior citizen consumer complaint format in Hindi. Priority hearing under Section 37 CPA 2019. Ready format for e-Daakhil consumer court filing.',
    }
  },

  // ═══════════════════════════════════════════════
  // LANGUAGE VARIANTS (4 new — existing topics, new language)
  // ═══════════════════════════════════════════════

  {
    title: 'Amazon Complaint Letter - English',
    language: 'english',
    content: `To,
Customer Care Department
Amazon Seller Services Pvt. Ltd.
{{amazon_address}}

Subject: Complaint regarding Order No. {{order_id}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to file a complaint regarding my order.

Order Details:
- Order ID: {{order_id}}
- Order Date: {{order_date}}
- Product: {{product_name}}
- Amount: ₹{{amount}}
- Payment: {{payment_method}}

Issue:
{{issue_description}}

I contacted Amazon customer care on {{complaint_date}} (Ref: {{complaint_ref}}) but the issue remains unresolved after {{days_passed}} days.

I request:
1. {{resolution_1}}
2. {{resolution_2}}

Please resolve within 7 working days, failing which I shall approach the National Consumer Helpline and Consumer Court.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Amazon Complaint Letter English 2026 | Free Download Format',
      description: 'Free Amazon complaint letter in English. Wrong product, refund delay, seller fraud. Ready format for consumer court and legal notice.',
    }
  },

  {
    title: 'Flipkart Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा विभाग
Flipkart Internet Private Limited
{{flipkart_address}}

विषय: ऑर्डर {{order_id}} के संबंध में शिकायत

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, आपको सूचित करना चाहता/चाहती हूं कि मैंने दिनांक {{order_date}} को ऑर्डर {{order_id}} के तहत {{product_name}} खरीदा था।

समस्या: {{complaint_details}}

भुगतान: ₹{{amount}} ({{payment_method}})

मैंने दिनांक {{complaint_date}} को ग्राहक सेवा से संपर्क किया (शिकायत संख्या: {{complaint_ref}}) परंतु समाधान नहीं मिला।

मांग:
1. {{demand_1}}
2. {{demand_2}}

कृपया 7 दिनों में समाधान करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Flipkart Complaint Letter Hindi 2026 | फ्लिपकार्ट शिकायत पत्र हिंदी',
      description: 'Free Flipkart complaint letter in Hindi. गलत प्रोडक्ट, रिफंड, डिलीवरी शिकायत। Consumer court और legal notice के लिए तैयार प्रारूप।',
    }
  },

  {
    title: 'Bank Complaint to RBI Ombudsman - English',
    language: 'english',
    content: `To,
The Banking Ombudsman
Reserve Bank of India
Complaint Management System (cms.rbi.org.in)

Subject: Complaint Against {{bank_name}} - Account {{account_number}}

Dear Sir/Madam,

I, {{your_name}}, account holder at {{bank_name}} (Account ending {{account_last_4}}), am filing a complaint under the RBI Integrated Ombudsman Scheme.

Bank Details:
- Bank: {{bank_name}}
- Branch: {{branch_name}}
- Account Type: {{account_type}}

Complaint:
{{complaint_details}}

Amount in Dispute: ₹{{dispute_amount}}

Previous Bank Complaint:
- Date: {{bank_complaint_date}}
- Reference: {{bank_complaint_ref}}
- Bank Response: {{bank_response}}
- Response received on: {{response_date}} / No response for 30+ days

I request RBI to direct {{bank_name}} to:
1. {{relief_1}}
2. {{relief_2}}
3. Compensation for mental harassment and inconvenience

Attached: Bank complaint proof, account statement, transaction proof, previous correspondence.

{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'RBI Ombudsman Complaint English 2026 | Banking Complaint to RBI Format',
      description: 'Free RBI Banking Ombudsman complaint in English. Bank service deficiency, unauthorized transaction, ATM dispute. Ready format for cms.rbi.org.in.',
    }
  },

  {
    title: 'RERA Delayed Possession Complaint - English',
    language: 'english',
    content: `BEFORE THE REAL ESTATE REGULATORY AUTHORITY
{{state_name}} RERA
({{rera_portal_url}})

Complaint No. _____ of {{year}}

IN THE MATTER OF:

{{your_name}},
S/o / D/o / W/o {{father_husband_name}},
R/o {{your_address}}
...COMPLAINANT

VERSUS

{{builder_name}},
{{builder_address}},
RERA Registration No: {{rera_reg_number}}
...RESPONDENT/PROMOTER

COMPLAINT UNDER SECTION 31 OF THE REAL ESTATE (REGULATION AND DEVELOPMENT) ACT, 2016

1. The Complainant booked unit {{unit_number}} in project "{{project_name}}" (RERA Reg: {{rera_reg_number}}) on {{booking_date}}.

2. As per the Builder-Buyer Agreement dated {{agreement_date}}, possession was promised by {{promised_possession_date}}.

3. Total consideration: ₹{{total_amount}}. Amount paid: ₹{{amount_paid}}.

4. {{delay_details}}

5. {{days_delayed}} days have elapsed beyond the promised possession date.

PRAYER:
(a) Direct the Respondent to hand over possession with delay compensation at prescribed rate
(b) OR refund ₹{{amount_paid}} with interest at RERA prescribed rate from date of each payment
(c) Compensation of ₹{{compensation}} for mental agony
(d) Litigation costs

DOCUMENTS: Agreement, payment receipts, builder correspondence, RERA project page, demand letters.

{{your_name}}
Date: {{date}}`,
    metadata: {
      title: 'RERA Delayed Possession Complaint English 2026 | Builder Delay RERA Format',
      description: 'Free RERA delayed possession complaint in English. Section 31 RERA Act 2016. Builder delay, refund with interest. Ready format for State RERA authority.',
    }
  },

  // ═══════════════════════════════════════════════
  // MISSING TEMPLATES FROM PLAN (7 new)
  // ═══════════════════════════════════════════════

  {
    title: 'Railway Complaint to Station Master - English',
    language: 'english',
    content: `To,
The Station Master / Station Superintendent
{{station_name}} Railway Station
{{railway_zone}} Zone

Subject: Complaint Regarding {{complaint_type}} - Train No. {{train_number}}

Dear Sir/Madam,

I, {{your_name}}, a passenger on Train No. {{train_number}} ({{train_name}}), PNR {{pnr_number}}, am filing a formal complaint regarding the following issue at {{station_name}} Railway Station:

Journey Details:
- PNR: {{pnr_number}}
- Train: {{train_number}} - {{train_name}}
- Date of Journey: {{journey_date}}
- Coach/Berth: {{coach_berth}}
- From: {{from_station}} → To: {{to_station}}

Complaint Details:
{{complaint_details}}

(Examples: Dirty coach/toilets, no water supply, AC not working, rude staff behavior, overcharging by vendor, unauthorized person in reserved berth, platform cleanliness, broken amenities, safety concern)

I request:
1. Immediate action on the reported issue
2. Written acknowledgment of this complaint
3. Follow-up action report

I am also filing this complaint on:
- RailMadad App/Website (railmadad.indianrailways.gov.in)
- Railway Helpline: 139

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Railway Station Master Complaint English 2026 | Train Complaint Letter Format',
      description: 'Free railway complaint letter to Station Master in English. Dirty coach, AC failure, staff behavior, platform issues. Ready format for RailMadad and station submission.',
    }
  },

  {
    title: 'EPF Transfer Delay Complaint - English',
    language: 'english',
    content: `To,
The Regional Provident Fund Commissioner
EPFO Regional Office
{{epfo_office_address}}

Subject: Delay in EPF Transfer/Consolidation - UAN {{uan_number}}

Dear Sir/Madam,

I, {{your_name}}, UAN {{uan_number}}, am writing to complain about the excessive delay in my EPF transfer/consolidation request.

Transfer Details:
- UAN: {{uan_number}}
- Previous Member ID: {{old_member_id}} (Employer: {{old_employer}})
- Current Member ID: {{new_member_id}} (Employer: {{current_employer}})
- Transfer Claim Submitted: {{claim_date}}
- Transfer Claim ID: {{claim_id}}
- Current Status: {{current_status}}
- Days Elapsed: {{days_passed}}

The standard processing time for EPF transfer is 20 working days. However, my claim has been pending for {{days_passed}} days without any resolution.

Previous attempts to resolve:
1. EPFO Grievance Portal (epfigms.gov.in): Ref {{grievance_ref}}
2. EPFO Helpline (1800-118-005): Called on {{helpline_date}}
3. Visited EPFO office on {{visit_date}}: {{visit_outcome}}

I request:
1. Immediate processing and completion of my EPF transfer
2. Written confirmation with timeline
3. Reason for the delay

If not resolved within 15 days, I will escalate to CPGRAMS (pgportal.gov.in) and the Central Provident Fund Commissioner.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Aadhaar: {{aadhaar_last_4}}XXXX
Date: {{date}}`,
    metadata: {
      title: 'EPF Transfer Delay Complaint English 2026 | PF Consolidation Pending Letter',
      description: 'Free EPF transfer delay complaint in English for EPFO Regional Office. PF consolidation pending, old employer not approving. Ready format with CPGRAMS escalation.',
    }
  },

  {
    title: 'Ujjwala Yojana Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
जिला खाद्य एवं आपूर्ति अधिकारी / नोडल अधिकारी
{{district_office_name}}
{{district_address}}

प्रतिलिपि: {{oil_company}} (IOCL/BPCL/HPCL)

विषय: प्रधानमंत्री उज्ज्वला योजना (PMUY) के अंतर्गत शिकायत

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, ग्राम {{village}}, तहसील {{tehsil}}, ज़िला {{district}}, प्रधानमंत्री उज्ज्वला योजना की लाभार्थी हूं।

PMUY विवरण:
- LPG उपभोक्ता संख्या: {{consumer_number}}
- गैस एजेंसी: {{agency_name}}
- BPL/SECC राशन कार्ड नंबर: {{ration_card_number}}
- PMUY कनेक्शन दिनांक: {{connection_date}}
- आधार संख्या: {{aadhaar_number}}
- बैंक खाता: {{bank_name}}, खाता {{account_number}}

शिकायत:
{{complaint_details}}

(उदा: पहला रिफिल फ्री नहीं मिला, सब्सिडी बैंक खाते में नहीं आ रही, डीलर अतिरिक्त पैसे मांग रहा, सिलेंडर डिलीवरी नहीं हो रही, डीलर बुकिंग नहीं ले रहा, कनेक्शन आवेदन अस्वीकृत किया गया)

मांग:
1. {{demand_1}}
2. {{demand_2}}

पहले की गई कार्यवाही:
- LPG Helpline (1906) पर शिकायत: {{helpline_ref}}
- MoPNG e-Seva portal: {{portal_ref}}

कृपया 15 दिनों में कार्यवाही करें, अन्यथा MoPNG / CPGRAMS पर शिकायत करूंगी।

{{your_name}}
{{your_phone}}
ग्राम: {{village}}, तहसील: {{tehsil}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Ujjwala Yojana Complaint Hindi 2026 | उज्ज्वला योजना शिकायत पत्र',
      description: 'Free Ujjwala Yojana complaint letter in Hindi. Subsidy not received, free refill denied, dealer overcharging. Ready format for district office and MoPNG.',
    }
  },

  {
    title: 'Death Certificate Correction Application - English',
    language: 'english',
    content: `To,
The Sub-Registrar (Births & Deaths) / Municipal Commissioner
{{municipal_office_name}}
{{office_address}}

Subject: Correction in Death Certificate - Registration No. {{registration_number}}

Dear Sir/Madam,

I, {{your_name}}, {{relationship}} of the deceased, am writing to request correction in the Death Certificate issued for:

Deceased Person Details:
- Name of Deceased: {{deceased_name}}
- Date of Death: {{date_of_death}}
- Place of Death: {{place_of_death}} (Hospital: {{hospital_name}})
- Death Registration No: {{registration_number}}
- Certificate Issue Date: {{certificate_date}}

Error in Certificate:
- Field with error: {{error_field}} (e.g., Name/Date/Address/Cause of Death)
- Currently printed as: {{wrong_value}}
- Correct information should be: {{correct_value}}

Reason for Correction:
{{correction_reason}}

Supporting Documents Attached:
1. Original Death Certificate (with error highlighted)
2. {{proof_document_1}} (e.g., Aadhaar Card of deceased showing correct name)
3. {{proof_document_2}} (e.g., Hospital death summary with correct details)
4. {{proof_document_3}} (e.g., Affidavit for correction)
5. Applicant's ID proof ({{applicant_id_type}})

Fee: ₹{{fee_paid}} paid via {{payment_mode}} (Receipt No: {{receipt_number}})

I request issuance of a corrected Death Certificate at the earliest.

Regards,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Death Certificate Correction Application English 2026 | Error Correction Format',
      description: 'Free death certificate correction application in English. Name error, date of death wrong, cause of death correction. Ready format for Sub-Registrar office.',
    }
  },

  {
    title: 'FASTag KYC Issue Complaint - English',
    language: 'english',
    content: `To,
Customer Care / FASTag Department
{{fastag_issuer_bank}}
{{bank_address}}

Copy to: NHAI (National Highways Authority of India)

Subject: FASTag KYC Rejection / Update Issue - FASTag ID {{fastag_id}}

Dear Sir/Madam,

I, {{your_name}}, am the owner of vehicle {{vehicle_number}} with FASTag ID {{fastag_id}} issued by {{fastag_issuer_bank}}.

Issue:
My FASTag has been deactivated/blacklisted due to KYC non-compliance, despite my repeated attempts to complete the KYC process.

FASTag Details:
- FASTag ID: {{fastag_id}}
- Vehicle Number: {{vehicle_number}}
- Vehicle Class: {{vehicle_class}}
- Issuer Bank: {{fastag_issuer_bank}}
- Wallet Balance: ₹{{wallet_balance}}
- Current Status: {{current_status}} (Blacklisted/Inactive/KYC Pending)

KYC Attempts:
1. Date: {{attempt_1_date}} - Mode: {{attempt_1_mode}} (Online/Branch) - Result: {{attempt_1_result}}
2. Date: {{attempt_2_date}} - Mode: {{attempt_2_mode}} - Result: {{attempt_2_result}}
3. KYC Rejection Reason (if given): {{rejection_reason}}

Documents Submitted:
1. Vehicle RC copy
2. Owner's PAN Card
3. Aadhaar Card
4. Passport size photo
5. Vehicle photo with FASTag sticker

I request:
1. Immediate completion of FASTag KYC and reactivation
2. If KYC documents are insufficient, clear written communication on what additional documents are needed
3. Refund of toll charges paid in cash during FASTag blacklist period: ₹{{cash_toll_paid}}

NHAI Helpline 1033 complaint: Ref {{nhai_ref}}

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'FASTag KYC Complaint English 2026 | FASTag Blacklisted KYC Issue Letter',
      description: 'Free FASTag KYC complaint letter in English. FASTag blacklisted, KYC rejected, reactivation request. Ready format for issuer bank and NHAI.',
    }
  },

  {
    title: 'DTDC Missing Courier Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा विभाग
DTDC Express Limited
{{dtdc_address}}
Email: customer.service@dtdc.com

विषय: कूरियर गुम होने की शिकायत - Consignment No. {{tracking_number}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} का/की निवासी, DTDC Express द्वारा भेजे गए अपने कूरियर के गुम होने की शिकायत दर्ज करना चाहता/चाहती हूं।

शिपमेंट विवरण:
- Consignment/AWB Number: {{tracking_number}}
- बुकिंग दिनांक: {{booking_date}}
- बुकिंग स्थान: {{origin_city}}
- गंतव्य: {{destination_city}}
- प्रेषक: {{sender_name}}
- प्राप्तकर्ता: {{receiver_name}}
- सामग्री: {{parcel_contents}}
- घोषित मूल्य: ₹{{declared_value}}
- वज़न: {{weight}} kg
- सेवा प्रकार: {{service_type}} (Priority/Economy/Lite)

अंतिम Tracking Status:
- स्थिति: {{last_status}}
- दिनांक: {{last_update_date}}
- स्थान: {{last_location}}

{{days_no_update}} दिनों से कोई tracking update नहीं आया है। कूरियर न तो डिलीवर हुआ है न ही वापस आया है।

मैंने DTDC customer care {{complaint_date}} को कॉल किया (Ref: {{complaint_ref}}) लेकिन कोई समाधान नहीं मिला।

मांग:
1. तत्काल जांच और कूरियर का पता लगाना
2. कूरियर गुम होने पर ₹{{declared_value}} (घोषित मूल्य) का पूर्ण मुआवज़ा
3. शिपिंग शुल्क ₹{{shipping_charge}} की वापसी

कृपया 10 दिनों में कार्यवाही करें, अन्यथा NCH (1915) और Consumer Court में शिकायत करूंगा/करूंगी।

{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'DTDC Missing Courier Complaint Hindi 2026 | डीटीडीसी कूरियर शिकायत पत्र',
      description: 'Free DTDC missing courier complaint in Hindi. Parcel lost, no tracking update. Ready format for DTDC customer service and consumer court.',
    }
  },

  {
    title: 'Motor Accident Insurance Claim Letter - English',
    language: 'english',
    content: `To,
Claims Department / Motor Claims Manager
{{insurance_company}}
{{company_address}}

Subject: Motor Accident Insurance Claim - Policy {{policy_number}}

Dear Sir/Madam,

I, {{your_name}}, policyholder of Motor Insurance Policy No. {{policy_number}}, am filing a claim for damages sustained in a motor vehicle accident.

Policy Details:
- Policy Number: {{policy_number}}
- Policy Type: {{policy_type}} (Comprehensive/Third Party)
- Vehicle: {{vehicle_make_model}} ({{vehicle_year}})
- Registration: {{vehicle_number}}
- Engine No: {{engine_number}}
- Chassis No: {{chassis_number}}
- Policy Period: {{policy_start}} to {{policy_end}}
- IDV (Insured Declared Value): ₹{{idv}}

Accident Details:
- Date & Time: {{accident_date}} at {{accident_time}}
- Location: {{accident_location}}
- Description: {{accident_description}}
- Weather/Road Conditions: {{conditions}}
- Other Vehicle Involved: {{other_vehicle}} (if applicable)
- Injuries: {{injury_details}} (if any)

FIR / Police Report:
- FIR Number: {{fir_number}}
- Police Station: {{police_station}}
- FIR Date: {{fir_date}}

Damage Assessment:
- Estimated Repair Cost: ₹{{repair_estimate}}
- Surveyor Visit Requested: Yes
- Vehicle Current Location: {{vehicle_location}} (Garage: {{garage_name}})

Documents Attached:
1. Policy document copy
2. Driving License of driver at time of accident
3. Vehicle Registration Certificate (RC)
4. FIR copy
5. Photographs of accident scene and vehicle damage
6. Repair estimate from authorized garage
7. Medical reports (if injuries involved)

I request:
1. Appointment of surveyor at the earliest
2. Cashless repair at network garage / Reimbursement of repair costs
3. Towing charges reimbursement: ₹{{towing_charges}}

Claim intimation already done via helpline: Ref {{claim_intimation_ref}} on {{intimation_date}}.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Motor Accident Insurance Claim English 2026 | Vehicle Accident Claim Letter',
      description: 'Free motor accident insurance claim letter in English. Car/bike accident claim, FIR, surveyor, cashless repair. Ready format for comprehensive and third party policy.',
    }
  },
];
