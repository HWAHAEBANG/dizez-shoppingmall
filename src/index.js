import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
          <ProtectedRoute requireAdmin={true}>
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
