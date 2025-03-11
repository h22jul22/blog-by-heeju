import Image from 'next/image';
import SidebarIndex from '../sidebar/sidebar-index';
import SidebarIcons from '../sidebar/sidebar-icons';
import SidebarProfile from '../sidebar/sidebar-profile';

export default function SidebarContainer() {
  return (
    <>
      <Image
        src='/imgs/main-flower-image.jpg'
        width={0}
        height={0}
        sizes='100vw'
        layout='fill'
        objectFit='cover'
        alt='벗꽃 사진'
        title='Unsplash의 Masaaki Komori'
      />
      <div className='font-SeoulHangang-bold absolute top-0 flex h-full w-full flex-col items-center justify-center gap-8 text-white'>
        <SidebarProfile />
        <SidebarIndex />
        <SidebarIcons />
      </div>
    </>
  );
}
