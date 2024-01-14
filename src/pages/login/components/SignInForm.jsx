import Inputs from "../../../ui/PresentationalComponents/Inputs";
import { Button } from "../../../ui/PresentationalComponents";
import { useEffect, useState } from "react";
import { Form } from "../../../ui/PresentationalComponents/Form";
import { useSignIn } from "../useSignIn";
import { useFormDataObj } from "../../../hooks/useFormDataObj";
import PopUp from "../../../ui/PresentationalComponents/PopUp";
import { useDispatch } from "react-redux";
import { update_user_created } from "../../../redux/user_Info_Slice";

export const SignInForm = () => {
  let [value, setvalue] = useState({});
  let [enable, setEnable] = useState(false);
  let { verifyCredentils, isLoading, error, data } = useSignIn();
  let dispatch = useDispatch();
  let forgotPassFinalAttributes = {
    className: `text-secondary_clr font-medium text-[13px] text-end w-full block -mt-5 mb-10 max-w-max ml-auto `,
    to: "/forgot",
  };

  useEffect(() => {
    if (value.username && value.password) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [value]);

  useEffect(() => {
    if (data) dispatch(update_user_created(true));
  }, [data, error]);

  function handleSubmit(e) {
    e.preventDefault();
    let credentials = useFormDataObj(e.target, { form_type: "signin" });
    verifyCredentils(credentials);
  }

  // if (isLoading) return <Loader />;
  return (
    <>
      {error && <PopUp heading={error} close />}

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Inputs
          placeholder="username"
          name="username"
          onChange={(val) => setvalue({ ...value, username: val })}
        />
        <Inputs
          placeholder="password"
          name="password"
          onChange={(val) => setvalue({ ...value, password: val })}
        />
        {/* <Link {...forgotPassFinalAttributes}>forgot password?</Link> */}
        <Button disabled={enable}>Log In</Button>
      </Form>
    </>
  );
};
