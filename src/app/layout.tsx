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
    'Upload or take a bird photo and get fast AI-powered bird identification with species details, facts, and saved discovery history.',
  keywords: [
    'bird identifier app',
    'ai bird identification',
    'identify birds from photos',
    'bird species finder',
    'birdwatching app',
    'bird facts',
    'bird recognition',
    'photo bird matcher',
    'bird discovery history',
    'Birdly',
  ],
  authors: [{ name: site.company.name, url: 'https://h2adigital.com' }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Lifestyle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Identify birds from photos in seconds. Get likely matches, species details, bird facts, and a saved history of discoveries.',
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
    site: '@birdlyapp',
    creator: '@hakim98bologna',
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Upload a bird photo, get fast AI matches, and explore detailed species info and birdwatching insights.',
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
