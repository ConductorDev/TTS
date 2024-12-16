import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { EventTicker } from '@/components/sections/event-ticker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Train Station - Appalachian Music Venue',
  description: 'Experience the soul of Appalachian music in our unique venue',
  icons: {
    icon: [
      {
        url: '/media/logos/favicon/6.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    apple: {
      url: '/media/logos/favicon/6.png',
      sizes: '180x180',
      type: 'image/png'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Navigation />
            <EventTicker />
            <main className="pt-[calc(64px+32px)]">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}