import { FC } from "react";
import cls from "./Header.module.scss";
import { OlivierLogo } from "../../assets";
import { links } from "./constants";

export const Header: FC = () => {
  return (
    <header className={cls.header}>
      <img
        src={OlivierLogo}
        width={100}
        height={50}
        alt="Sweet pets"
        className={cls.logo}
      />
      <p className={cls.name} >Оливье</p>
      <ul className={cls.linksRow}>
        {links.map((item) => (
          <li key={links.indexOf(item)}>
            <a className={cls.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
