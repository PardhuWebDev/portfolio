import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

const siteUrl =
<<<<<<< HEAD
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pardhuwebdev.vercel.app';

const metaDescription =
  'AIML Engineer · Full-Stack Developer · Gen AI Specialist. Building intelligent systems at the intersection of AI and engineering.';

const ogImagePath = '/images/profile.jpg';
=======
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bettinasosa.com';

const metaDescription =
  'Creative Builder · Software Engineer · Design Engineer. Product, code & craft.';

const ogImagePath = '/images/Bettina_s%20portfolio.jpeg';
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
<<<<<<< HEAD
    default: "Pardha Saradhi's Portfolio",
    template: "%s | Pardha Saradhi"
=======
    default: "Bettina's portfolio",
    template: "%s | Bettina's portfolio"
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
  },
  description: metaDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
<<<<<<< HEAD
    siteName: "Pardha Saradhi's Portfolio",
    title: "Pardha Saradhi's Portfolio",
=======
    siteName: "Bettina's portfolio",
    title: "Bettina's portfolio",
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
    description: metaDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
<<<<<<< HEAD
        alt: 'Pardha Saradhi — AIML Engineer, Full-Stack Developer'
=======
        alt: "Bettina — Creative Builder, Software Engineer, Design Engineer"
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
<<<<<<< HEAD
    title: "Pardha Saradhi's Portfolio",
=======
    title: "Bettina's portfolio",
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
    description: metaDescription,
    images: [ogImagePath]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className="overflow-scroll overflow-x-hidden">
        <Animations>
          <main>
            <Header />
            <div className="flex flex-col bg-background text-foreground">
              <main className={`flex-grow ${inter.className}`}>{children}</main>
              <Analytics />
            </div>
            <Toaster />
          </main>
        </Animations>
      </body>
    </html>
  );
}
