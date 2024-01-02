import { FC } from "react";
import cls from "./Landing.module.scss";


export const Landing: FC = () => {
  return (
    <main className={cls.container}>
      <div>погода</div>
      <div> какие-то статейки мб новости</div>
</main>
  );
};
