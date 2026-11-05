import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Climate = "mild" | "mixed" | "cold" | "severe";
export type WaterMode = "tanks" | "hookup";
export type UseLevel = "careful" | "typical" | "generous";
export type Toilet = "compost" | "cassette" | "black";
export type Power = "shore30" | "shore50" | "offgrid";
export type HeatChoice = "propane" | "diesel" | "minisplit" | "wood" | "electric";

export type PlanInput = {
  lengthFt: number;
  widthFt: number;
  people: number;
  loft: boolean;
  climate: Climate;
  water: WaterMode;
  days: number;
  use: UseLevel;
  toilet: Toilet;
  power: Power;
  heat: HeatChoice;
};

export const defaultPlan: PlanInput = {
  lengthFt: 20,
  widthFt: 8,
  people: 2,
  loft: true,
  climate: "mixed",
  water: "tanks",
  days: 3,
  use: "careful",
  toilet: "compost",
  power: "shore30",
  heat: "propane",
};

type GuideState = {
  done: Record<string, boolean>;
  plan: PlanInput;
  toggle: (id: string) => void;
  resetChecks: () => void;
  setPlan: (patch: Partial<PlanInput>) => void;
};

export const useGuideStore = create<GuideState>()(
  persist(
    (set) => ({
      done: {},
      plan: defaultPlan,
      toggle: (id) =>
        set((state) => ({ done: { ...state.done, [id]: !state.done[id] } })),
      resetChecks: () => set({ done: {} }),
      setPlan: (patch) => set((state) => ({ plan: { ...state.plan, ...patch } })),
    }),
    { name: "service-wall", version: 1, skipHydration: true },
  ),
);
