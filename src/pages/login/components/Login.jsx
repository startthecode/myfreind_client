import { Icon } from "@iconify/react";
import { Button, Logo } from "../../ui/PresentationalComponents";
import Divider from "../../ui/PresentationalComponents/Divider";
import Inputs from "../../ui/PresentationalComponents/Inputs";
import { Form } from "../../ui/PresentationalComponents/Form";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { LoginForm } from "./components/LoginForm";
import { FbLogin } from "./components/FbLOgin";

export const Login = () => {
  return (
    <main className=" h-screen flex items-center justify-center flex-col px-[8%] relative">
      <Logo size={160} />
      <FbLogin />
      <Divider text="OR" className="my-[50px]" />
      <LoginForm />
      <Footer />
    </main>
  );
};
