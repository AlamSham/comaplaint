import { describe, it, expect } from 'vitest';
import { slugify } from '../../../lib/utils/slugify';

describe('slugify utility', () => {
  it('converts titles to clean lowercase slugs', () => {
    expect(slugify('Amazon Complaint Letter')).toBe('amazon-complaint-letter');
  });

  it('removes special characters', () => {
    expect(slugify('UPI & Payment Fraud - 100% Refund!')).toBe('upi-payment-fraud-100-refund');
  });
});
