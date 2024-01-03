import {
  ReactNode, useMemo, useState,
} from "react";
import ThemeContext from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../lib/constants";
import { THEME } from "../lib/type";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

interface ThemeProviderProps {
  initialTheme?: THEME
  children: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    initialTheme,
    children,
  } = props;

  const [theme, setTheme] = useState<THEME>(initialTheme || defaultTheme);

  const defaultThemeProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultThemeProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
