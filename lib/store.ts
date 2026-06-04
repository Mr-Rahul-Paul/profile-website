import { create } from "zustand";

interface CrawlState {
  isOpen: boolean;
  openCrawl: () => void;
  closeCrawl: () => void;
}

export const useCrawlStore = create<CrawlState>((set) => ({
  isOpen: false,
  openCrawl: () => set({ isOpen: true }),
  closeCrawl: () => set({ isOpen: false }),
}));

interface TrailState {
  isActive: boolean;
  toggleTrail: () => void;
}

export const useTrailStore = create<TrailState>((set) => ({
  isActive: false,
  toggleTrail: () => set((state) => ({ isActive: !state.isActive })),
}));
