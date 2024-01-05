export enum THEME { 
  LIGHT = "light",
  DARK = "dark"
}

export interface ThemeContextProps {
  theme?: THEME;
  setTheme?: (theme: THEME) => void;
}
