import { FC } from "react";
import cls from "./Header.module.scss";
import { OlivierLogo } from "../../assets";
import { links } from "./constants";
import { useTheme } from "../../app/ThemeProvider";
import ThemeSwitcher from "../../shared/ui/ThemeSwitcher/ThemeSwitcher";

export const Header: FC = () => {

  const { theme } = useTheme();
  const logoName = theme === "light" ? cls.lightName : cls.darkName;
  
  return (
    <header className={cls.header}>
      <a href="/" className={cls.linkLogo} ><img
        src={OlivierLogo}
        width={100}
        height={50}
        alt="Оливье" 
        className={cls.logo}
      />
      <p className={logoName} >Оливье</p></a>
      <ul className={cls.linksRow}>
        {links.map((item) => (
          <li key={links.indexOf(item)}>
            <a className={cls.link} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <ThemeSwitcher />
    </header>
  );
};
