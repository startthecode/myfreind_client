import React from "react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { Icon } from "@iconify/react";
import { SlideUpMenuInnerRowsBTN } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";
import { ToggleButton } from "../../../../ui/PresentationalComponents/toggleButton";
import { otherprofileSettingOptList } from "../../../../constants/otherProfile";

export const OtherprofileNotificationOtions = () => {
  let iconAttributes = {
    icon: "ph:bell-light",
    className: "text-black",
    height: 28,
  };
  let peraAttributes = {
    className: "text-center text-white text-[16px]",
  };
  return (
    <>
      <SlideUpMenu.Open whichPopUp="OtherprofileNotificationOtions">
        <Icon {...iconAttributes} />
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName="OtherprofileNotificationOtions">
        <>
          <p {...peraAttributes}>Notifications</p>

          <SlideUpMenuInnerRowsBTN key={"Posts"} name={"Posts"} />
          <SlideUpMenuInnerRowsBTN key={"Stories"} name={"Stories"} />
          <SlideUpMenuInnerRowsBTN key={"Reels"} name={"Reels"} />
          <SlideUpMenuInnerRowsBTN key={"Live videos"} name={"Live videos"} />
        </>
      </SlideUpMenu.PopUp>
    </>
  );
};
