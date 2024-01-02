import { FC } from "react";
import cls from "./MainPage.module.scss";


export const MainPage: FC = () => {
  return (
    <main className={cls.container}>
      <div>погода</div>
      <div> какие-то статейки мб новости</div>
</main>
  );
};
