import mongoose, { Schema, Document, Model } from 'mongoose';
import { CATEGORIES } from '@/lib/constants';

export interface IPortal extends Document {
  name: string;
  slug: string;
  category: typeof CATEGORIES[number];
  url: string;
  description: string;
  phone?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PortalSchema = new Schema<IPortal>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
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
    url: {
      type: String,
      required: [true, 'URL is required'],
      validate: {
        validator: function (v: string) {
          return /^https?:\/\/.+/.test(v);
        },
        message: 'Invalid URL format. URL must start with http:// or https://',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    phone: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for performance
// Note: slug already has unique: true in schema, so no need for separate index
PortalSchema.index({ category: 1, isActive: 1 });

const Portal: Model<IPortal> = mongoose.models.Portal || mongoose.model<IPortal>('Portal', PortalSchema);

export default Portal;
