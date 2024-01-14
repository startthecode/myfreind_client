import React, { useEffect, useState } from "react";
import { Form } from "../../../ui/PresentationalComponents/Form";
import Inputs from "../../../ui/PresentationalComponents/Inputs";
import { Button } from "../../../ui/PresentationalComponents";

let peraClasses = {
  className: `text-[15px] text-primary_text_clr font-normal mb-2 px-4 text-center mb-8`,
};
let headingClasses = {
  className: `text-[18px] text-primary_text_clr font-medium mt-10 text-center mb-3`,
};

export const ValidateEmailForm = () => {
  let [value, setvalue] = useState({});
  let [enable, setEnable] = useState(false);
  let [changePassword, setpassword] = useState(true);

  useEffect(() => {
    if (value.email) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [value]);

  return (
    <div>
      <h1 {...headingClasses}> Trouble With Logging in?</h1>
      <p {...peraClasses}>
        Enter You email address, we will send you a otp to change you password.
      </p>
      <Form>
        <Inputs
          placeholder="Enter you existing account email address"
          onChange={(val) => setvalue({ ...value, email: val })}
        />
        <Button disabled={enable}>Send otp</Button>
      </Form>

    </div>
  );
};
