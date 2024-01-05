import { createContext } from "react";
import { ThemeContextProps } from "./type";

const ThemeContext = createContext<ThemeContextProps>({});

export default ThemeContext;