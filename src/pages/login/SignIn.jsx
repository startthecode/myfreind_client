import { Logo } from "../../ui/PresentationalComponents";
import Divider from "../../ui/PresentationalComponents/Divider";
import { Footer } from "./components/layout/Footer";
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
