'use client';

import { useSidebarStore } from '@/config/store';
import { ReactNode, useEffect } from 'react';

export default function SidebarContainerAnimation({ children }: { children: ReactNode }) {
  const { isSidebarOpen, setSidebarOpen } = useSidebarStore();

  const sidebarHandler = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div
      className='font-SeoulHangang-bold absolute top-0 flex h-full w-full flex-col items-center justify-center gap-8 text-white hover:cursor-grab'
      onClick={sidebarHandler}
    >
      {children}
    </div>
  );
}
