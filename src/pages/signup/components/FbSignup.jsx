import React from "react";
import { Button } from "../../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";

export const FbSignup = () => {
  return (
    <Button variation="secondary" size="lg" className={"mt-8"} disabled>
      <Icon icon="ri:facebook-fill" height={22} className="mr-2" />
      {/* <a href={`${import.meta.env.VITE_API_BASE_URL}signup/facebook`}>Log in with facebook</a> */}
      Disabled
    </Button>
  );
};
