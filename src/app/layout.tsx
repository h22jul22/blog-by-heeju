import localFont from 'next/font/local';
import './globals.css';

const SeoulHangang = localFont({
  src: '../../public/fonts/SeoulHangangM.ttf',
  variable: '--font-SeoulHangang',
});

const SeoulHangangBold = localFont({
  src: '../../public/fonts/SeoulHangangB.ttf',
  variable: '--font-SeoulHangang-bold',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${SeoulHangang.variable} ${SeoulHangangBold.variable} min-h-screen`}>{children}</body>
    </html>
  );
}
