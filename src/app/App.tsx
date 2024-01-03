//import styles from "./App.module.scss";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header,Footer } from "../widgets";

const App: FC = () => {

  return (
<>
<Header />
<Outlet />
<Footer />
</>
  )
}

export default App



