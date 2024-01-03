//import styles from "./App.module.scss";
import { FC } from "react";
import MainRoutes from "./mainRoutes";
import { useTheme } from "./ThemeProvider";
import { Header,Footer } from "../widgets";
import {
  RouterProvider,
} from "react-router-dom";

const App: FC = () => {
  const { theme } = useTheme();
  const AppClass = theme === "light" ? "light" : "dark";

  return (
<div id='app' className={AppClass}>
<Header />
<RouterProvider router={MainRoutes} />
<Footer />
</div>
  )
}

export default App



