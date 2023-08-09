import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ApartmentPage from "../pages/ApartmentPage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";

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
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/flat",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <h1>A propos</h1>
      }
    ]
  }
]);
