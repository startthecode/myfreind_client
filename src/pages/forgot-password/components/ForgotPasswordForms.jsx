import { useState } from "react";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { ValidateEmailForm } from "./ValidateEmailForm";
import { ValidateOtp } from "./ValidateOtp";

export const ForgotPasswordForms = () => {
  let [Password, setpassword] = useState(false);
  let [otp, setOtp] = useState(true);

  if (Password) return <ValidateEmailForm />;
  if (otp) return <ValidateOtp />;

  return <ChangePasswordForm />;
};
