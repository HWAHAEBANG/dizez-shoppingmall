import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecentlyViewed from "./components/RecentlyViewed";
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
        <RecentlyViewed />
        <BackToTop />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
