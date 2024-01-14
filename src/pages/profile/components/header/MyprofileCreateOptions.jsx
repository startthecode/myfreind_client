import React from "react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { SlideUpMenuInnerRows } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";
import {
  myprofileCreateOptList,
  myprofileSettingOptList,
} from "../../../../constants/myProfile";
import { Icon } from "@iconify/react";

export const MyprofileCreateOptions = () => {
  let iconAttributes = {
    icon: "basil:add-outline",
    className: "text-black text-[30px]",
  };
  let peraAttributes = {
    className: "text-center text-white text-[16px]",
  };
  return (
    <>
      <SlideUpMenu.Open whichPopUp="MyprofileCreateOptions">
        <Icon {...iconAttributes} />
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName="MyprofileCreateOptions">
        <p {...peraAttributes}>Create</p>
        {myprofileCreateOptList.map(({ iconName, url, name }) => (
          <SlideUpMenuInnerRows
            key={name}
            url={url}
            name={name}
            iconName={iconName}
          />
        ))}
      </SlideUpMenu.PopUp>
    </>
  );
};
