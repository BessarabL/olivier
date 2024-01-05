import { FC } from "react";
import cls from "./MainPage.module.scss";
import { useTheme } from "../../app/ThemeProvider";

export const MainPage: FC = () => {
  const { theme } = useTheme();
  const pageCls = theme === "light" ? cls.container : cls.containerDark;
  return (
    <main className={pageCls}>
      <div>погода</div>
      <div> какие-то статейки мб новости</div>
</main>
  );
};
