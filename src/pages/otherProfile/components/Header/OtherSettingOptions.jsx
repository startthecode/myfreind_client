import React from "react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import {
  SlideUpMenuInnerRows,
  SlideUpMenuInnerRowsBTN,
} from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";
import { Icon } from "@iconify/react";
import { otherprofileSettingOptList } from "../../../../constants/otherProfile";

export const OtherSettingOptions = () => {
  let peraAttributes = {
    className: "text-center text-white text-[16px]",
  };
  let iconAttributes = {
    icon: "ph:dots-three-bold",
    className: "text-black text-[30px]",
  };
  return (
    <>
      <SlideUpMenu.Open whichPopUp="OtherSettingOptions">
        <Icon {...iconAttributes} />
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName="OtherSettingOptions">
        {/* {otherprofileSettingOptList.map(({ iconName, url, name }) => (
          <SlideUpMenuInnerRows
            key={name}
            url={url}
            name={name}
            iconName={iconName}
            className={"justify-center"}
          />
        ))} */}
        <p {...peraAttributes}>Actions</p>
        <SlideUpMenuInnerRowsBTN name={"Block"} />
      </SlideUpMenu.PopUp>
    </>
  );
};
