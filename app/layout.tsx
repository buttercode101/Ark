import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/motion/cursor';

const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ark. contemporary — art + rosendal + kuns',
    template: '%s · ark. contemporary'
  },
  description:
    'A contemporary gallery in Rosendal, Free State, South Africa — showcasing the collective endeavours of a group of accomplished Rosendal-based artists.',
  openGraph: {
    title: 'ark. contemporary — art + rosendal + kuns',
    description:
      'A contemporary gallery in Rosendal, Free State, South Africa showcasing Rosendal-based artists.',
    type: 'website',
    url: siteUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ark. contemporary — art + rosendal + kuns',
    description:
      'A contemporary gallery in Rosendal, Free State, South Africa showcasing Rosendal-based artists.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="grain">
        <CustomCursor />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
