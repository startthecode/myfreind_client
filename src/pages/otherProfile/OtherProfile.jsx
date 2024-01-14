import { OtherProfileProvider } from "./contextAPI/OtherProfileProvider";
import SlideUpMenu from "../../ui/PresentationalComponents/SlideUpMenu";
import { Header } from "./components/Header/Header";
import { OtherProfileDpActions } from "./components/OtherProfileDpActions";
// import { ProfileStats } from "./components/ProfileStats";
import { Row } from "../../ui/PresentationalComponents/Row";
import { ProfileStats } from "./components/ProfileStats";
import { ProfileNameBio } from "./components/ProfileNameBio";
import { ProfileActions } from "./components/profileActions/ProfileActions";
import { MessageTheUser } from "./components/MessageTheUser";
import { Suggestions } from "./components/Suggestions";
import { AccountPrivacyDetector } from "./AccountPrivacyDetector";
import { InroNotification } from "./components/InroNotification";

let mainClasses = {
  className: "mb-[80px]",
};

export const OtherProfile = () => {
  return (
    <OtherProfileProvider>
      <SlideUpMenu>
        <Header />
        <main {...mainClasses}>
          <InroNotification />
          <Row vPosition="between" paddingX={true}>
            <OtherProfileDpActions />
            <ProfileStats />
          </Row>
          <ProfileNameBio />
          <AccountPrivacyDetector />
        </main>
      </SlideUpMenu>
    </OtherProfileProvider>
  );
};
