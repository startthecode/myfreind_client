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

export const ChangePasswordForm = () => {
  let [value, setvalue] = useState({});
  let [enable, setEnable] = useState(false);

  useEffect(() => {
    if (value.password && value.password_repeat) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [value]);

  return (
    <div>
      <h1 {...headingClasses}> Change Password</h1>
      <p {...peraClasses}>
      Recover your account by setting up a new password
      </p>
      <Form>
        <Inputs
          placeholder="New password"
          type="password"
          onChange={(val) => setvalue({ ...value, password: val })}
        />

        <Inputs
          placeholder="New password"
          type="password"
          onChange={(val) => setvalue({ ...value, password_repeat: val })}
        />
        <Button disabled={enable}>Send otp</Button>
      </Form>
    </div>
  );
};
