import { Icon } from "@iconify/react";
import { useState } from "react";
import Inputs from "../../ui/PresentationalComponents/Inputs";

export const ContentPreview = () => {
  const [imagePreview, setImagePreview] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  let parentDivClasses = {
    className:
      "h-full mt-8 max-h-[100%] bg-black mb-[40px] rounded-3xl shadow-2xl relative",
  };
  let headingClasses = {
    className:
      "text-white text-[20px] absolute top-[50%] translate-y-[-50%] flex flex-col left-0 w-full uppercase items-center",
  };
  let inputFinalAttribute = {
    onChange: (e) => handleImageChange(e),
    type: "file",
    classname: "h-full opacity-0 z-10 absolute left-0 top-0",
    placeholder: "title",
    name: "newpost",
  };

  let imgFinalAttribute = {
    className:
      "img-preview h-full w-full object-cover object-center rounded-2xl",
    src: imagePreview,
  };

  return (
    <div {...parentDivClasses}>
      <p {...headingClasses}>
        <Icon height={50} icon="material-symbols-light:upload" />
        {imagePreview ? "Change Image" : "Browse files"}
      </p>

      {imagePreview && <img {...imgFinalAttribute}></img>}
      <Inputs {...inputFinalAttribute} />
    </div>
  );
};
