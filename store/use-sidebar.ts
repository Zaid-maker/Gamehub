import { create } from "zustand";

interface SidebarStore {
    collapsed: boolean;
    onExpand: () => void;
    onCollape: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollape: () => set(() => ({ collapsed: true })),
}));
