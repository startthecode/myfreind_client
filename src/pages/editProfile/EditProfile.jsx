import { useState } from "react";
import { InfoEditFields } from "./InfoEditFields";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export const EditProfile = (...props) => {
  let Main = "main";
  let [formData, setFormData] = useState({
    folder_type: "displayPicture",
  });

  return (
    <>
      <Header formData={formData} />
      <Main>
        <InfoEditFields setFormData={setFormData} formData={formData} />
      </Main>
      <Footer />
    </>
  );
};
