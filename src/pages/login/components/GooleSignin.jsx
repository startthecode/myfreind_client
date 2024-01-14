import React from "react";
import { Button } from "../../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";
import axios from "axios";
import { async } from "regenerator-runtime";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import PopUp from "../../../ui/PresentationalComponents/PopUp";

export const GooleSignin = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const error = queryParams.get("error");
  const link =
    error === "Email already exists"
      ? { link: "/signin", text: "signin" }
      : {
          link: `${
            import.meta.env.VITE_API_BASE_URL
          }signin/google?googleAuthFor=signin`,
          text: "retry",
        };

  return (
    <>
      {error && (
        <PopUp close heading={error}>
          <PopUp.OtherLinks {...link}></PopUp.OtherLinks>
        </PopUp>
      )}
      <Button variation="primary" size="lg" className={"mt-5"}>
        <Icon icon="mdi:google" height={22} className="mr-2" />
        <a
          href={`${
            import.meta.env.VITE_API_BASE_URL
          }signin/google?googleAuthFor=signin`}
        >
          Continue with Google
        </a>
      </Button>
    </>
  );
};
