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
  },
];
