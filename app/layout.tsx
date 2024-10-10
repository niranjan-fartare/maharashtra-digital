import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maharashtra.Digital | Web Development Agency',
  description: 'Crafting cutting-edge web solutions for businesses across Maharashtra and beyond. Expert web development, responsive design, and performance optimization.',
  keywords: 'web development, Maharashtra, responsive design, performance optimization, digital agency',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://maharashtra.digital',
    siteName: 'Maharashtra.Digital',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@maharashtradigital',
    creator: '@maharashtradigital',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://maharashtra.digital" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}