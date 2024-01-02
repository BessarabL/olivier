//import styles from "./App.module.scss";
import { FC } from "react";
import MainRoutes from "./mainRoutes";
import { Header,Footer } from "../widgets";
import {
  RouterProvider,
} from "react-router-dom";

const App: FC = () => {

  return (
<>
<Header />
<RouterProvider router={MainRoutes} />
<Footer />
</>
  )
}

export default App



