// Extended template data for production (30+ templates)
export const templatesData = [
  // E-commerce Templates
  {
    title: 'Amazon Complaint Letter - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा विभाग
Amazon India
{{amazon_address}}

विषय: ऑर्डर संख्या {{order_id}} के संबंध में शिकायत

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, आपको सूचित करना चाहता/चाहती हूं कि मैंने दिनांक {{order_date}} को ऑर्डर संख्या {{order_id}} के तहत {{product_name}} खरीदा था।

शिकायत का विवरण:
{{complaint_details}}

मैंने दिनांक {{complaint_date}} को आपकी ग्राहक सेवा से संपर्क किया था और शिकायत संख्या {{complaint_number}} प्राप्त की थी, परंतु अभी तक कोई समाधान नहीं मिला है।

मैं निम्नलिखित की मांग करता/करती हूं:
1. {{demand_1}}
2. {{demand_2}}

कृपया 7 दिनों के भीतर इस मामले का समाधान करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Amazon Complaint Letter - Hindi Format | Draft PDF',
      description: 'Free Amazon complaint letter in Hindi. Ready-to-use format for consumer court, legal notices. Download PDF draft with placeholders.',
    }
  },
  {
    title: 'Flipkart Complaint Letter - English',
    language: 'english',
    content: `To,
Customer Care Department
Flipkart Internet Private Limited
{{flipkart_address}}

Subject: Complaint regarding Order No. {{order_id}}

Dear Sir/Madam,

I, {{your_name}}, residing at {{your_address}}, am writing to file a complaint regarding my order placed on {{order_date}} with Order ID {{order_id}}.

Issue Description:
{{issue_description}}

I contacted your customer care on {{contact_date}} and received complaint reference number {{complaint_ref}}, but the issue remains unresolved.

I request the following resolution:
1. {{resolution_1}}
2. {{resolution_2}}

Please resolve this matter within 7 working days.

Thanking you,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Flipkart Complaint Letter - English Format | Draft PDF',
      description: 'Free Flipkart complaint letter in English. Ready-to-use format for consumer court, legal notices. Download PDF draft with placeholders.',
    }
  },
  {
    title: 'Myntra Wrong Product Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
Customer Support
Myntra Designs Private Limited
{{myntra_address}}

Subject: Wrong Product Delivery - Order {{order_id}}

Dear Sir/Madam,

Main {{your_name}}, {{your_address}} se hoon. Maine {{order_date}} ko order {{order_id}} place kiya tha.

Problem: Maine {{ordered_product}} order kiya tha lekin mujhe {{received_product}} mila hai.

Maine {{complaint_date}} ko customer care ko call kiya tha (Complaint No: {{complaint_ref}}) lekin abhi tak koi solution nahi mila.

I request:
1. Correct product delivery
2. Return pickup arrangement
3. {{additional_demand}}

Please resolve within 5 days.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Myntra Wrong Product Complaint - Hinglish Format | Draft PDF',
      description: 'Free Myntra wrong product complaint in Hinglish. Ready-to-use format for consumer court, legal notices. Download PDF draft.',
    }
  },
  {
    title: 'Meesho Refund Not Received - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा विभाग
Meesho
{{meesho_address}}

विषय: रिफंड नहीं मिलने की शिकायत - ऑर्डर {{order_id}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} का निवासी हूं। मैंने दिनांक {{order_date}} को ऑर्डर {{order_id}} रद्द किया था।

आपने {{cancellation_date}} को रिफंड की पुष्टि की थी, परंतु {{days_passed}} दिन बीत जाने के बाद भी मुझे ₹{{amount}} का रिफंड नहीं मिला है।

Payment Method: {{payment_method}}
Transaction ID: {{transaction_id}}

कृपया तुरंत रिफंड प्रोसेस करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Meesho Refund Not Received - Hindi Format | Draft PDF',
      description: 'Free Meesho refund complaint letter in Hindi. Ready-to-use format for consumer court, legal notices. Download PDF draft.',
    }
  },
  {
    title: 'Snapdeal Damaged Product - English',
    language: 'english',
    content: `To,
Customer Care
Snapdeal Limited
{{snapdeal_address}}

Subject: Damaged Product Received - Order {{order_id}}

Dear Sir/Madam,

I am {{your_name}} from {{your_address}}. I received Order {{order_id}} on {{delivery_date}}.

The product {{product_name}} was delivered in damaged condition:
{{damage_description}}

I have attached photos as evidence. I contacted customer care on {{complaint_date}} (Ref: {{complaint_ref}}) but no action has been taken.

I request immediate:
1. Product replacement
2. Return pickup
3. Refund if replacement not available

Please resolve within 7 days.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Snapdeal Damaged Product - English Format | Draft PDF',
      description: 'Free Snapdeal damaged product complaint in English. Ready-to-use format for consumer court, legal notices. Download PDF draft.',
    }
  },
  {
    title: 'Swiggy Food Quality Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
Customer Support
Swiggy
{{swiggy_address}}

Subject: Food Quality Issue - Order {{order_id}}

Dear Team,

Main {{your_name}}, {{your_address}} se hoon. Maine {{order_date}} ko order {{order_id}} place kiya tha from {{restaurant_name}}.

Problem:
{{food_quality_issue}}

Maine immediately customer care ko inform kiya tha (Complaint: {{complaint_ref}}) lekin proper resolution nahi mila.

Order Amount: ₹{{amount}}
Payment Mode: {{payment_mode}}

I request full refund aur is restaurant ke against action.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Swiggy Food Quality Complaint - Hinglish Format | Draft PDF',
      description: 'Free Swiggy food quality complaint in Hinglish. Ready-to-use format for consumer court, legal notices. Download PDF draft.',
    }
  },
  {
    title: 'Zomato Delivery Delay Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा
Zomato
{{zomato_address}}

विषय: डिलीवरी में देरी - ऑर्डर {{order_id}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} से हूं। मैंने {{order_time}} बजे ऑर्डर {{order_id}} किया था।

Expected Delivery: {{expected_time}}
Actual Delivery: {{actual_time}}
Delay: {{delay_minutes}} मिनट

इस देरी के कारण खाना ठंडा हो गया और खराब हो गया। मैंने ₹{{amount}} का भुगतान किया था।

मैं पूर्ण रिफंड की मांग करता/करती हूं।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Zomato Delivery Delay Complaint - Hindi Format | Draft PDF',
      description: 'Free Zomato delivery delay complaint in Hindi. Ready-to-use format for consumer court, legal notices. Download PDF draft.',
    }
  },

  // Banking Templates
  {
    title: 'Bank Complaint to RBI Ombudsman - Hindi',
    language: 'hindi',
    content: `सेवा में,
बैंकिंग लोकपाल
{{ombudsman_office}}

विषय: {{bank_name}} के विरुद्ध शिकायत

महोदय/महोदया,

मैं {{your_name}}, खाता संख्या {{account_number}}, {{bank_name}}, {{branch_name}} शाखा का ग्राहक हूं।

शिकायत का विषय:
{{complaint_subject}}

विस्तृत विवरण:
{{detailed_complaint}}

मैंने दिनांक {{bank_complaint_date}} को बैंक में शिकायत दर्ज की थी (शिकायत संख्या: {{bank_complaint_ref}}), परंतु 30 दिन बीत जाने के बाद भी कोई संतोषजनक समाधान नहीं मिला है।

संलग्न दस्तावेज:
1. बैंक शिकायत की प्रति
2. खाता विवरण
3. {{other_documents}}

मैं आपसे निवेदन करता/करती हूं कि इस मामले में हस्तक्षेप करें और उचित समाधान दिलाएं।

धन्यवाद,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Bank Complaint to RBI Ombudsman - Hindi Format | Draft PDF',
      description: 'Free RBI Ombudsman complaint letter in Hindi. Ready-to-use format for banking disputes, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Unauthorized Transaction Complaint - English',
    language: 'english',
    content: `To,
Branch Manager
{{bank_name}}
{{branch_address}}

Subject: Unauthorized Transaction - Account {{account_number}}

Dear Sir/Madam,

I am {{your_name}}, holding Account No. {{account_number}} at your {{branch_name}} branch.

On {{transaction_date}}, an unauthorized transaction of ₹{{amount}} was debited from my account (Transaction ID: {{transaction_id}}).

I did not authorize this transaction. I immediately:
1. Blocked my card on {{block_date}}
2. Filed complaint at branch (Ref: {{complaint_ref}})
3. Filed FIR at {{police_station}} (FIR No: {{fir_number}})

Despite 30 days, no refund has been processed.

I request immediate:
1. Refund of ₹{{amount}}
2. Investigation report
3. Compensation for mental harassment

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Unauthorized Transaction Complaint - English Format | Draft PDF',
      description: 'Free unauthorized transaction complaint in English. Ready-to-use format for bank fraud, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'ATM Cash Not Dispensed - Hinglish',
    language: 'hinglish',
    content: `To,
Branch Manager
{{bank_name}}
{{branch_address}}

Subject: ATM se cash nahi mila - Account {{account_number}}

Dear Sir/Madam,

Main {{your_name}}, Account No. {{account_number}} ka holder hoon.

{{transaction_date}} ko maine {{atm_location}} ATM se ₹{{amount}} withdraw karne ki koshish ki. Transaction successful show hua lekin cash dispense nahi hua.

Transaction Details:
- Transaction ID: {{transaction_id}}
- Time: {{transaction_time}}
- Amount Debited: ₹{{amount}}

Maine immediately branch mein complaint ki (Ref: {{complaint_ref}}) lekin {{days_passed}} days baad bhi refund nahi mila.

Please immediately credit ₹{{amount}} back to my account.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'ATM Cash Not Dispensed - Hinglish Format | Draft PDF',
      description: 'Free ATM cash not dispensed complaint in Hinglish. Ready-to-use format for bank disputes, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Home Loan EMI Dispute - Hindi',
    language: 'hindi',
    content: `सेवा में,
शाखा प्रबंधक
{{bank_name}}
{{branch_address}}

विषय: होम लोन EMI विवाद - लोन खाता {{loan_account}}

महोदय/महोदया,

मैं {{your_name}}, लोन खाता संख्या {{loan_account}} का ग्राहक हूं।

मेरी EMI ₹{{agreed_emi}} प्रति माह तय हुई थी, परंतु {{month}} महीने में ₹{{charged_emi}} काट लिया गया।

यह {{extra_amount}} रुपये अधिक है। मैंने {{complaint_date}} को शिकायत की थी (संदर्भ: {{complaint_ref}}) परंतु कोई समाधान नहीं मिला।

संलग्न दस्तावेज:
1. लोन एग्रीमेंट
2. EMI शेड्यूल
3. बैंक स्टेटमेंट

कृपया अतिरिक्त राशि वापस करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Home Loan EMI Dispute - Hindi Format | Draft PDF',
      description: 'Free home loan EMI dispute letter in Hindi. Ready-to-use format for bank complaints, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Credit Card Unauthorized Charges - English',
    language: 'english',
    content: `To,
Credit Card Department
{{bank_name}}
{{bank_address}}

Subject: Unauthorized Charges - Card {{card_last_4_digits}}

Dear Sir/Madam,

I am {{your_name}}, Credit Card holder (Card ending {{card_last_4_digits}}).

I noticed unauthorized charges on my statement dated {{statement_date}}:

1. ₹{{charge_1}} at {{merchant_1}} on {{date_1}}
2. ₹{{charge_2}} at {{merchant_2}} on {{date_2}}
Total: ₹{{total_unauthorized}}

I did not make these transactions. I reported this on {{report_date}} (Dispute ID: {{dispute_id}}) and blocked my card immediately.

I request:
1. Reversal of all unauthorized charges
2. Investigation report
3. New card issuance

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Credit Card Unauthorized Charges - English Format | Draft PDF',
      description: 'Free credit card unauthorized charges complaint in English. Ready-to-use format for bank disputes. Download PDF draft.',
    }
  },
  {
    title: 'Account Frozen Without Notice - Hinglish',
    language: 'hinglish',
    content: `To,
Branch Manager
{{bank_name}}
{{branch_address}}

Subject: Account Frozen Without Notice - {{account_number}}

Dear Sir/Madam,

Main {{your_name}}, Account {{account_number}} ka holder hoon.

{{freeze_date}} se mera account suddenly freeze ho gaya hai without any prior notice. Maine koi illegal activity nahi ki hai.

Is wajah se:
1. Meri salary credit nahi ho pa rahi
2. EMI bounce ho gayi
3. Daily expenses mein problem ho rahi hai

Maine {{complaint_date}} ko branch visit kiya tha lekin koi clear answer nahi mila.

Please immediately unfreeze my account aur written explanation provide karein.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Account Frozen Without Notice - Hinglish Format | Draft PDF',
      description: 'Free account frozen complaint in Hinglish. Ready-to-use format for bank disputes, consumer court. Download PDF draft.',
    }
  },

  // Telecom Templates
  {
    title: 'TRAI Telecom Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
Telecom Regulatory Authority of India (TRAI)
{{trai_address}}

Subject: Complaint against {{operator_name}} - Mobile No. {{mobile_number}}

Respected Sir/Madam,

Main {{your_name}}, mobile number {{mobile_number}} ka user hoon jo {{operator_name}} network par hai.

Complaint Details:
{{complaint_details}}

Maine {{operator_complaint_date}} ko operator ko complaint ki thi aur complaint number {{operator_complaint_ref}} mila tha, lekin 7 din ke baad bhi koi solution nahi mila.

Problem:
{{problem_description}}

Main aapse request karta/karti hoon ki is matter mein action lein aur operator ko direct karein ki wo jaldi se jaldi issue resolve kare.

Attached Documents:
1. Operator complaint copy
2. Bill copies
3. {{other_docs}}

Thank you,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'TRAI Telecom Complaint - Hinglish Format | Draft PDF',
      description: 'Free TRAI telecom complaint in Hinglish. Ready-to-use format for network issues, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Network Problem Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा
{{operator_name}}
{{operator_address}}

विषय: नेटवर्क समस्या - मोबाइल {{mobile_number}}

महोदय/महोदया,

मैं {{your_name}}, मोबाइल नंबर {{mobile_number}} का उपयोगकर्ता हूं।

पिछले {{days}} दिनों से {{area_name}} क्षेत्र में गंभीर नेटवर्क समस्या है:
1. कॉल ड्रॉप हो रही हैं
2. इंटरनेट स्पीड बहुत धीमी है
3. SMS नहीं आ रहे हैं

मैंने {{complaint_date}} को शिकायत की थी (संदर्भ: {{complaint_ref}}) परंतु कोई सुधार नहीं हुआ।

मैं मासिक ₹{{monthly_charge}} का भुगतान करता/करती हूं परंतु सेवा संतोषजनक नहीं है।

कृपया तुरंत समस्या ठीक करें या बिल में छूट दें।

धन्यवाद,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Network Problem Complaint - Hindi Format | Draft PDF',
      description: 'Free network problem complaint in Hindi. Ready-to-use format for telecom issues, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Broadband Speed Issue - English',
    language: 'english',
    content: `To,
Customer Care
{{isp_name}}
{{isp_address}}

Subject: Broadband Speed Issue - Connection {{connection_id}}

Dear Sir/Madam,

I am {{your_name}}, subscriber of connection ID {{connection_id}} at {{installation_address}}.

I have subscribed to {{plan_speed}} Mbps plan for ₹{{monthly_charge}}/month. However, for the past {{days}} days, I am getting only {{actual_speed}} Mbps speed.

Speed test results:
- Date: {{test_date_1}}, Speed: {{speed_1}} Mbps
- Date: {{test_date_2}}, Speed: {{speed_2}} Mbps

I complained on {{complaint_date}} (Ticket: {{ticket_number}}) but no technician visited.

I request:
1. Immediate speed restoration
2. Bill adjustment for poor service period
3. Compensation

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Broadband Speed Issue - English Format | Draft PDF',
      description: 'Free broadband speed issue complaint in English. Ready-to-use format for ISP disputes, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Unauthorized Plan Change - Hinglish',
    language: 'hinglish',
    content: `To,
Customer Care
{{operator_name}}
{{operator_address}}

Subject: Unauthorized Plan Change - {{mobile_number}}

Dear Sir/Madam,

Main {{your_name}}, mobile {{mobile_number}} ka user hoon.

{{change_date}} ko mera plan automatically ₹{{old_plan}} se ₹{{new_plan}} mein change ho gaya without my consent.

Maine koi plan change request nahi ki thi. Is wajah se mujhe extra ₹{{extra_charge}} pay karna pad raha hai.

Maine {{complaint_date}} ko complaint ki (Ref: {{complaint_ref}}) lekin abhi tak plan revert nahi hua.

Please immediately:
1. Revert to old plan ₹{{old_plan}}
2. Refund extra charges
3. Written explanation

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Unauthorized Plan Change - Hinglish Format | Draft PDF',
      description: 'Free unauthorized plan change complaint in Hinglish. Ready-to-use format for telecom disputes. Download PDF draft.',
    }
  },
  {
    title: 'DTH Service Disruption - Hindi',
    language: 'hindi',
    content: `सेवा में,
ग्राहक सेवा
{{dth_operator}}
{{operator_address}}

विषय: DTH सेवा बाधित - ग्राहक ID {{customer_id}}

महोदय/महोदया,

मैं {{your_name}}, ग्राहक ID {{customer_id}} का उपयोगकर्ता हूं।

{{issue_start_date}} से मेरा DTH सेवा बाधित है। कई चैनल नहीं आ रहे हैं और जो आ रहे हैं उनमें signal problem है।

मैंने {{recharge_date}} को ₹{{recharge_amount}} का रिचार्ज किया था जो {{validity}} दिनों के लिए valid है।

मैंने {{complaint_date}} को शिकायत की (संदर्भ: {{complaint_ref}}) परंतु कोई technician नहीं आया।

कृपया तुरंत technician भेजें या validity बढ़ाएं।

धन्यवाद,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'DTH Service Disruption - Hindi Format | Draft PDF',
      description: 'Free DTH service disruption complaint in Hindi. Ready-to-use format for DTH issues, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'Port Out Request Delayed - English',
    language: 'english',
    content: `To,
Customer Care
{{current_operator}}
{{operator_address}}

Subject: Port Out Request Delayed - {{mobile_number}}

Dear Sir/Madam,

I am {{your_name}}, mobile number {{mobile_number}} subscriber.

I submitted port out request on {{request_date}} with UPC code {{upc_code}} to switch to {{new_operator}}.

As per TRAI guidelines, porting should complete within 7 days. However, {{days_passed}} days have passed and my request is still pending.

I contacted customer care on {{complaint_date}} (Ref: {{complaint_ref}}) but received no satisfactory response.

This is violation of TRAI regulations. Please process my port out immediately or I will escalate to TRAI.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Port Out Request Delayed - English Format | Draft PDF',
      description: 'Free port out request delayed complaint in English. Ready-to-use format for mobile porting issues. Download PDF draft.',
    }
  },

  // RERA Templates
  {
    title: 'RERA Delayed Possession Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
{{state}} रियल एस्टेट नियामक प्राधिकरण (RERA)
{{rera_address}}

विषय: कब्जा देने में देरी - प्रोजेक्ट {{project_name}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} का निवासी हूं। मैंने {{builder_name}} से {{project_name}} (RERA No: {{rera_number}}) में फ्लैट {{flat_number}} खरीदा था।

बुकिंग तिथि: {{booking_date}}
कुल राशि: ₹{{total_amount}}
भुगतान किया: ₹{{paid_amount}}
वादा किया गया कब्जा: {{promised_date}}
देरी: {{delay_months}} महीने

बिल्डर ने अभी तक कब्जा नहीं दिया है और निर्माण कार्य भी धीमा है। मैंने {{complaint_date}} को बिल्डर को शिकायत की परंतु कोई संतोषजनक जवाब नहीं मिला।

संलग्न दस्तावेज:
1. बुकिंग एग्रीमेंट
2. भुगतान रसीदें
3. बिल्डर के साथ पत्राचार

मैं निम्नलिखित की मांग करता/करती हूं:
1. तुरंत कब्जा
2. देरी के लिए मुआवजा
3. ब्याज भुगतान

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'RERA Delayed Possession Complaint - Hindi Format | Draft PDF',
      description: 'Free RERA delayed possession complaint in Hindi. Ready-to-use format for builder disputes, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'RERA Construction Quality Issue - English',
    language: 'english',
    content: `To,
{{state}} Real Estate Regulatory Authority (RERA)
{{rera_address}}

Subject: Construction Quality Issues - Project {{project_name}}

Dear Sir/Madam,

I am {{your_name}}, owner of Flat {{flat_number}} in {{project_name}} (RERA: {{rera_number}}) by {{builder_name}}.

I took possession on {{possession_date}} and paid ₹{{total_amount}}. However, I found serious quality issues:

1. {{issue_1}}
2. {{issue_2}}
3. {{issue_3}}

These defects were not disclosed and violate the approved plan. I complained to builder on {{complaint_date}} (Ref: {{complaint_ref}}) but they refused to fix.

Attached:
1. Sale agreement
2. Possession letter
3. Photos of defects
4. Builder correspondence

I request:
1. Order builder to fix all defects
2. Compensation for mental harassment
3. Penalty on builder

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'RERA Construction Quality Issue - English Format | Draft PDF',
      description: 'Free RERA construction quality complaint in English. Ready-to-use format for builder defects. Download PDF draft.',
    }
  },
  {
    title: 'RERA Refund Not Received - Hinglish',
    language: 'hinglish',
    content: `To,
{{state}} RERA
{{rera_address}}

Subject: Refund Not Received - {{project_name}}

Dear Sir/Madam,

Main {{your_name}}, {{your_address}} se hoon. Maine {{builder_name}} ke project {{project_name}} (RERA: {{rera_number}}) mein flat book kiya tha.

Booking Date: {{booking_date}}
Amount Paid: ₹{{paid_amount}}
Cancellation Date: {{cancellation_date}}

Maine project delays aur builder ke false promises ke wajah se booking cancel kar di thi. Builder ne {{refund_promise_date}} tak refund dene ka promise kiya tha lekin {{months_passed}} months baad bhi refund nahi mila.

Maine multiple times follow-up kiya hai lekin builder टालमटोल kar raha hai.

Please intervene aur builder ko direct karein ki wo immediately refund kare with interest.

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'RERA Refund Not Received - Hinglish Format | Draft PDF',
      description: 'Free RERA refund complaint in Hinglish. Ready-to-use format for builder refund disputes, consumer court. Download PDF draft.',
    }
  },

  // Insurance Templates
  {
    title: 'Health Insurance Claim Rejection - Hindi',
    language: 'hindi',
    content: `सेवा में,
बीमा लोकपाल
{{ombudsman_office}}

विषय: स्वास्थ्य बीमा क्लेम अस्वीकृति - पॉलिसी {{policy_number}}

महोदय/महोदया,

मैं {{your_name}}, पॉलिसी संख्या {{policy_number}} का धारक हूं जो {{insurance_company}} द्वारा जारी की गई है।

{{hospitalization_date}} को मुझे {{hospital_name}} में {{disease}} के लिए भर्ती किया गया था। कुल खर्च ₹{{total_expense}} हुआ।

मैंने {{claim_date}} को क्लेम दायर किया (क्लेम नंबर: {{claim_number}}) परंतु {{rejection_date}} को निम्न कारण से अस्वीकार कर दिया गया:
{{rejection_reason}}

यह कारण गलत है क्योंकि:
{{your_explanation}}

मैंने {{complaint_date}} को बीमा कंपनी को शिकायत की परंतु कोई संतोषजनक जवाब नहीं मिला।

संलग्न दस्तावेज:
1. पॉलिसी दस्तावेज
2. अस्पताल के बिल
3. मेडिकल रिपोर्ट्स
4. क्लेम अस्वीकृति पत्र

कृपया हस्तक्षेप करें और क्लेम स्वीकृत करवाएं।

धन्यवाद,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Health Insurance Claim Rejection - Hindi Format | Draft PDF',
      description: 'Free health insurance claim rejection complaint in Hindi. Ready-to-use format for insurance disputes. Download PDF draft.',
    }
  },
  {
    title: 'Life Insurance Claim Delay - English',
    language: 'english',
    content: `To,
Insurance Ombudsman
{{ombudsman_office}}

Subject: Life Insurance Claim Delay - Policy {{policy_number}}

Dear Sir/Madam,

I am {{your_name}}, nominee of late {{deceased_name}} who held Life Insurance Policy {{policy_number}} with {{insurance_company}}.

{{deceased_name}} passed away on {{death_date}} due to {{cause_of_death}}. I submitted death claim on {{claim_date}} with all required documents:

1. Death certificate
2. Policy document
3. Medical records
4. Legal heir certificate
5. {{other_documents}}

Claim Number: {{claim_number}}
Claim Amount: ₹{{claim_amount}}

Despite {{months_passed}} months, the claim has not been settled. I contacted the company multiple times (Ref: {{complaint_ref}}) but received no satisfactory response.

This delay is causing severe financial hardship to my family.

I request immediate claim settlement with interest.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Life Insurance Claim Delay - English Format | Draft PDF',
      description: 'Free life insurance claim delay complaint in English. Ready-to-use format for insurance disputes. Download PDF draft.',
    }
  },
  {
    title: 'Vehicle Insurance Claim Dispute - Hinglish',
    language: 'hinglish',
    content: `To,
Claims Department
{{insurance_company}}
{{company_address}}

Subject: Vehicle Insurance Claim Dispute - Policy {{policy_number}}

Dear Sir/Madam,

Main {{your_name}}, vehicle {{vehicle_number}} ka owner hoon jo aapki company se insured hai (Policy: {{policy_number}}).

{{accident_date}} ko mere vehicle ka accident ho gaya tha at {{accident_location}}. Maine immediately police complaint (FIR: {{fir_number}}) aur insurance claim file kiya (Claim: {{claim_number}}).

Surveyor ne damage estimate ₹{{surveyor_estimate}} kiya tha lekin aapne sirf ₹{{approved_amount}} approve kiya hai.

Actual repair cost ₹{{actual_cost}} hai jo maine {{garage_name}} se confirm karaya hai.

Ye ₹{{difference}} ka difference unfair hai. Please full amount approve karein.

Attached:
1. FIR copy
2. Surveyor report
3. Garage estimate
4. Photos

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Vehicle Insurance Claim Dispute - Hinglish Format | Draft PDF',
      description: 'Free vehicle insurance claim dispute in Hinglish. Ready-to-use format for car/bike insurance issues. Download PDF draft.',
    }
  },
  {
    title: 'Insurance Policy Mis-selling - Hindi',
    language: 'hindi',
    content: `सेवा में,
बीमा लोकपाल
{{ombudsman_office}}

विषय: बीमा पॉलिसी की गलत बिक्री - पॉलिसी {{policy_number}}

महोदय/महोदया,

मैं {{your_name}}, {{your_address}} का निवासी हूं। {{agent_name}} (Agent Code: {{agent_code}}) ने मुझे {{policy_date}} को {{insurance_company}} की पॉलिसी {{policy_number}} बेची।

एजेंट ने मुझे बताया था कि:
{{agent_promises}}

परंतु वास्तव में:
{{actual_reality}}

यह स्पष्ट mis-selling का मामला है। मैंने ₹{{premium_paid}} प्रीमियम भर दिया है।

मैंने {{complaint_date}} को कंपनी को शिकायत की परंतु उन्होंने पॉलिसी रद्द करने से मना कर दिया।

मैं निम्नलिखित की मांग करता/करती हूं:
1. पॉलिसी रद्द करें
2. पूरा प्रीमियम वापस करें
3. एजेंट के खिलाफ कार्रवाई

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Insurance Policy Mis-selling - Hindi Format | Draft PDF',
      description: 'Free insurance policy mis-selling complaint in Hindi. Ready-to-use format for insurance fraud cases. Download PDF draft.',
    }
  },

  // Government Services Templates
  {
    title: 'Electricity Bill Dispute - Hindi',
    language: 'hindi',
    content: `सेवा में,
उपभोक्ता शिकायत निवारण फोरम
{{electricity_board}}
{{board_address}}

विषय: बिजली बिल विवाद - उपभोक्ता संख्या {{consumer_number}}

महोदय/महोदया,

मैं {{your_name}}, उपभोक्ता संख्या {{consumer_number}}, {{connection_address}} का उपयोगकर्ता हूं।

{{bill_month}} महीने का बिल ₹{{bill_amount}} आया है जो सामान्य से बहुत अधिक है। मेरा औसत बिल ₹{{average_bill}} होता है।

मीटर रीडिंग:
- पिछला: {{previous_reading}}
- वर्तमान: {{current_reading}}
- यूनिट: {{units}}

यह रीडिंग गलत है। मैंने {{complaint_date}} को शिकायत की (संदर्भ: {{complaint_ref}}) परंतु कोई जांच नहीं हुई।

कृपया मीटर की जांच करें और सही बिल जारी करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Electricity Bill Dispute - Hindi Format | Draft PDF',
      description: 'Free electricity bill dispute complaint in Hindi. Ready-to-use format for power company disputes. Download PDF draft.',
    }
  },
  {
    title: 'Ration Card Issue - Hinglish',
    language: 'hinglish',
    content: `To,
Food & Civil Supplies Department
{{department_address}}

Subject: Ration Card Issue - Card No. {{card_number}}

Dear Sir/Madam,

Main {{your_name}}, Ration Card {{card_number}} ka holder hoon.

Problem: {{issue_description}}

Maine {{application_date}} ko {{issue_type}} ke liye application submit ki thi (Application: {{application_number}}) lekin abhi tak koi action nahi hua.

Ye meri family ke liye bahut important hai kyunki hum ration card se monthly groceries lete hain.

Please immediately process my application.

Attached:
1. Application copy
2. ID proof
3. Address proof
4. {{other_documents}}

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Ration Card Issue - Hinglish Format | Draft PDF',
      description: 'Free ration card issue complaint in Hinglish. Ready-to-use format for PDS complaints, government services. Download PDF draft.',
    }
  },
  {
    title: 'Water Supply Complaint - English',
    language: 'english',
    content: `To,
Water Supply Department
{{department_address}}

Subject: Water Supply Issue - Connection {{connection_number}}

Dear Sir/Madam,

I am {{your_name}}, water connection holder {{connection_number}} at {{connection_address}}.

For the past {{days}} days, we are facing:
{{water_issue}}

This is causing severe hardship to my family. I complained on {{complaint_date}} (Ref: {{complaint_ref}}) but no action has been taken.

I am paying regular bills of ₹{{monthly_bill}}/month but not getting proper service.

Please resolve this issue immediately or adjust my bill.

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Water Supply Complaint - English Format | Draft PDF',
      description: 'Free water supply complaint in English. Ready-to-use format for municipal water issues, consumer court. Download PDF draft.',
    }
  },
  {
    title: 'RC Transfer Complaint Letter - Hinglish',
    language: 'hinglish',
    content: `To,
Regional Transport Office / Vehicle Dealer
{{rto_or_dealer_address}}

Subject: RC Transfer Delay Complaint - Vehicle {{vehicle_number}}

Dear Sir/Madam,

Main {{your_name}}, {{your_address}} se hoon. Maine {{sale_date}} ko vehicle number {{vehicle_number}} ka ownership transfer / RC transfer application submit kiya tha.

Application Details:
- Application / Receipt No.: {{application_number}}
- Seller Name: {{seller_name}}
- Buyer Name: {{buyer_name}}
- RTO: {{rto_name}}
- Fees Paid: Rs. {{fees_paid}}

Issue:
{{issue_description}}

Maine {{followup_date}} ko follow-up kiya tha aur reference number {{complaint_ref}} mila tha, lekin abhi tak RC transfer complete nahi hua hai. Is delay ki wajah se challan, insurance, resale, and ownership record related risk create ho raha hai.

Attached Documents:
1. Form 29 and Form 30 copy
2. Sale receipt / delivery note
3. RC copy
4. Insurance and PUC copy
5. Payment receipt / application acknowledgement
6. {{other_documents}}

I request you to:
1. Process the pending RC transfer immediately
2. Share written status with reason for delay
3. Correct ownership record on VAHAN / RTO system

Please resolve this within {{resolution_days}} working days.

Thank you,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'RC Transfer Complaint Letter - Hinglish Format | Draft PDF',
      description: 'Free RC transfer delay complaint in Hinglish. Ready-to-use format for RTO vehicle registration issues. Download PDF draft.',
    }
  },
  {
    title: 'Vehicle RC Transfer Delay Complaint - Hindi',
    language: 'hindi',
    content: `सेवा में,
क्षेत्रीय परिवहन कार्यालय / वाहन डीलर
{{rto_or_dealer_address}}

विषय: वाहन {{vehicle_number}} के RC ट्रांसफर में देरी के संबंध में शिकायत

महोदय/महोदया,

मैं {{your_name}}, निवासी {{your_address}}, आपको सूचित करना चाहता/चाहती हूं कि मैंने दिनांक {{sale_date}} को वाहन संख्या {{vehicle_number}} के स्वामित्व हस्तांतरण / RC ट्रांसफर के लिए आवेदन किया था।

आवेदन विवरण:
1. आवेदन / रसीद संख्या: {{application_number}}
2. विक्रेता का नाम: {{seller_name}}
3. खरीदार का नाम: {{buyer_name}}
4. RTO: {{rto_name}}
5. जमा शुल्क: Rs. {{fees_paid}}

शिकायत का विवरण:
{{issue_description}}

मैंने दिनांक {{followup_date}} को इस विषय में follow-up किया था और संदर्भ संख्या {{complaint_ref}} प्राप्त हुई थी, परंतु अभी तक RC ट्रांसफर पूरा नहीं हुआ है। इस देरी के कारण चालान, बीमा, resale और ownership record से जुड़ी समस्या हो सकती है।

संलग्न दस्तावेज:
1. Form 29 और Form 30 की प्रति
2. Sale receipt / delivery note
3. RC की प्रति
4. Insurance और PUC की प्रति
5. Payment receipt / application acknowledgement
6. {{other_documents}}

मेरा निवेदन है कि:
1. लंबित RC transfer तुरंत पूरा किया जाए
2. देरी का कारण लिखित रूप में बताया जाए
3. VAHAN / RTO record में ownership detail सही की जाए

कृपया {{resolution_days}} कार्य दिवसों के भीतर समाधान करें।

धन्यवाद,
{{your_name}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Vehicle RC Transfer Delay Complaint - Hindi Format | Draft PDF',
      description: 'Free vehicle RC transfer delay complaint in Hindi. Ready-to-use format for RTO registration issues. Download PDF draft.',
    }
  },

  // Consumer Forum Template
  {
    title: 'Consumer Forum Complaint Format - Hindi',
    language: 'hindi',
    content: `उपभोक्ता शिकायत
(उपभोक्ता संरक्षण अधिनियम, 2019 के तहत)

सेवा में,
{{forum_level}} उपभोक्ता विवाद निवारण आयोग
{{forum_address}}

शिकायतकर्ता का विवरण:
नाम: {{your_name}}
पता: {{your_address}}
फोन: {{your_phone}}
ईमेल: {{your_email}}

विरुद्ध (प्रतिवादी):
नाम: {{opposite_party_name}}
पता: {{opposite_party_address}}

शिकायत का विषय:
{{complaint_subject}}

तथ्य:
1. {{fact_1}}
2. {{fact_2}}
3. {{fact_3}}

सेवा में कमी:
{{deficiency_description}}

मांग:
1. {{demand_1}}
2. {{demand_2}}
3. मानसिक परेशानी के लिए मुआवजा: ₹{{compensation}}
4. मुकदमे का खर्च

संलग्न दस्तावेज:
1. {{document_1}}
2. {{document_2}}
3. {{document_3}}

सत्यापन:
मैं {{your_name}} सत्यापित करता/करती हूं कि उपरोक्त तथ्य मेरी जानकारी और विश्वास के अनुसार सत्य हैं।

स्थान: {{place}}
दिनांक: {{date}}
हस्ताक्षर: {{your_name}}`,
    metadata: {
      title: 'Consumer Forum Complaint Format - Hindi Format | Draft PDF',
      description: 'Free consumer forum complaint format in Hindi. Ready-to-use legal format for consumer court cases. Download PDF draft.',
    }
  },

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
  },

  // High-Traffic Extended Templates
  {
    title: 'UPI Transaction Failed Money Deducted Complaint - Hinglish',
    language: 'hinglish',
    content: `To,
The Nodal Officer / Branch Manager
{{bank_name}}
{{bank_branch_address}}

Subject: UPI Transaction Failed Money Deducted Complaint - UTR {{utr_number}}

Dear Sir/Madam,

Main {{your_name}}, Account Number {{account_number}} ka account holder hoon.

Date {{transaction_date}} ko maine UPI app ({{upi_app_name}}) ke dwara ₹{{amount}} ki payment attempt ki thi. Transaction status "FAILED / PENDING" aaya tha, lekin mere account se paise debit ho gaye aur merchant/receiver ko credit nahi hue.

Transaction Details:
- Transaction UTR / RRN: {{utr_number}}
- Date & Time: {{transaction_date_time}}
- Amount Debited: ₹{{amount}}
- Receiver UPI ID / Merchant: {{receiver_upi_id}}

NPCI guidelines (T+1 day auto-reversal) aur RBI guidelines ke mutabiq 48 hours ke andar refund credit hona chahiye tha, lekin {{days_passed}} din beetne ke baad bhi paise mere account me wapas nahi aaye hain.

Request:
1. Immediately credit ₹{{amount}} back to my bank account.
2. Per day ₹100 penalty compensation credited if delayed beyond RBI timeline.

Attached:
1. Bank Account Statement
2. UPI App Transaction Details Screenshot

Thanks,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'UPI Transaction Failed Money Deducted Complaint - Hinglish Format',
      description: 'Free UPI failed transaction money deducted complaint format in Hinglish for bank dispute & RBI Ombudsman.',
    }
  },
  {
    title: 'Cyber Fraud Emergency Bank Account Freeze Request - Hindi',
    language: 'hindi',
    content: `सेवा में,
शाखा प्रबंधक / साइबर सुरक्षा प्रकोष्ठ
{{bank_name}}
{{branch_address}}

विषय: आपातकालीन साइबर फ्रॉड की सूचना और खाता फ्रीज/रिफंड हेतु आवेदन - खाता {{account_number}}

महोदय/महोदया,

मैं {{your_name}}, खाता संख्या {{account_number}} का धारक हूं।

दिनांक {{fraud_date}} को समय {{fraud_time}} बजे मेरे साथ ऑनलाइन धोखाधड़ी/साइबर फ्रॉड हुआ है, जिसके तहत अनधिकृत रूप से मेरे खाते से ₹{{amount}} की राशि निकाल ली गई है।

फ्रॉड का विवरण:
- अनधिकृत कटौती राशि: ₹{{amount}}
- लेन-देन यूटीआर/संदर्भ संख्या: {{utr_number}}
- 1930 राष्ट्रीय साइबर हेल्प लाइन शिकायत संख्या: {{cyber_1930_ack}}

आपातकालीन मांगें:
1. धोखाधड़ी वाले लेन-देन को तुरंत ब्लॉक/रिवर्स किया जाए।
2. मेरे खाते, डेबिट कार्ड और नेट बैंकिंग को सुरक्षा हेतु तुरंत अस्थायी रूप से ब्लॉक किया जाए।
3. आरबीआई के शून्य दायित्व (Zero Liability Policy) दिशानिर्देशों के तहत संपूर्ण राशि मेरे खाते में पुनः जमा की जाए।

संलग्नक:
1. बैंक खाता विवरण / SMS स्क्रीनशॉट
2. 1930 राष्ट्रीय साइबर क्राइम पोर्टल पावती प्रति

धन्यवाद,
{{your_name}}
{{your_address}}
{{your_phone}}
{{your_email}}
दिनांक: {{date}}`,
    metadata: {
      title: 'Cyber Fraud Emergency Bank Account Freeze Request - Hindi Format',
      description: 'Free Cyber fraud bank complaint letter in Hindi for account freeze and Zero Liability refund claim.',
    }
  },
  {
    title: 'Passport Police Verification Delay Grievance Letter - English',
    language: 'english',
    content: `To,
The Regional Passport Officer (RPO)
Regional Passport Office
{{rpo_location}}

Subject: Delay in Passport Processing & Police Verification - ARN {{arn_number}}

Dear Sir/Madam,

I, {{your_name}}, resident of {{your_address}}, applied for Passport under Application Reference Number (ARN) {{arn_number}} on {{application_date}} at {{psk_location}} Passport Seva Kendra.

Issue Details:
My documents were successfully verified at PSK on {{psk_date}}. However, the status has been stuck at "{{current_status}}" for the past {{days_delayed}} days. 

Police Verification Details:
- Police Station: {{police_station_name}}
- Verification Status: {{police_verification_status}}

I have already visited the local police station and provided all address & identity proofs. Despite multiple follow-ups, there has been no update from the RPO office.

I request you to kindly check the file status and expedite the police verification report clearance and passport dispatch at the earliest.

Attached:
1. Passport ARN Receipt
2. Address & Identity Proof copies
3. Police Verification Acknowledgement

Regards,
{{your_name}}
{{your_phone}}
{{your_email}}
Date: {{date}}`,
    metadata: {
      title: 'Passport Police Verification Delay Grievance Letter - English Format',
      description: 'Free Passport delay and Police Verification grievance letter format for RPO and CPGRAMS portal.',
    }
  }
];
