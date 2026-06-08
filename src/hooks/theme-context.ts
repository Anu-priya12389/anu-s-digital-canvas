import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

export const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeCtx);
