import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import { enrichGuideContent, guidesData } from '@/lib/db/seed';
import { slugify } from '@/lib/utils/slugify';

async function upsertExpandedGuideContent() {
  await connectDB();

  const results = await Promise.all(
    guidesData.map((guide) =>
      Guide.findOneAndUpdate(
        { slug: slugify(guide.title) },
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
          },
          $setOnInsert: {
            slug: slugify(guide.title),
            views: 0,
          },
        },
        { new: true, upsert: true }
      ).select('title slug')
    )
  );

  console.log('Updated expanded guide content:');
  for (const guide of results) {
    console.log(`- ${guide.title} (${guide.slug})`);
  }
}

upsertExpandedGuideContent()
  .then(() => {
    console.log('Done.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed to update guide content:', error);
    process.exit(1);
  });
