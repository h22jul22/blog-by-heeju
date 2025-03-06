import NavBar from '@/components/navbar';
import './globals.css';
import localFont from 'next/font/local';

const moveSans = localFont({
  src: '../../public/fonts/MoveSans-Medium.ttf',
  variable: '--font-moveSans',
});

const moveSansBold = localFont({
  src: '../../public/fonts/MoveSans-Bold.ttf',
  variable: '--font-moveSans-bold',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${moveSans.variable} ${moveSansBold.variable}`}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
