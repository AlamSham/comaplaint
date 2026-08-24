import '../lib/db/loadEnv';
import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';
import Template from '../lib/db/models/Template';

async function updateTrendingPages() {
  try {
    console.log('🔄 Connecting to MongoDB database...');
    await connectDB();
    console.log('✅ Connected successfully\n');

    // 1. OPTIMIZE FLIPKART GUIDE (Trending #1 with 213 Impressions)
    const flipkartGuide = await Guide.findOne({ slug: 'flipkart-complaint-filing' });
    if (flipkartGuide) {
      console.log('Updating Flipkart Complaint Guide...');
      flipkartGuide.title = 'Flipkart Refund Nahi Aaya? Complaint Kaise Kare — Email, Delivery Boy & NCH Guide (2026)';
      flipkartGuide.metadata = {
        title: 'Flipkart Refund Nahi Aaya? Customer Care Number, Delivery Boy Complaint & Email (2026)',
        description: 'Flipkart refund pending, wrong product, delivery boy bad behavior ya fake delivered status ki complaint kaise karein — Flipkart Email ID (support@flipkart.com), Customer Care 1800-208-9898, NCH 1915 helpline aur legal notice guide.',
      };
      flipkartGuide.tags = [
        'flipkart',
        'flipkart refund',
        'flipkart gmail complaint',
        'flipkart email id',
        'flipkart delivery boy complaint',
        'how to complain flipkart delivery boy',
        'flipkart customer care number',
        'flipkart grievance officer',
        'nch 1915 flipkart',
        'consumer court flipkart',
      ];

      flipkartGuide.content = `Flipkart par shopping karte waqt agar refund stuck ho gaya hai, wrong or damaged product delivered hua hai, delivery boy ne misbehave kiya ya bagair delivery diye "Delivered" mark kar diya, to ye comprehensive 2026 step-by-step complaint & escalation guide aapke liye hai.

### 📌 Quick Flipkart Complaint Summary & Helpline Info
- **Customer Care Helpline (Toll-Free)**: 1800-208-9898
- **Official Customer Support Email**: support@flipkart.com
- **Grievance Officer Email**: grievance.officer@flipkart.com
- **National Consumer Helpline (NCH)**: 1915 / consumerhelpline.gov.in
- **Legal Escalation Portal**: e-Daakhil (edaakhil.nic.in)

---

### 🚨 Common Flipkart Issues & Solutions

#### 1. Flipkart Refund Nahi Aaya / Refund Status Stuck
* **Bank Refund Timelines (SLA)**:
  * **UPI / GPay / PhonePe**: 24 से 48 घंटे
  * **Debit / Credit Card**: 3 से 5 Working Days
  * **NEFT / Bank Transfer**: 5 से 7 Working Days
* **Solution**: Agar SLA timeline exceed hone ke baad bhi refund bank account me show nahi ho raha, to Flipkart support chat me ARN (Acquirer Reference Number) / RRN / UTR maangein. Apne bank ko ye UTR dekar transaction credit verify karwayein.

#### 2. Flipkart Delivery Boy Complaint (Delivery Executive Misbehavior / Fake Delivery)
* **Delivery Executive Misbehavior**: Delivery boy ne abusive language use ki, open box delivery dene se mana kiya, ya fake OTP maanga.
* **Fake "Delivered" Status**: Order deliver nahi hua lekin SMS/App me "Delivered" mark ho gaya.
* **Complaint Process**:
  1. Flipkart App open karein -> My Orders -> Select Order -> Need Help / Issue with Delivery Executive.
  2. Call Support request karein (1800-208-9898) aur Delivery Agent ke behavior ya fake delivery ki complaint register karke Complaint Docket Number lein.
  3. Official email grievance.officer@flipkart.com par Order ID, Agent Mobile Number aur Incident Details bhejkar complaint escalate karein.

#### 3. Wrong Product / Empty Box / Damaged Product Delivered
* Immediately outer box ki photos aur Unboxing Video preserve karein.
* App me Return Request submit karein. Agar seller/system return request reject kar de, to 24 hours ke andar email support par photos ke sath ticket escalate karein.

---

### 🪜 Step-by-Step Flipkart Complaint Escalation Matrix

#### Step 1: In-App Support & Live Call (First Level)
1. Flipkart App open karke Account -> My Orders par jayein.
2. Affected order select karke Need Help? par click karein.
3. Automated chat bot me "Connect to Live Agent" ya "Request a Call" select karein.
4. Agent se baat karke Apni issue details batayein aur mandatory Complaint Docket Number lein.

#### Step 2: Flipkart Grievance Officer Escalation Email (Second Level)
Agar 48 ghante me Flipkart Customer Support se satisfactory resolution na mile, to Flipkart Nodal / Grievance Officer ko Email bhejein:
- Email To: grievance.officer@flipkart.com & CC: support@flipkart.com
- Subject: Urgent Complaint Regarding Order {{Order_ID}} — Refund/Delivery Issue
- Email Content: Order Invoice copy, Payment Proof screenshot, Flipkart Chat Screenshots, aur Complaint Ticket Number attach karein.

#### Step 3: National Consumer Helpline (NCH 1915) File Karein (Third Level)
Agar 7 din tak Flipkart issue resolve na kare:
1. National Consumer Helpline Portal (consumerhelpline.gov.in) par visit karein ya NCH App download karein.
2. Dial 1915 (Toll-free number) directly to register grievance.
3. Select Company: Flipkart Internet Private Limited, enter Order ID, Product Price, invoice copy & describe issue.
4. NCH directly Flipkart Nodal team ko notice bhejta hai, jisse 85%+ cases me 7-10 din ke andar refund/resolution mil jata hai.

#### Step 4: e-Daakhil Consumer Court Notice (Final Level)
Agar monetary loss heavy hai ya Flipkart ne unfair trade practice ki hai, to Consumer Protection Act 2019 Section 35 ke under e-Daakhil (edaakhil.nic.in) portal par District Consumer Commission me online case file karein.

---

### 📝 Ready Email Template for Flipkart Complaint

To: grievance.officer@flipkart.com
CC: support@flipkart.com
Subject: Complaint Regarding Flipkart Order ID {{ORDER_ID}} — Refund Pending / Delivery Dispute

Dear Grievance Officer,

Main {{YOUR_NAME}}, Flipkart registered user (Email: {{YOUR_EMAIL}}, Mobile: {{YOUR_PHONE}}).

Maine दिनांक {{ORDER_DATE}} को Flipkart se {{PRODUCT_NAME}} order kiya tha (Order ID: {{ORDER_ID}}), jiski total value ₹{{AMOUNT}} hai.

Issue Details:
{{WRITE_YOUR_PROBLEM_HERE - e.g., Item return hone ke 7 din baad bhi refund nahi aaya / Delivery boy ne delivered mark kar diya lekin product nahi mila}}

Previous Support Reference Number: {{COMPLAINT_TICKET_ID}}

Attached Proofs:
1. Flipkart Order Invoice
2. Payment Transaction Receipt (UTR/RRN)
3. Support Chat & Email Screenshots

Kripya is matter ko investigate karke mera refund ₹{{AMOUNT}} mere bank account me 48 ghante ke andar credit karwane ki kripya karein. Unresolved rehne par main NCH (National Consumer Helpline 1915) aur Consumer Forum me legal action lene ke liye baadhya hunga.

Regards,
{{YOUR_NAME}}
Mobile: {{YOUR_PHONE}}
Date: {{TODAY_DATE}}

---

### ❓ Frequently Asked Questions (FAQs)

**Q1: Flipkart email ID kya hai complaint ke liye?**
Ans: Flipkart customer support email support@flipkart.com aur Grievance Officer email grievance.officer@flipkart.com hai.

**Q2: Delivery boy ne item nahi diya aur delivered message aa gaya, kya karein?**
Ans: Immediately 1800-208-9898 par call karke "Fake Delivery Complaint" register karayein aur Grievance Officer ko mail bhejein. Delivery boy ka phone number aur time log note rakhein.

**Q3: Flipkart refund kitne din me aata hai?**
Ans: Return pickup complete hone ke baad UPI me 24-48 hours aur Credit/Debit card me 3-5 business days me refund credit ho jata hai.`;

      flipkartGuide.steps = [
        'Flipkart App me My Orders -> Need Help -> Request a Call select karein',
        'Customer Care Number 1800-208-9898 se baat karke Complaint Ticket ID lein',
        'Agar Delivery Boy issue hai to Fake Delivery / Agent Misbehavior complaint file karein',
        '48 hours tak resolve na hone par grievance.officer@flipkart.com par email bhejein',
        'Bank Statement me UTR / RRN number se refund credit status check karein',
        '7 din me resolution na milne par NCH Helpline 1915 ya consumerhelpline.gov.in par complaint lodge karein',
        'Heavy monetary loss ya product fraud ke mamle me e-Daakhil portal par Consumer Commission case file karein',
      ];

      await flipkartGuide.save();
      console.log('✅ Updated Flipkart Guide in DB');
    }

    // 2. OPTIMIZE CONSUMER FORUM HINDI TEMPLATE (Trending #2 with 4 Clicks & 22 Impressions)
    const consumerForumTemplate = await Template.findOne({ slug: 'consumer-forum-complaint-format-hindi' });
    if (consumerForumTemplate) {
      console.log('Updating Consumer Forum Hindi Template...');
      consumerForumTemplate.metadata = {
        title: 'उपभोक्ता फोरम शिकायत प्रारूप पीडीएफ | Consumer Forum Complaint Format Hindi (2026)',
        description: 'उपभोक्ता फोरम शिकायत प्रारूप (Consumer Court Complaint Format in Hindi PDF draft). उपभोक्ता संरक्षण अधिनियम 2019 धारा 35 के तहत जिला उपभोक्ता आयोग में शिकायत पत्र प्रारूप, नियम, दस्तावेज सूची व e-Daakhil गाइड।',
      };

      consumerForumTemplate.content = `उपभोक्ता शिकायत पत्र प्रारूप (Consumer Forum Complaint Format in Hindi)
(उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 35 के तहत - जिला उपभोक्ता विवाद निवारण आयोग)

समक्ष:
माननीय अध्यक्ष एवं सदस्यगण,
जिला उपभोक्ता विवाद निवारण आयोग, {{district_name}} ({{state_name}})

शिकायत संख्या: ___________ / 2026 (कार्यालय उपयोग हेतु)

शिकायतकर्ता का विवरण:
नाम: {{your_name}}
पिता/पति का नाम: {{father_husband_name}}
स्थायी पता: {{your_address}}
मोबाईल नंबर: {{your_phone}}
ईमेल आईडी: {{your_email}}

बनाम (विपक्षी / प्रतिवादी गण):
1. विपक्षी सं. 1 (कंपनी/विक्रेता का नाम): {{opposite_party_name}}
   पता: {{opposite_party_address}}
   ईमेल/फोन: {{opposite_party_contact}}

2. विपक्षी सं. 2 (निर्माता/सर्विस सेंटर/बैंक): {{opposite_party_2_name}}
   पता: {{opposite_party_2_address}}

शिकायत का विषय:
{{complaint_subject_short}} - (अनुचित व्यापार व्यवहार / सेवा में कमी हेतु हर्जाना एवं रिफंड का दावा)

शिकायत के विस्तृत तथ्य (Chronological Facts):

1. यह कि शिकायतकर्ता उपभोक्ता संरक्षण अधिनियम 2019 की धारा 2(7) के अंतर्गत एक 'उपभोक्ता' है, जिसने विपक्षी सं. 1 से दिनांक {{transaction_date}} को ₹{{amount_paid}} का भुगतान करके {{product_service_name}} खरीदा/सेवा प्राप्त की थी। (रसीद/इनवॉइस सं.: {{invoice_number}})।

2. यह कि खरीद/सेवा लेते समय विपक्षी ने वादा किया था कि:
   {{promised_specifications_warranty}}

3. यह कि उत्पाद/सेवा में निम्नलिखित गंभीर त्रुटि/खराबी/सेवा में कमी पाई गई:
   {{deficiency_details_explanation}}

4. यह कि शिकायतकर्ता ने दिनांक {{first_complaint_date}} को विपक्षी से संपर्क किया और शिकायत दर्ज कराई (शिकायत सं.: {{complaint_ticket_no}})। परंतु विपक्षी ने कोई उचित समाधान नहीं किया और अनुचित व्यापार व्यवहार (Unfair Trade Practice) अपनाया।

5. यह कि शिकायतकर्ता ने दिनांक {{legal_notice_date}} को विपक्षी को विधिक नोटिस (Legal Notice) भी भेजा, जिसका विपक्षी ने कोई जवाब नहीं दिया / भ्रामक जवाब दिया।

6. यह कि इस जिला आयोग के क्षेत्राधिकार (Jurisdiction) में यह मामला आता है क्योंकि विपक्षी का व्यवसाय/कार्यालय एवं शिकायतकर्ता का निवास स्थान इसी जिले में स्थित है तथा दावे की राशि अधिनियम की सीमा के अंतर्गत है।

शिकायतकर्ता द्वारा मांगी गई राहत / अनुतोष (Relief Claimed):

अतः माननीय आयोग से विनम्र प्रार्थना है कि विपक्षी गण को निम्नलिखित आदेश जारी करने की कृपा करें:

1. विपक्षी को आदेशित किया जाए कि वह शिकायतकर्ता को उत्पाद/सेवा की पूरी राशि ₹{{amount_paid}} ब्याज (12% वार्षिक) सहित वापस (Refund) करे।
2. विपक्षी द्वारा की गई सेवा में कमी एवं अनुचित व्यवहार के कारण शिकायतकर्ता को हुई मानसिक, शारीरिक एवं आर्थिक परेशानी हेतु ₹{{compensation_amount}} का मुआवजा (Compensation) दिलाया जाए।
3. शिकायतकर्ता को मुकदमे के खर्च (Litigation Expenses) के रूप में ₹{{litigation_cost}} प्रदान कराए जाएं।
4. अन्य कोई अनुतोष जो माननीय आयोग उचित समझे, प्रदान किया जाए।

संलग्न दस्तावेजों की सूची (Annexure Documents):
1. अनुसूची-1: बिल / इनवॉइस / भुगतान रसीद की प्रति
2. अनुसूची-2: उत्पाद की फोटो / वारंटी कार्ड / जॉब कार्ड की प्रति
3. अनुसूची-3: विपक्षी को भेजे गए ईमेल / चैट / पत्राचार की प्रति
4. अनुसूची-4: विधिक नोटिस (Legal Notice) एवं डिलीवरी रसीद की प्रति
5. अनुसूची-5: शिकायतकर्ता का पहचान एवं पते का प्रमाण (आधार कार्ड)

सत्यापन (Verification)

मैं {{your_name}}, सत्यापित करता/करती हूं कि उपरोक्त शिकायत पत्र की पैरा 1 से 6 में दी गई समस्त बातें मेरी निजी जानकारी और विश्वास के अनुसार सत्य व सही हैं। इसमें कुछ भी छुपाया नहीं गया है।

स्थान: {{your_place}}
दिनांक: {{date}}

हस्ताक्षर शिकायतकर्ता: _____________________
( {{your_name}} )

-------------------------------------------------------------------
💡 उपभोक्ता फोरम शिकायत दर्ज करने के महत्वपूर्ण नियम & e-Daakhil गाइड:

1. PDF कैसे बनाएं & डाउनलोड करें:
   - इस फॉर्मेट को कॉपी करके अपने केस के अनुसार तथ्य भरें।
   - Word / Docs me paste karke Save as PDF / Print to PDF karein.
   - e-Daakhil (edaakhil.nic.in) portal par account banakar PDF upload karein.

2. जिला आयोग की आर्थिक सीमा (Jurisdiction Limit):
   - जिला उपभोक्ता आयोग (District Commission): ₹50 लाख तक के मामले.
   - राज्य आयोग (State Commission): ₹50 लाख से ₹2 करोड़ तक.
   - राष्ट्रीय आयोग (National Commission): ₹2 करोड़ से अधिक.

3. केस दर्ज करने की समय सीमा (Limitation Period):
   - कारण (Cause of Action) उत्पन्न होने की तिथि से 2 वर्ष के भीतर शिकायत दर्ज कराना अनिवार्य है।`;

      await consumerForumTemplate.save();
      console.log('✅ Updated Consumer Forum Hindi Template in DB');
    }

    // 3. OPTIMIZE RBI OMBUDSMAN HINDI TEMPLATE (Trending #3)
    const rbiTemplate = await Template.findOne({ slug: 'bank-complaint-to-rbi-ombudsman-hindi' });
    if (rbiTemplate) {
      console.log('Updating RBI Ombudsman Hindi Template...');
      rbiTemplate.metadata = {
        title: 'बैंक लोकपाल (RBI Ombudsman) शिकायत पत्र हिंदी | Complaint Format PDF (2026)',
        description: 'RBI Ombudsman complaint format in Hindi (बैंक लोकपाल शिकायत पत्र प्रारूप). बैंक फ्रॉड, UPI फेल, अनधिकृत कटौती, ATM डिस्प्यूट हेतु CMS RBI (cms.rbi.org.in) शिकायत पत्र PDF प्रारूप।',
      };
      await rbiTemplate.save();
      console.log('✅ Updated RBI Ombudsman Hindi Template in DB');
    }

    // 4. OPTIMIZE RC TRANSFER HINGLISH TEMPLATE (Trending #4)
    const rcTemplate = await Template.findOne({ slug: 'rc-transfer-complaint-letter-hinglish' });
    if (rcTemplate) {
      console.log('Updating RC Transfer Hinglish Template...');
      rcTemplate.metadata = {
        title: 'RC Transfer Complaint Letter Hinglish | Vehicle RTO Delay Format PDF (2026)',
        description: 'RC transfer delay complaint letter format in Hinglish. Vehicle ownership transfer, VAHAN status pending, Form 29 Form 30 delay complaint for RTO & Transport Department.',
      };
      await rcTemplate.save();
      console.log('✅ Updated RC Transfer Hinglish Template in DB');
    }

    console.log('\n🎉 ALL TRENDING PAGES OPTIMIZED SUCCESSFULLY IN MONGODB!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating trending pages:', error);
    process.exit(1);
  }
}

updateTrendingPages();
