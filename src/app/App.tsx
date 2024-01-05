import styles from "./App.module.scss";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Header,Footer } from "../widgets";

const App: FC = () => {
  const { theme } = useTheme();
  const AppClass = theme === "light" ? styles.light : styles.dark;

  return (
<div id='app' className={AppClass}>
<Header />
<Outlet />
<Footer />
</div>
  )
}

export default App



