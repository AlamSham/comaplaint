import mongoose, { Schema, Document, Model } from 'mongoose';
import { CATEGORIES, LANGUAGES } from '@/lib/constants';

export interface IGuide extends Document {
  title: string;
  slug: string;
  category: typeof CATEGORIES[number];
  language: typeof LANGUAGES[number];
  content: string;
  steps: string[];
  portals: mongoose.Types.ObjectId[];
  tags: string[];
  metadata: {
    title: string;
    description: string;
    ogImage?: string;
  };
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const GuideSchema = new Schema<IGuide>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: CATEGORIES,
        message: '{VALUE} is not a valid category',
      },
    },
    language: {
      type: String,
      required: [true, 'Language is required'],
      enum: {
        values: LANGUAGES,
        message: '{VALUE} is not a valid language',
      },
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    steps: [
      {
        type: String,
      },
    ],
    portals: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Portal',
      },
    ],
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    metadata: {
      title: {
        type: String,
        required: [true, 'Metadata title is required'],
      },
      description: {
        type: String,
        required: [true, 'Metadata description is required'],
      },
      ogImage: {
        type: String,
      },
    },
    published: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for performance
// Note: slug already has unique: true in schema, so no need for separate index
GuideSchema.index({ category: 1, published: 1 });
GuideSchema.index({ tags: 1 });
// Text index without language specification for multilingual support
GuideSchema.index({ title: 'text', content: 'text', tags: 'text' }, { default_language: 'none' });

const Guide: Model<IGuide> = mongoose.models.Guide || mongoose.model<IGuide>('Guide', GuideSchema);

export default Guide;
