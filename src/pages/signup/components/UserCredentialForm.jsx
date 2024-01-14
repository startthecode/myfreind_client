import { Link } from "react-router-dom";
import Inputs from "../../../ui/PresentationalComponents/Inputs";
import { Button } from "../../../ui/PresentationalComponents";
import { useEffect, useState } from "react";
import { Form } from "../../../ui/PresentationalComponents/Form";
import { FbSignup } from "./FbSignup";
import Divider from "../../../ui/PresentationalComponents/Divider";
import { async } from "regenerator-runtime";
import axios from "axios";
import { useDispatch } from "react-redux";
import { update_user_creating } from "../../../redux/user_Info_Slice";
import { GooleSignup } from "./GooleSignup";

let createUserFinalAttributes = {
  className: `text-secondary_clr font-medium`,
  to: "/signin",
};

let peraClasses = {
  className: `text-[16px] text-tertiary_text_clr font-normal mt-10`,
};

export const UserCredentialForm = ({ createuser }) => {
  let [value, setvalue] = useState({});
  let [enable, setEnable] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    if (value.username && value.password && value.name && value.email) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [value]);

  async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = { form_type: "signup" };

    Array.from(formData.entries()).forEach(([key, value]) => {
      data[key] = value;
    });
    createuser(data);
  }

  return (
    <>
      <FbSignup />
      <GooleSignup />
      <Divider text="OR" className="my-[25px]" />
      <Form onSubmit={(e) => submitHandler(e)}>
        
        <Inputs
          placeholder="Email must be correct"
          onChange={(val) => setvalue({ ...value, email: val })}
          name="email"
        />
        <Inputs
          placeholder="Username"
          name="username"
          onChange={(val) => setvalue({ ...value, username: val })}
        />
        <Inputs
          placeholder="Full name"
          name="fullname"
          onChange={(val) => setvalue({ ...value, name: val })}
        />

        <Inputs
          placeholder="password"
          name="password"
          type="password"
          onChange={(val) => setvalue({ ...value, password: val })}
        />
        <Button disabled={enable} type="submit">
          Sign Up
        </Button>
      </Form>

      <p {...peraClasses}>
        Have an account?
        <Link {...createUserFinalAttributes}> log in</Link>
      </p>
    </>
  );
};
