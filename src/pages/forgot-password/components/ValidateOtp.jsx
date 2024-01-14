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

export const ValidateOtp = () => {
  let [value, setvalue] = useState({});
  let [enable, setEnable] = useState(false);
  let [changePassword, setpassword] = useState(true);

  useEffect(() => {
    if (value.otp) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [value]);

  return (
    <div>
      <h1 {...headingClasses}> Enter otp</h1>
      <p {...peraClasses}>
        Please enter the OTP that has been sent to your email address. Also,
        check your spam folder in case it landed there.
      </p>

      <Form>
        <Inputs
          placeholder="Enter otp"
          onChange={(val) => setvalue({ ...value, otp: val })}
        />
        <Button disabled={enable}>Submit</Button>
      </Form>
    </div>
  );
};
