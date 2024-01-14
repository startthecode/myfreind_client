import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Inputs from "../../ui/PresentationalComponents/Inputs";
import { useFileExtentionChecker } from "../../hooks/useFileExtentionChecker";

export const ContentPreview = ({ postType, postToBeUpdated = false }) => {
  const [imagePreview, setImagePreview] = useState(false);
  const [contentType, setcontentType] = useState(false);
  let fileChecker = useFileExtentionChecker;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setcontentType(file.type.split("/")[0].toLowerCase());
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
    ...(postType && {}),
  };

  useEffect(() => {
    if (postToBeUpdated?.PostContentURL) {
      let filetype = fileChecker(postToBeUpdated?.PostContentURL || "");
      setcontentType(filetype);
      setImagePreview(
        postToBeUpdated?.PostContentURL
          ? `${import.meta.env.VITE_IMAGE_URL}${
              postToBeUpdated?.PostContentURL
            }`
          : false
      );
    }
  }, [postToBeUpdated]);

  return (
    <div {...parentDivClasses}>
      <p {...headingClasses}>
        <Icon height={50} icon="material-symbols-light:upload" />
        {imagePreview ? "Change Image" : "Browse files"}
      </p>

      {imagePreview &&
        (contentType === "video" ? (
          <video {...imgFinalAttribute} autoPlay loop muted={true}></video>
        ) : (
          <img {...imgFinalAttribute}></img>
        ))}
      <Inputs {...inputFinalAttribute} />
    </div>
  );
};
