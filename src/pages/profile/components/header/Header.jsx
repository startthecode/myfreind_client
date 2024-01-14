import { CommonNav } from "../../../../ui/LayoutComponents/CommonNav";

import { MyprofileSettingOptions } from "./MyprofileSettingOptions";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { MyprofileCreateOptions } from "./MyprofileCreateOptions";
import { LoggedInAccounts } from "./LoggedInAccounts";

export const Header = () => {
  let divFinalAttributes = {
    className: "flex flex-row justify-between max-w-[70px] w-full",
  };
  return (
    <header>
      <CommonNav leftArrow={true} column={2}>
        <LoggedInAccounts />
        <div {...divFinalAttributes}>
          <MyprofileCreateOptions />
          <MyprofileSettingOptions />
        </div>
      </CommonNav>
    </header>
  );
};
