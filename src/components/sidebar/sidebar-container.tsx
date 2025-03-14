'use client';

import SidebarImage from './sidebar-image';
import SidebarProfile from '../sidebar/sidebar-profile';
import SidebarIndex from '../sidebar/sidebar-index';
import SidebarIcons from '../sidebar/sidebar-icons';
import { useSidebarStore } from '@/config/store';

export default function SidebarContainer() {
  const { isSidebarOpen, setSidebarOpen } = useSidebarStore();

  const sidebarHandler = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`min-h-screen ${isSidebarOpen ? 'absolute z-50 w-full bg-white' : 'w-[10px]'} transition-all duration-300`}
    >
      <SidebarImage isSidebarOpen={isSidebarOpen} />
      <div
        className={`font-SeoulHangang absolute top-0 flex h-full ${isSidebarOpen ? 'w-full opacity-100' : 'w-[10px] opacity-0'} flex-col items-center justify-center gap-8 text-white transition-opacity duration-300 hover:cursor-grab`}
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
