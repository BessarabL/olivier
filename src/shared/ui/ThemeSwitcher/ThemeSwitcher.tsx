import React, { useState } from "react";
import classes from "./ThemeSwitcher.module.scss";
import { useTheme } from "../../../app/ThemeProvider/lib/useTheme";

const ThemeSwitcher: React.FC = () => {
  const [, setIsChecked] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const onChange = () => {
    setIsChecked(prevState => !prevState);
    toggleTheme();
  };

  const btnClass = theme === "light" ? classes.btn : `${classes.btn} ${classes.dark}`;

  return (
    <button type='button' className={btnClass} onClick={onChange} />
  );
};

export default ThemeSwitcher;