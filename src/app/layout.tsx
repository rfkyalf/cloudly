import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import ReactQueryProvider from '@/components/ReactQueryProvider';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata: Metadata = {
  title: 'Cloudly - The Forecast in Your Pocket',
  description:
    'Stay prepared for every type of weather with Cloudly. Our website offers comprehensive weather insights with live updates.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
