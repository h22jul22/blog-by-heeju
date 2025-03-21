'use client';

import SidebarImage from './sidebar-image';
import SidebarProfile from '../sidebar/sidebar-profile';
import SidebarIndex from '../sidebar/sidebar-index';
import SidebarIcons from '../sidebar/sidebar-icons';
import { useSidebarStore } from '@/config/store';
import { useEffect } from 'react';

export default function SidebarContainer() {
  const { isSidebarOpen, setSidebarOpen } = useSidebarStore();

  const sidebarHandler = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          sidebarHandler();
        }
      };

      window.addEventListener('wheel', handleWheel);

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isSidebarOpen, sidebarHandler]);

  return (
    <aside
      className={`h-screen ${isSidebarOpen ? 'absolute z-50 w-full bg-white' : 'fixed w-[10px]'} transition-all duration-300`}
    >
      <SidebarImage isSidebarOpen={isSidebarOpen} />
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
