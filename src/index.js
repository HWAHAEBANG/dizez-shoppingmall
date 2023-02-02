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
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
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

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: "scale",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <RouterProvider router={router} />
  </AlertProvider>
);
