import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ForgotPasswordForms } from "./components/ForgotPasswordForms";

export const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-between h-screen px-[8%] w-full">
      <div>
        <Header />
        <ForgotPasswordForms />
      </div>
      <Footer />
    </div>
  );
};
