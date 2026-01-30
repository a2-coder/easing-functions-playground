import type { EasingFunction } from "./lib/common";
import { create } from "zustand";

type ConfigState = {
  duration: number;
  setDuration: (duration: number) => void;
  easing: EasingFunction;
  setEasing: (easing: EasingFunction) => void;
};

export const useConfigStore = create<ConfigState>()((set) => ({
  duration: 1000,
  setDuration: (duration: number) => set({ duration }),
  easing: "linear",
  setEasing: (easing: EasingFunction) => set({ easing }),
}));
