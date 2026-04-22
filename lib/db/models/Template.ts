import mongoose, { Schema, Document, Model } from 'mongoose';
import { LANGUAGES } from '@/lib/constants';

export interface ITemplate extends Document {
  title: string;
  slug: string;
  guideRef?: mongoose.Types.ObjectId; // Made optional
  language: typeof LANGUAGES[number];
  content: string;
  downloadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const TemplateSchema = new Schema<ITemplate>(
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
    guideRef: {
      type: Schema.Types.ObjectId,
      ref: 'Guide',
      required: false, // Made optional since not all templates need guide references
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
    downloadCount: {
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
TemplateSchema.index({ guideRef: 1 });
// Text index without language specification for multilingual support
TemplateSchema.index({ title: 'text', content: 'text' }, { default_language: 'none' });

const Template: Model<ITemplate> = mongoose.models.Template || mongoose.model<ITemplate>('Template', TemplateSchema);

export default Template;
