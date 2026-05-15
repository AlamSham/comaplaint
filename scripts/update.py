import re
import os

file_path = "lib/db/seedTemplates.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_templates = """
  // NEW HIGH-VALUE TEMPLATES
  {
    title: 'Cyber Fraud Police Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
The Officer-in-Charge,
Cyber Crime Cell / Police Station
{{police_station_address}}

Subject: Complaint regarding Cyber Fraud / Online Scam of ₹{{amount}}

Respected Sir/Madam,

Main {{your_name}}, {{your_address}} ka resident hoon. Mere sath {{fraud_date}} ko ek online financial fraud hua hai jisme mere account se ₹{{amount}} unauthorized tarike se deduct hue hain.

Fraud Details:
1. Date & Time: {{fraud_date_time}}
2. Transaction Amount: ₹{{amount}}
3. Bank/Wallet Name: {{bank_name}}
4. Account Number: {{account_number}}
5. Transaction ID/UTR: {{transaction_id}}

Kaise hua:
{{fraud_description}} (e.g. Kisi ne fake call karke OTP pucha, ya mujhe fake link bheja gaya)

Maine apni bank ko notify karke apna account/card block karwa diya hai (Complaint No: {{bank_complaint_no}}). Maine 1930 National Cyber Crime helpline par bhi call kiya tha.

I request you to kindly register an FIR, trace the fraudster, and help me recover my lost money.

Attached Documents:
1. Bank account statement
2. Screenshots of SMS/WhatsApp/Email
3. Transaction receipts
4. ID and Address Proof

Thanking You,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Cyber Fraud Police Complaint Format | Online Scam Draft PDF',
      description: 'Free copy-paste police complaint format for cyber fraud, online scam, UPI fraud, and unauthorized transactions. Download draft in Hinglish.',
    }
  },
  {
    title: 'IRCTC Train Ticket Refund Complaint - English',
    language: 'english',
    content: `To,
Chief Commercial Manager (Refunds) / Customer Care
IRCTC / Indian Railways
{{irctc_address}}

Subject: Non-receipt of Train Ticket Refund - PNR {{pnr_number}}

Dear Sir/Madam,

I am {{your_name}}, and I had booked a train ticket via IRCTC with PNR {{pnr_number}} for train number {{train_number}} from {{source}} to {{destination}} for journey date {{journey_date}}.

I had cancelled my ticket / filed TDR on {{cancellation_date}} due to {{cancellation_reason}} (e.g., train cancelled, train late by >3 hours, passenger not travelled). 

Transaction Details:
- Transaction ID: {{transaction_id}}
- Booking Amount: ₹{{booking_amount}}
- Refund Expected: ₹{{refund_amount}}

It has been more than {{days_passed}} days, but the refund amount of ₹{{refund_amount}} has not been credited to my original payment source.

I request you to immediately process the pending refund to my account.

Attached:
1. Ticket copy
2. TDR filing confirmation / Cancellation SMS
3. Bank statement showing no refund received

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'IRCTC Train Ticket Refund Complaint Format | TDR Claim Draft',
      description: 'Download free complaint letter format for IRCTC ticket cancellation refund delay and TDR rejection. English draft for Indian Railways.',
    }
  },
  {
    title: 'EPF Withdrawal Delay Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
क्षेत्रीय भविष्य निधि आयुक्त (RPFC)
कर्मचारी भविष्य निधि संगठन (EPFO)
{{epfo_office_address}}

विषय: पीएफ (EPF) निकासी में देरी के संबंध में शिकायत

महोदय/महोदया,

मैं {{your_name}}, UAN (Universal Account Number) {{uan_number}} और PF खाता संख्या {{pf_number}} का धारक हूं। मैं {{company_name}} में {{start_date}} से {{end_date}} तक कार्यरत था।

मैंने दिनांक {{claim_date}} को EPF पोर्टल के माध्यम से फॉर्म {{form_number}} (e.g., Form 19 & 10C) भरकर PF निकासी (Withdrawal) के लिए ऑनलाइन दावा (Claim) प्रस्तुत किया था।

दावा (Claim) विवरण:
- क्लेम आईडी: {{claim_id}}
- यूएएन नंबर: {{uan_number}}
- क्लेम की तिथि: {{claim_date}}

ईपीएफओ के नियमों के अनुसार क्लेम 20 दिनों के भीतर सेटल हो जाना चाहिए, परंतु {{days_passed}} दिन बीत जाने के बाद भी मेरा क्लेम "Under Process" दिखा रहा है।

अतः आपसे निवेदन है कि मेरे क्लेम को जल्द से जल्द पास (Settle) करने की कृपा करें और धनराशि मेरे बैंक खाते में ट्रांसफर करें।

संलग्न दस्तावेज:
1. EPF क्लेम स्टेटस का स्क्रीनशॉट
2. आधार और पैन कार्ड की प्रति
3. कैंसिल चेक की प्रति

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'EPF Withdrawal Delay Complaint Letter in Hindi | PF Claim Draft',
      description: 'पीएफ निकालने में देरी (EPF Withdrawal Delay) की शिकायत के लिए EPFO को पत्र। Free Hindi complaint format download for PF claim settlement.',
    }
  },
  {
    title: 'Loan Recovery Agent Harassment - English',
    language: 'english',
    content: `To,
The Branch Manager / Nodal Officer
{{bank_nbfc_name}}
{{branch_address}}

CC: Reserve Bank of India (RBI Ombudsman)
CC: Station House Officer (SHO), {{local_police_station}}

Subject: Urgent Complaint Against Harassment by Recovery Agents - Loan A/C {{loan_account_no}}

Dear Sir/Madam,

I, {{your_name}}, have a loan account (A/c No: {{loan_account_no}}) with your esteemed institution. Due to {{financial_hardship_reason}}, I have missed my recent EMI(s).

However, your recovery agents have started calling me and my family members constantly at odd hours, using abusive language, and threatening physical harm. This is a direct violation of RBI guidelines on Fair Practices Code for recovery agents.

Incident Details:
- Agent Phone Number(s): {{agent_phone_numbers}}
- Date & Time of abusive calls: {{call_dates_times}}
- Specific threats: {{threat_details}}

I am willing to pay my dues and request you to grant me time till {{extension_date}} or restructure my loan. But I will not tolerate illegal harassment and mental torture.

I request you to immediately instruct your recovery agency to stop these abusive calls. If this harassment continues, I will be forced to file a formal FIR for criminal intimidation and take legal action for mental agony.

Attached:
1. Call logs / Call recordings proof
2. Screenshots of abusive WhatsApp messages

Regards,
{{your_name}}
{{your_address}}
{{your_phone}}
Date: {{date}}`,
    metadata: {
      title: 'Complaint Against Loan Recovery Agent Harassment | RBI Notice Draft',
      description: 'Legal warning letter format against bank/NBFC loan recovery agent harassment. Free English draft to send to Police and RBI Ombudsman.',
    }
  },
  {
    title: 'Airlines Baggage Loss or Damage - English',
    language: 'english',
    content: `To,
Customer Service / Baggage Claims Department
{{airlines_name}}
{{airlines_address}}

Subject: Claim for Lost / Damaged Baggage - PNR {{pnr_number}}

Dear Sir/Madam,

I travelled on {{airlines_name}} flight number {{flight_number}} from {{departure_city}} to {{arrival_city}} on {{travel_date}}. My PNR number is {{pnr_number}}.

Upon arrival at the destination, I discovered that my checked-in baggage (Tag No: {{baggage_tag_number}}) was:
[Choose one: completely missing / severely damaged / items missing from inside]

Details of Baggage:
- Brand/Color/Size: {{baggage_description}}
- Value of lost/damaged items: ₹{{estimated_value}}
- List of valuable items inside: {{list_of_items}}

I immediately reported this at the airport baggage desk and filed a Property Irregularity Report (PIR). PIR Number: {{pir_number}}.

As per aviation rules, the airline is liable to compensate passengers for lost or damaged baggage. I request you to trace my baggage within 7 days or process a compensation of ₹{{estimated_value}} for my loss.

Attached:
1. Copy of Boarding Pass & Ticket
2. Copy of Baggage Tag
3. Copy of Property Irregularity Report (PIR)
4. Bills/receipts of lost items (if available)

Regards,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Airlines Lost Baggage Complaint Letter | Damage Claim Format',
      description: 'Draft complaint letter for lost, missing or damaged luggage during flight travel. Free English format to claim compensation from Airlines.',
    }
  },
  {
    title: 'Ola/Uber Overcharging Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
Customer Support Team
{{cab_company_name}} (Ola/Uber)
{{company_address}}

Subject: Overcharging and Unfair Fare Deducted - Ride CRN/ID {{ride_id}}

Dear Team,

Main {{your_name}}, aapki service ka regular user hoon. Maine {{ride_date}} ko ek cab book ki thi from {{pickup_location}} to {{drop_location}}.

Booking ke time estimated fare ₹{{estimated_fare}} dikhaya gaya tha. Lekin ride khatam hone ke baad mujhe ₹{{charged_fare}} charge kiya gaya, jo ki estimate se bahut zyada hai.

Reason for dispute:
[Choose one: Driver ne long route liya / Driver ne AC nahi chalaya / Toll tax double add hua / App glitch ki wajah se surge pricing apply hui]

Maine app me help section se complaint raise ki thi (Ticket: {{ticket_number}}) but mujhe auto-reply mila aur koi refund nahi diya gaya.

Please investigate this ride route and immediately refund the excess amount of ₹{{excess_amount}} to my original payment source.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Ola Uber Overcharging Complaint Format | Cab Dispute Draft',
      description: 'Free complaint format in Hinglish for cab overcharging, wrong route, or driver misbehavior. Send to Ola, Uber, or Rapido customer care.',
    }
  },
  {
    title: 'Post Office Parcel Missing - Hindi',
    language: 'hindi',
    content: `सेवा में,
पोस्टमास्टर / मुख्य पोस्टमास्टर
{{post_office_name}}
{{post_office_address}}

विषय: स्पीड पोस्ट / पार्सल गुम होने (Non-delivery) की शिकायत

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, आपको सूचित करना चाहता/चाहती हूं कि मैंने दिनांक {{booking_date}} को आपके {{booking_post_office}} पोस्ट ऑफिस से एक स्पीड पोस्ट / पार्सल बुक किया था।

पार्सल का विवरण:
- कंसाइनमेंट (Tracking) नंबर: {{tracking_number}}
- भेजने वाले का नाम (Sender): {{sender_name}}
- प्राप्तकर्ता का नाम (Receiver): {{receiver_name}}
- प्राप्तकर्ता का पता: {{receiver_address}}

{{days_passed}} दिन बीत जाने के बाद भी यह पार्सल प्राप्तकर्ता को नहीं मिला है। इंडिया पोस्ट की ट्रैकिंग वेबसाइट पर भी स्टेटस {{tracking_status}} दिखा रहा है और कई दिनों से अपडेट नहीं हुआ है।

इस पार्सल में बहुत महत्वपूर्ण दस्तावेज / सामान था (सामान का विवरण: {{item_details}}), जिसके न पहुंचने से मुझे काफी नुकसान हो रहा है।

कृपया इस पार्सल को तुरंत ट्रैक करें और इसकी डिलीवरी सुनिश्चित करें। यदि पार्सल खो गया है, तो कृपया मुझे नियमों के अनुसार उचित मुआवजा (Compensation) प्रदान करें।

संलग्न दस्तावेज:
1. बुकिंग रसीद (Receipt) की प्रति
2. ऑनलाइन ट्रैकिंग स्टेटस का प्रिंटआउट

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Post Office Parcel Missing Complaint Letter in Hindi | India Post',
      description: 'स्पीड पोस्ट या पार्सल खो जाने पर पोस्टमास्टर को शिकायत पत्र। Free Hindi draft format for India Post missing parcel complaint.',
    }
  },
  {
    title: 'Medical Negligence Notice to Hospital - English',
    language: 'english',
    content: `To,
The Chief Medical Officer / Administrator
{{hospital_name}}
{{hospital_address}}

Subject: Legal Notice for Medical Negligence and Deficiency in Service

Dear Sir/Madam,

Under instruction and on behalf of my client / I, {{your_name}}, resident of {{your_address}}, hereby serve you with this notice:

That the patient, {{patient_name}}, was admitted to your hospital on {{admission_date}} for the treatment of {{disease_condition}}. Patient Registration No: {{registration_no}}.

During the treatment, the attending doctor(s) and staff committed severe medical negligence and deficiency in service, specifically:
{{negligence_description}} (e.g., administered wrong medication, botched surgery, delayed critical care, wrong diagnosis).

Due to this gross negligence, the patient suffered {{patient_harm_description}} and we had to incur an additional expense of ₹{{extra_expenses}} at another facility to save the patient's life.

As a healthcare provider, you failed to exercise the standard duty of care. You are hereby called upon to:
1. Provide a detailed written explanation for the negligence.
2. Provide complete medical records and case sheets of the patient.
3. Pay a compensation of ₹{{compensation_amount}} for the physical harm, mental agony, and financial loss caused.

If you fail to comply within 15 days of receiving this notice, I shall be constrained to initiate civil/criminal proceedings against you and approach the State Consumer Disputes Redressal Commission / Medical Council of India at your cost and risk.

Attached:
1. Medical Bills & Reports
2. Discharge Summary
3. Proof of subsequent treatment

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Medical Negligence Legal Notice to Hospital | Consumer Court Draft',
      description: 'Free English legal notice format for medical negligence, wrong treatment, or deficiency in service by doctors and hospitals.',
    }
  }
];
"""

def generate_metadata(title, language):
    lang_label = 'Hindi' if language == 'hindi' else 'Hinglish' if language == 'hinglish' else 'English'
    
    seo_title = f"{title} Format in {lang_label} | Free Draft PDF"
    if len(seo_title) > 60:
        seo_title = f"{title} Format | Draft PDF"
        
    description = f"Download free {title.lower()} format in {lang_label}. Copy-paste ready draft for consumer court, legal notices, and official complaints. PDF download available."
    
    return f"""    metadata: {{
      title: '{seo_title}',
      description: '{description}',
    }}"""

# Find all templates using regex
pattern = r"(title:\s*'([^']*)',\s*language:\s*'([^']*)',[\s\S]*?content:\s*`[\s\S]*?`\s*),?\s*}"

def repl(match):
    full_body = match.group(1)
    title = match.group(2)
    language = match.group(3)
    
    if "metadata:" in full_body:
        return match.group(0) # Already has metadata
        
    meta = generate_metadata(title, language)
    return full_body + ",\n" + meta + "\n  }"

new_content = re.sub(pattern, repl, content)
new_content = new_content.replace('];', new_templates + '\n];')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated seedTemplates.ts successfully")
