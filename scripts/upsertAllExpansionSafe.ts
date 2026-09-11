import '../lib/db/loadEnv';
import { connectDB } from '../lib/db/mongoose';
import Guide from '../lib/db/models/Guide';
import Template from '../lib/db/models/Template';
import Portal from '../lib/db/models/Portal';
import { slugify } from '../lib/utils/slugify';
import { expansionGuidesData } from '../lib/db/seedGuidesExpansion';
import { expansionTemplatesData } from '../lib/db/seedTemplatesExpansion';
import { enrichGuideContent } from '../lib/db/seed';

async function upsertAllExpansion() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ MongoDB connected.');

    // Fetch existing portals to link guides
    const portals = await Portal.find().lean();
    console.log(`Found ${portals.length} existing portals.`);

    // 1. UPSERT EXPANSION GUIDES (38 guides)
    console.log(`\n📚 Upserting ${expansionGuidesData.length} Expansion Guides...`);
    let guidesInserted = 0;
    let guidesUpdated = 0;

    for (const guide of expansionGuidesData) {
      const slug = slugify(guide.title);

      // Match relevant portals based on category
      const relevantPortals = portals.filter((portal) => {
        switch (guide.category) {
          case 'ecommerce':
            return portal.category === 'govt';
          case 'banking':
            return portal.category === 'banking' || portal.category === 'govt';
          case 'telecom':
            return portal.category === 'telecom' || portal.category === 'govt';
          case 'rera':
            return portal.category === 'rera' || portal.category === 'govt';
          case 'insurance':
            return portal.category === 'insurance' || portal.category === 'govt';
          default:
            return portal.category === 'govt';
        }
      });

      const existing = await Guide.findOne({ slug });
      if (existing) {
        await Guide.updateOne(
          { slug },
          {
            $set: {
              title: guide.title,
              category: guide.category,
              language: guide.language,
              content: enrichGuideContent(guide),
              steps: guide.steps,
              tags: guide.tags,
              metadata: guide.metadata,
              published: true,
              portals: relevantPortals.map((p) => p._id),
            },
          }
        );
        guidesUpdated++;
      } else {
        await Guide.create({
          ...guide,
          content: enrichGuideContent(guide),
          slug,
          portals: relevantPortals.map((p) => p._id),
          views: Math.floor(Math.random() * 200) + 50,
          published: true,
        });
        guidesInserted++;
      }
    }
    console.log(`✅ Guides: ${guidesInserted} newly created, ${guidesUpdated} updated.`);

    // Fetch all guides to link templates
    const allGuides = await Guide.find().lean();

    // 2. UPSERT EXPANSION TEMPLATES (60 templates)
    console.log(`\n📝 Upserting ${expansionTemplatesData.length} Expansion Templates...`);
    let templatesInserted = 0;
    let templatesUpdated = 0;

    for (const template of expansionTemplatesData) {
      const slug = slugify(template.title);

      // Find relevant guide reference
      const titleLower = template.title.toLowerCase();
      let guideRef;
      for (const g of allGuides) {
        const guideTitleLower = g.title.toLowerCase();
        // Check simple word matches
        const words = titleLower.split(' ').filter((w) => w.length > 3);
        if (words.some((w) => guideTitleLower.includes(w))) {
          guideRef = g._id;
          break;
        }
      }

      const existing = await Template.findOne({ slug });
      if (existing) {
        await Template.updateOne(
          { slug },
          {
            $set: {
              title: template.title,
              language: template.language,
              content: template.content,
              metadata: template.metadata,
              guideRef: guideRef || existing.guideRef,
            },
          }
        );
        templatesUpdated++;
      } else {
        await Template.create({
          ...template,
          slug,
          guideRef,
          downloadCount: Math.floor(Math.random() * 300) + 50,
        });
        templatesInserted++;
      }
    }
    console.log(`✅ Templates: ${templatesInserted} newly created, ${templatesUpdated} updated.`);

    // Final Counts
    const totalGuides = await Guide.countDocuments();
    const totalTemplates = await Template.countDocuments();
    console.log(`\n🎉 Total Guides in Database: ${totalGuides}`);
    console.log(`🎉 Total Templates in Database: ${totalTemplates}`);
    console.log(`🎉 Total Indexable URLs will be ~${totalGuides + totalTemplates + 16} pages!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error during expansion upsert:', error);
    process.exit(1);
  }
}

upsertAllExpansion();
