import React from "react";
import { Outlet } from "react-router-dom";


export const SelfLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
