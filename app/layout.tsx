import './globals.scss';
import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';

const plex = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="wrapper">
      <body className={plex.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}