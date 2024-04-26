import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <>INICIO</>,
      },
    ],
  },
]);
