import { AddStory } from "./AddStory";
import { Row } from "../../ui/PresentationalComponents/Row";
import { EditProfile } from "./components/EditProfile";
import { Header } from "./components/Header";
import { ProfileNameBio } from "./components/ProfileNameBio";
import { ProfileStats } from "./components/ProfileStats";
import { ShareProfile } from "./components/ShareProfile";
import { StoryHighlights } from "./StoryHighlights";
import { Suggestions } from "./components/Suggestions";
import { UserFeeds } from "./UserFeeds";
import { ProfileProvider } from "./contextAPI/ProfileContext";

let mainClasses = {
  className: "mb-[50px]",
};

export const Profile = () => {
  return (
    <ProfileProvider>
      <Header />
      <main {...mainClasses}>
        <Row vPosition="between" paddingX={true}>
          <AddStory />
          <ProfileStats />
        </Row>

        <ProfileNameBio
          name="Product/service"
          bio="We provide essential tools"
          urls="mediamodifier.com"
        />

        <Row vPosition="between" paddingX={true}>
          <EditProfile />
          <ShareProfile />
          <Suggestions />
        </Row>

        <StoryHighlights />
        <UserFeeds />
      </main>
    </ProfileProvider>
  );
};
