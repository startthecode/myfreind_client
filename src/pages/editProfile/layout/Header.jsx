import { CommonNav } from "../../../ui/LayoutComponents/CommonNav";
import { useProfileUpdate } from "../../useProfileUpdate";
import { useEffect, useState } from "react";
import PopUp from "../../../ui/PresentationalComponents/PopUp";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { Navigate } from "react-router-dom";

export const Header = ({ formData }) => {
  let headingFinalAttributes = {
    className: "text-black text-[20px] font-medium flex items-center",
  };
  let [isError, setErros] = useState(false);

  let { updateUser, isLoading, error, data } = useProfileUpdate();

  function handleSubmit() {
    let isAnythingUpdated = Object.keys(formData).length > 1;
    if (!isAnythingUpdated) setErros("Nothing is updated");
    if (isAnythingUpdated) updateUser(formData);
  }

  if (data) return <Navigate to={"/my-profile"} />;

  return (
    <CommonNav leftArrow={true} column={3}>
      <h1 {...headingFinalAttributes}> Edit Profile</h1>
      <p
        onClick={handleSubmit}
        className=" text-secondary_clr text-[16px] font-medium"
      >
        {isLoading ? (
          <Loader className="!h-[22px] !w-[30px] scale-[1.2]" />
        ) : (
          "Done"
        )}
      </p>
      {(isError || error) && (
        <PopUp heading={error || isError}>
          <PopUp.OtherButtons
            text={"Try again"}
            onClick={() => setErros(false)}
          />
        </PopUp>
      )}
    </CommonNav>
  );
};
