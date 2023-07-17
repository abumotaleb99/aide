import React from "react";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
