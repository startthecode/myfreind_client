import React from "react";
import { Button } from "../../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";

export const FbSignin = () => {
  return (
    <Button variation="secondary" size="lg" className={"mt-14"} disabled>
      <Icon icon="ri:facebook-fill" height={22} className="mr-2" />
      {/* Continue with facebook */}
     Disabled
    </Button>
  );
};

