import React from "react";
import loader from "../../images/insta-stories-logo-30fps-unscreen.gif";
export const Loader = ({ className }) => {
  return (
    <img
      src={loader}
      className={`!h-[110px] !w-[150px] block text-center mx-auto ${className}`}
    ></img>
  );
};
