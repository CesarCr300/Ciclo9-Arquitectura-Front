import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { Layout } from "../components/Layout";
import { Products } from "../pages/products/Products";
const ProductsCard = lazy(() => import("../pages/productsCard/ProductsCard"));
import { ProductsCreation } from "../pages/productsCreation/ProductsCreation";
import { UserUpdate } from "../pages/userUpdate/UserUpdate";
import { UserRecoverPassword } from "../pages/userRecoverPassword/UserRecoverPassword";
import { UserForgotPassword } from "../pages/userForgotPassword/UserForgotPassword";
import { ProductUser } from "../pages/productsUser/ProductUser";
import { Store } from "../pages/store/store";
import LayoutPublic from "../components/LayoutPublic";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/users/forgot-password", element: <UserForgotPassword /> },
  { path: "/users/recover-password", element: <UserRecoverPassword /> },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/create",
        element: <ProductsCreation />,
      },
      {
        path: "products/:id",
        element: <ProductsCard />,
      },
      { path: "users/update", element: <UserUpdate /> },
    ],
  },
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        path: "/productsUser/:id",
        element: <ProductUser />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);
