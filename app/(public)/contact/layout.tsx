import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact Us — हमसे संपर्क करें',
  description:
    'ShikayatKaro से संपर्क करें। Contact us for website feedback, content suggestions, and general questions. यह कानूनी सलाह के लिए नहीं है।',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
