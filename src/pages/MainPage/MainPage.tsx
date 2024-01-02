import { Header, Landing, Footer } from "../../widgets"
import { FC } from "react";
import cls from "./MainPage.module.scss"
const MainPage: FC = () => {

    return (
  <div className={cls.page}>
  <Header />
  <Landing />
  <Footer />
  </div>
    )
  }
  
  export default MainPage