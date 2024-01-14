import React, { useEffect, useState } from "react";
import { AdditionalDtlForm } from "./AdditionalDtlForm";
import { UserCredentialForm } from "./UserCredentialForm";
import { useSignup } from "../useSignup";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import PopUp from "../../../ui/PresentationalComponents/PopUp";

export const SignUpForm = () => {
  let { createuser, userIsCreating, userIsCreated, isError, error } =
    useSignup();
  let [showForm, setShowForm] = useState(true);

  useEffect(() => {
    if (isError) setShowForm(false);
  }, [isError]);

  if (userIsCreating) return <Loader />;
  if (userIsCreated) return <AdditionalDtlForm />;
  if (!showForm && isError && !error)
    return (
      <PopUp
        heading={"Something went wrong"}
        subheading={"try again after some time"}
      >
        <PopUp.OtherButtons
          text={"Try again"}
          onClick={() => setShowForm(true)}
        />
      </PopUp>
    );
  if (!showForm && isError)
    return (
      <PopUp heading={error}>
        <PopUp.OtherButtons
          text={"Try again"}
          onClick={() => setShowForm(true)}
        />
        <PopUp.OtherLinks text={"Go to login"} link={"/"} />
      </PopUp>
    );

  return <UserCredentialForm createuser={createuser} />;
};
