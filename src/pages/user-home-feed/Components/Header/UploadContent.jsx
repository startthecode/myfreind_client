import { Icon } from "@iconify/react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { myprofileCreateOptList } from "../../../../constants/myProfile";
import { SlideUpMenuInnerRows } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";

let iconAttributes = {
  icon: "basil:add-outline",
  className: "text-black text-[30px] mr-3",
};
export const UploadContent = () => {
  let iconAttributes = {
    icon: "basil:add-outline",
    className: "text-black text-[33px] mr-3",
  };
  let peraAttributes = {
    className: "text-center text-white text-[16px]",
  };
  return (
    <>
      <SlideUpMenu.Open whichPopUp="homePostCreateOptions">
        <Icon {...iconAttributes} />
      </SlideUpMenu.Open>
      <SlideUpMenu.PopUp popUpName="homePostCreateOptions">
        <p {...peraAttributes}>Create</p>
        {myprofileCreateOptList.map(({ iconName, url, name }) => (
          <SlideUpMenuInnerRows
            key={name}
            url={`${url}`}
            name={name}
            iconName={iconName}
          />
        ))}
      </SlideUpMenu.PopUp>
    </>
  );
};
