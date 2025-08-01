import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';

// Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  title: 'Recipe Generator',
  description: 'Generate recipes from ingredients!',
};

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
