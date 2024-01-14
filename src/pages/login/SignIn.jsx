import { Icon } from "@iconify/react";
import { Button, Logo } from "../../ui/PresentationalComponents";
import Divider from "../../ui/PresentationalComponents/Divider";
import Inputs from "../../ui/PresentationalComponents/Inputs";
import { Form } from "../../ui/PresentationalComponents/Form";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { SignInForm } from "./components/SignInForm";
import { FbSignin } from "./components/FbSignin";
import { GooleSignin } from "./components/GooleSignin";

export const SignIn = () => {
  return (
    <main className=" h-screen flex items-center justify-center flex-col px-[8%] pb-[20px] pt-[50px] relative">
      <Logo size={160} />
      <FbSignin />
      <GooleSignin />
      <Divider text="OR" className="my-[50px]" />
      <SignInForm />
      <Footer />
    </main>
  );
};
