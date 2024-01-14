import React, { useEffect, useState } from "react";
import { Button } from "../../../ui/PresentationalComponents";
import { Form } from "../../../ui/PresentationalComponents/Form";
import Inputs from "../../../ui/PresentationalComponents/Inputs";
import { useDispatch } from "react-redux";
import { useProfileUpdate } from "../../useProfileUpdate";
import PopUp from "../../../ui/PresentationalComponents/PopUp";
import { update_user_created } from "../../../redux/user_Info_Slice";
import { useFormDataObj } from "../../../hooks/useFormDataObj";
import { Loader } from "../../../ui/PresentationalComponents/Loader";

export const AdditionalDtlForm = () => {
  const [value, setvalue] = useState({});
  const [enable, setEnable] = useState(false);
  const dispatch = useDispatch();

  const { updateUser, isLoading, error, data } = useProfileUpdate();

  const skipClasses = {
    className:
      "text-secondary_clr text-end w-full font-medium text-[16px] text-tertiary_text_clr font-normal mt-7",
    onClick: () => dispatch(update_user_created(true)),
  };

  const formFinalAttributes = {
    className: "w-full mt-10",
    onSubmit: (e) => submitHandler(e),
  };

  useEffect(() => {
    if (value.file && value.bio && value.dob) {
      setEnable(false);
    } else {
      setEnable(true);
    }

    if (data) dispatch(update_user_created(true));
  }, [value, data]);

  const submitHandler = (e) => {
    e.preventDefault();
    let dateTobeUpdate = useFormDataObj(e.target,{folder_type:"displayPicture"});
    updateUser(dateTobeUpdate);
  };

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <PopUp heading={`${error} ☹️`} subheading="try again after some time ⌛">
        <PopUp.OtherLinks text={"go to home"} link={"/"} replace={true} />
      </PopUp>
    );
  }

  return (
    <>
      <Form {...formFinalAttributes}>
        <Inputs
          type="file"
          name="userprofile"
          onChange={(val) => setvalue({ ...value, file: val })}
        />
        <Inputs
          placeholder="Bio"
          name="bio"
          onChange={(val) => setvalue({ ...value, bio: val })}
        />
        <Inputs
          placeholder="Date of Birth"
          type="text"
          name="dob"
          onChange={(val) => setvalue({ ...value, dob: val })}
        />
        <Button disabled={enable} type="submit">
          Sign Up
        </Button>
      </Form>

      <p {...skipClasses}> Skip For Now</p>
    </>
  );
};
