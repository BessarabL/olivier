//import styles from "./App.module.scss";
import { FC } from "react";

import MainRoutes from "./mainRoutes";
import { useTheme } from "./ThemeProvider";
import { Outlet } from "react-router-dom";
import { Header,Footer } from "../widgets";

const App: FC = () => {
  const { theme } = useTheme();
  const AppClass = theme === "light" ? "light" : "dark";

  return (
<div id='app' className={AppClass}>
<Header />
<Outlet />
<Footer />
</div>
  )
}

export default App



