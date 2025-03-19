'use client';

// import SidebarImage from './sidebar-image';
import SidebarProfile from '../sidebar/sidebar-profile';
import SidebarIndex from '../sidebar/sidebar-index';
import SidebarIcons from '../sidebar/sidebar-icons';
import { useSidebarStore } from '@/config/store';
import Image from 'next/image';

export default function SidebarContainer() {
  const { isSidebarOpen, setSidebarOpen } = useSidebarStore();

  const sidebarHandler = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`h-screen ${isSidebarOpen ? 'absolute z-50 w-full bg-white' : 'fixed w-[10px]'} transition-all duration-300`}
    >
      {/* <SidebarImage isSidebarOpen={isSidebarOpen} /> */}
      <Image
        src='/imgs/main-flower-image2.jpg'
        width={0}
        height={0}
        sizes={isSidebarOpen ? '100vw' : '10px'}
        layout='fill'
        alt='벗꽃 사진'
        title='Unsplash의Scott Webb'
        className={`h-screen object-cover ${isSidebarOpen ? 'absolute w-full' : 'fixed w-[10px]'} transition-all duration-300`}
      />
      <div
        className={`font-SeoulHangang-bold flex h-screen ${isSidebarOpen ? 'absolute w-full opacity-100' : 'fixed w-[10px] opacity-0'} flex-col items-center justify-center gap-8 text-white transition-opacity duration-300 hover:cursor-grab`}
        onClick={sidebarHandler}
      >
        {isSidebarOpen && (
          <>
            <SidebarProfile />
            <SidebarIndex />
            <SidebarIcons />
          </>
        )}
      </div>
    </aside>
  );
}
