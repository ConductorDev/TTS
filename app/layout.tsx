import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AudioPlayer } from "@/components/audio-player";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false
});

export const metadata: Metadata = {
  title: "The Train Station",
  description: "Experience the heart of Appalachian music in our unique venue",
  metadataBase: new URL('https://thetrainstationcorbin.com'),
  openGraph: {
    title: "The Train Station",
    description: "Experience the heart of Appalachian music in our unique venue",
    url: 'https://thetrainstationcorbin.com',
    siteName: 'The Train Station',
    images: [
      {
        url: '/media/logos/social/share.png',
        width: 1200,
        height: 1200,
        alt: 'The Train Station Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Train Station',
    description: 'Experience the heart of Appalachian music in our unique venue',
    images: ['/media/logos/social/share.png'],
    creator: '@thetrainstationcorbin',
  },
  icons: {
    icon: '/media/logos/favicon/6.png',
    shortcut: '/media/logos/favicon/6.png',
    apple: '/media/logos/favicon/6.png',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <AudioPlayer />
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}