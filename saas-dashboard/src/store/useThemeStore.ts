import { create } from "zustand";

type Theme = "light" | "dark";
type ThemeState = { theme: Theme; toggle: () => void; set: (t: Theme) => void };

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (localStorage.getItem("theme") as Theme) || "light",
  toggle: () =>
    set((s) => {
      const next = s.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.body.dataset.theme = next;
      return { theme: next };
    }),
  set: (t) => {
    localStorage.setItem("theme", t);
    document.body.dataset.theme = t;
    return { theme: t };
  },
}));