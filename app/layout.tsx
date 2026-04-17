import type {Metadata} from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'The Digital Curator',
  description: 'Master React Interviews',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark`}>
      <body suppressHydrationWarning className="bg-background text-on-surface font-body antialiased min-h-[100dvh] flex flex-col selection:bg-primary/30 selection:text-primary">
        <Navigation />
        <div className="flex-1 w-full pt-[80px]">{children}</div>
      </body>
    </html>
  );
}
