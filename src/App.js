import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import RecentlyViewed from "./components/RecentlyViewed";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Popup />
        <Navbar />
        <Outlet />
        <Footer />
        <RecentlyViewed />
        <BackToTop />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
