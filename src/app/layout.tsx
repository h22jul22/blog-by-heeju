import localFont from 'next/font/local';
import './globals.css';
import SidebarContainer from '@/components/sidebar/sidebar-container';

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
      <body className={`${SeoulHangang.variable} ${SeoulHangangBold.variable} min-h-screen`}>
        <main className='flex min-h-screen'>
          <SidebarContainer />
          <section className='min-h-screen flex-1'>{children}</section>
        </main>
      </body>
    </html>
  );
}
