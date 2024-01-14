import { useContext } from "react";
import { CommonNav } from "../../../../ui/LayoutComponents/CommonNav";

import { OtherSettingOptions } from "./OtherSettingOptions";
import { OtherprofileNotificationOtions } from "./OtherprofileNotificationOtions";
import { OtherProfileContext } from "../../contextAPI/OtherProfileProvider";

export const Header = () => {
  let { UserName, isUsersFriend } =
    useContext(OtherProfileContext)?.profile_data ?? {};
  let divFinalAttributes = {
    className: "flex flex-row justify-end max-w-[50px] w-full",
  };
  return (
    <header>
      <CommonNav leftArrow={true} column={2}>
        <p className="text-[16px] font-medium mx-auto">{UserName || ""}</p>
        <div {...divFinalAttributes}>
          {isUsersFriend && <OtherprofileNotificationOtions />}
          <OtherSettingOptions />
        </div>
      </CommonNav>
    </header>
  );
};
