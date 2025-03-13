import { create } from 'zustand';
import { SidebarState } from './type';

export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: true,
  setSidebarOpen: (isOpen: boolean) => set({ isSidebarOpen: isOpen }),
}));
