import React from "react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { SlideUpMenuInnerRowsBTN } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";
import {
  useChangeAccountPrivacy,
  useGetAccountPrivacy,
} from "../../useChngGetAccountPrivacy";
import PopUp from "../../../../ui/PresentationalComponents/PopUp";

export const MyprofileSettingOptions = () => {
  let {
    AccountPrivacy,
    isLoading: privacyLoading,
    isError: privacyFail,
  } = useGetAccountPrivacy();

  let { changePrivacyStatus, isLoading, isError, isSuccess } =
    useChangeAccountPrivacy();
  let iconAttributes = {
    icon: "quill:hamburger",
    className: "text-black text-[30px]",
  };

  function handleChange(e) {
    console.log(e.target.checked);
    document.querySelector(".close-MyprofileSettingOptions").click();
    changePrivacyStatus({ privacyStatus: e.target.checked });
  }

  return (
    <>
      <SlideUpMenu.Open whichPopUp="MyprofileSettingOptions">
        <Icon {...iconAttributes} />
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName="MyprofileSettingOptions">
        {!privacyLoading && (
          <SlideUpMenuInnerRowsBTN
            onChange={handleChange}
            name={`${
              AccountPrivacy.data.AccountPrivacy
                ? "Make your account public"
                : "Make your account Private"
            }`}
            checked={AccountPrivacy.data.AccountPrivacy}
          />
        )}

        {/* {myprofileSettingOptList.map(({ iconName, url, name }) => (
          <SlideUpMenuInnerRows
            key={name}
            // url={url}
            name={name}
            iconName={iconName}
          />
        ))} */}
      </SlideUpMenu.PopUp>

      <SlideUpMenu.Close whichPopUp="MyprofileSettingOptions">
        <p className="close-MyprofileSettingOptions"></p>
      </SlideUpMenu.Close>

      {isSuccess && (
        <PopUp close heading={"successfully updated Account status"}></PopUp>
      )}
    </>
  );
};
