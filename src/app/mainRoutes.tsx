import {
  createBrowserRouter,
} from "react-router-dom";
import { MainPage,Todos,Chat,ContactsPage,HugeList } from "../pages";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/hugelist",
    element: <HugeList />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
]);

export default MainRoutes;
