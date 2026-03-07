import { create } from "zustand";

export type HeadlessSectionKey = "skills" | "experience" | "projects";

interface SectionVisibility {
  skills: boolean;
  experience: boolean;
  projects: boolean;
}

type ProjectDensity = "compact" | "full";

interface HeadlessState {
  sections: SectionVisibility;
  projectDensity: ProjectDensity;
  showAwards: boolean;
  toggleSection: (section: HeadlessSectionKey) => void;
  setProjectDensity: (density: ProjectDensity) => void;
  toggleAwards: () => void;
  resetHeadlessState: () => void;
}

const initialSections: SectionVisibility = {
  skills: true,
  experience: true,
  projects: true,
};

export const useHeadlessStore = create<HeadlessState>((set) => ({
  sections: initialSections,
  projectDensity: "full",
  showAwards: true,
  toggleSection: (section) =>
    set((state) => ({
      sections: {
        ...state.sections,
        [section]: !state.sections[section],
      },
    })),
  setProjectDensity: (density) => set({ projectDensity: density }),
  toggleAwards: () => set((state) => ({ showAwards: !state.showAwards })),
  resetHeadlessState: () =>
    set({
      sections: initialSections,
      projectDensity: "full",
      showAwards: true,
    }),
}));
