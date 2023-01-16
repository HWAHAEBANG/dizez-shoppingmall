import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import Dibbs from "./pages/Dibbs";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Acc from "./pages/Acc";
import Shoes from "./pages/Shoes";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/men",
        element: <Men />,
      },
      {
        path: "/shop/women",
        element: <Women />,
      },
      {
        path: "/shop/acc",
        element: <Acc />,
      },
      {
        path: "/shop/shoes",
        element: <Shoes />,
      },
      {
        path: "/shop/add",
        element: (
          <ProtectedRoute requireAdmin>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dibbs",
        element: (
          <ProtectedRoute>
            <Dibbs />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
