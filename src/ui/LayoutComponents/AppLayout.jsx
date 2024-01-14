import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";


const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
