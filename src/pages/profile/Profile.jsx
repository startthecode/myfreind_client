import { AddStory } from "./components/AddStory";
import { Row } from "../../ui/PresentationalComponents/Row";
import { EditProfile } from "./components/EditProfile";
import { Header } from "./components/header/Header";
import { ProfileNameBio } from "./components/ProfileNameBio";
import { ProfileStats } from "./components/ProfileStats";
import { ShareProfile } from "./components/ShareProfile";
import { StoryHighlights } from "./components/StoryHighlights";
import { Suggestions } from "./components/Suggestions";
import { UserFeeds } from "./components/UserFeeds";
import { ProfileProvider } from "./contextAPI/ProfileContext";
import SlideUpMenu from "../../ui/PresentationalComponents/SlideUpMenu";

let mainClasses = {
  className: "mb-[100px]",
};

export const Profile = () => {
  return (
    <ProfileProvider>
      <SlideUpMenu>
        <Header />
        <main {...mainClasses}>
          <Row vPosition="between" paddingX={true}>
            <AddStory />
            <ProfileStats />
          </Row>

          <ProfileNameBio />

          <Row vPosition="between" paddingX={true}>
            <EditProfile />
            <ShareProfile />
            <Suggestions />
          </Row>

          <StoryHighlights />
          <UserFeeds />
        </main>
      </SlideUpMenu>
    </ProfileProvider>
  );
};
