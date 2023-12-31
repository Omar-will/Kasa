import React from "react";
import { createBrowserRouter , Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ApartmentPage from "../pages/ApartmentPage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import ErrorPageNotFound from "../pages/ErrorPageNotFound";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/flat/:id",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
      {
        path: "/*",
        element: <ErrorPageNotFound />,
      },
]);