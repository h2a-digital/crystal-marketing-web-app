import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/globals.css';
import { site } from '@/content/site';
import { Toast, AnalyticsHost } from '@/components';
import { env } from '../../env';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: `${site.app.name} - ${site.app.tagline}`,
    template: `%s | ${site.app.name}`,
  },
  description:
    'Upload or take a photo to identify rocks, minerals, gemstones, and crystals in seconds with AI-powered matches, geological facts, and physical property details.',
  keywords: [
    'crystal identifier app',
    'rock identifier app',
    'mineral identifier',
    'gemstone identifier',
    'identify rocks from photos',
    'identify crystals from photos',
    'ai crystal identification',
    'geology app',
    'crystal discovery history',
    'Crystal',
  ],
  authors: [{ name: site.company.name, url: 'https://h2adigital.com' }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Education',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Identify rocks, minerals, gemstones, and crystals from photos in seconds. Get likely matches, facts, physical properties, and saved discovery history.',
    siteName: site.app.name,
    images: [
      {
        url: '/images/icon.png',
        width: 512,
        height: 512,
        alt: `${site.app.name} app icon`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@crystalapp',
    creator: '@hakim98bologna',
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Upload a rock or crystal photo, get fast AI identification matches, and explore detailed geological insights.',
    images: ['/images/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'y9xUcPL8jCrDt5sfUnOKnqs3J-4APi3Iw7f4JQbCJGE',
  },
  icons: [
    { rel: 'icon', url: '/images/icon.png', type: 'image/png', sizes: '512x512' },
    { rel: 'icon', url: '/icon1.png', type: 'image/png', sizes: '32x32' },
    { rel: 'apple-touch-icon', url: '/images/icon.png', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} antialiased`}>
        {children}
        <AnalyticsHost />
        <Toast />
      </body>
    </html>
  );
}
