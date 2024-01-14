import { Footer } from "./components/layout/Footer";
import { SignUpForm } from "./components/SignUpForm";
import { Header } from "./components/layout/Header";

export const SignUp = () => {
  return (
    <main className=" h-screen flex items-center justify-center flex-col px-[8%] pb-[20px] pt-[50px] relative">
      <Header />
      <SignUpForm />
      <Footer />
    </main>
  );
};
