import './loadEnv';

import { connectDB } from './mongoose';
import Guide from './models/Guide';
import Portal from './models/Portal';
import Template from './models/Template';
import { templatesData } from './seedTemplates';
import { slugify } from '../utils/slugify';

const vahanPortal = {
  name: 'VAHAN 4.0 Citizen Services',
  category: 'govt',
  url: 'https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml',
  description: 'Official MoRTH portal for vehicle registration, RC services, and transfer of ownership services',
  isActive: true,
};

const rcTransferGuide = {
  title: 'RC Transfer Delay Complaint Guide',
  category: 'govt',
  language: 'hinglish',
  content: `Vehicle sale ke baad RC transfer delay hona common problem hai. Agar buyer, seller, dealer, ya RTO side se transfer pending hai to written record banana important hai.

**Common RC Transfer Issues:**
- VAHAN application pending hai
- Dealer ne documents submit nahi kiye
- Buyer/seller OTP ya document verification pending hai
- Form 29 / Form 30 mismatch hai
- Fee paid hai lekin receipt/status update nahi hua
- Old owner ke naam par challan ya notice aa raha hai

**Important Documents:**
- Vehicle registration number and RC copy
- Form 29 and Form 30
- Sale receipt, delivery note, or sale agreement
- Insurance and PUC copy
- Application number / payment receipt from VAHAN or RTO
- Follow-up emails, WhatsApp chats, dealer receipts, or complaint references

**Best Approach:**
Pehle VAHAN/RTO application status check karein, phir dealer/buyer/seller ko written complaint bhejein. Agar issue unresolved rahe to RTO helpdesk/transport department grievance channel par complaint raise karein.`,
  steps: [
    'VAHAN citizen service portal par vehicle registration number se status check karein',
    'Application number, receipt, fee payment, and pending reason note karein',
    'Seller, buyer, dealer, ya agent ko written reminder bhejein',
    'Form 29, Form 30, RC copy, insurance, PUC, address proof, and payment receipt ready rakhein',
    'RTO office/helpdesk se written status maangein',
    'Agar dealer delay kar raha hai to dealer ko legal notice style complaint bhejein',
    'Transport department grievance portal ya state public grievance portal par complaint escalate karein',
    'Agar financial loss, challan, or misuse ka risk ho to local legal advice lein',
  ],
  tags: [
    'rc transfer',
    'vehicle ownership transfer',
    'rto complaint',
    'vahan parivahan',
    'form 29 form 30',
    'vehicle transfer delay',
  ],
  metadata: {
    title: 'RC Transfer Delay Complaint Guide | Vehicle Ownership Transfer',
    description: 'RC transfer delay complaint guide: documents, VAHAN status, RTO escalation, and ready complaint format for vehicle ownership transfer.',
  },
  published: true,
};

export async function upsertTrafficContent() {
  await connectDB();

  const portal = await Portal.findOneAndUpdate(
    { slug: slugify(vahanPortal.name) },
    {
      ...vahanPortal,
      slug: slugify(vahanPortal.name),
    },
    { upsert: true, returnDocument: 'after', runValidators: true }
  );

  const govtPortals = await Portal.find({ category: 'govt', isActive: true }).select('_id').lean();
  const portalIds = Array.from(new Set([...govtPortals.map((item) => item._id.toString()), portal._id.toString()]));

  const guide = await Guide.findOneAndUpdate(
    { slug: slugify(rcTransferGuide.title) },
    {
      ...rcTransferGuide,
      slug: slugify(rcTransferGuide.title),
      portals: portalIds,
    },
    {
      upsert: true,
      returnDocument: 'after',
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  );

  const rcTemplates = templatesData.filter(
    (template) => template.title.includes('RC Transfer') || template.title.includes('Vehicle RC')
  );

  for (const template of rcTemplates) {
    await Template.findOneAndUpdate(
      { slug: slugify(template.title) },
      {
        ...template,
        slug: slugify(template.title),
        guideRef: guide._id,
      },
      {
        upsert: true,
        returnDocument: 'after',
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );
  }

  return {
    guideSlug: guide.slug,
    templateSlugs: rcTemplates.map((template) => slugify(template.title)),
    portalSlug: portal.slug,
  };
}

if (require.main === module) {
  upsertTrafficContent()
    .then((result) => {
      console.log('Traffic content upserted:', result);
      process.exit(0);
    })
    .catch((error) => {
      console.error('Traffic content upsert failed:', error);
      process.exit(1);
    });
}
