import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { store } from "./app/store";
import { Provider } from "react-redux";
import MainRoutes from "./mainRoutes";
import {
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./app/ThemeProvider/index";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={MainRoutes} />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
