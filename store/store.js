import { create } from "zustand";

export const useSkillStore = create((set) => ({
  skillInView: null,
  setSkillInView: (id) => set((state) => ({ skillInView: id })),
}));
