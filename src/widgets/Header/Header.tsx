import { FC } from "react";
import cls from "./Header.module.scss";
import { OlivierLogo } from "../../assets";
import { links } from "./constants";

export const Header: FC = () => {
  return (
    <header className={cls.header}>
      <a href="/" className={cls.logoLink} ><img
        src={OlivierLogo}
        width={100}
        height={50}
        alt="Sweet pets"
        className={cls.logo}
      />
      <p className={cls.name} >Оливье</p></a>
      <ul className={cls.linksRow}>
        {links.map((item) => (
          <li key={links.indexOf(item)}>
            <a className={cls.link} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
