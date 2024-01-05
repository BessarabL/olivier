import { ThemeContext } from "..";
import { useContext } from "react";
import { THEME } from "./type";
import { LOCAL_STORAGE_THEME_KEY } from "./constants";

interface UseThemeResult {
  toggleTheme: () => void
  theme: THEME
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
      let newTheme: THEME;
      switch (theme) {
      case THEME.DARK:
          newTheme = THEME.LIGHT;
          break;
      case THEME.LIGHT:
          newTheme = THEME.DARK;
          break;
      default:
          newTheme = THEME.LIGHT;
      }
      setTheme?.(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
      theme: theme || THEME.LIGHT,
      toggleTheme,
  };
}
