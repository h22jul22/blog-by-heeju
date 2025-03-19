import localFont from 'next/font/local';
import './globals.css';
import SidebarContainer from '@/components/sidebar/sidebar-container';
import NavBar from '@/components/navbar';

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
      <body className={`${SeoulHangang.variable} ${SeoulHangangBold.variable} mx-auto min-h-screen`}>
        <main className='relative flex'>
          <SidebarContainer />
          <section className='ml-[10px] flex-1'>
            <NavBar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
