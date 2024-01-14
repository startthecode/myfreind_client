import React, { useContext } from "react";
import { OtherProfileContext } from "./contextAPI/OtherProfileProvider";
import { ProfileActions } from "./components/profileActions/ProfileActions";
import { MessageTheUser } from "./components/MessageTheUser";
import { Suggestions } from "./components/Suggestions";
import { Row } from "../../ui/PresentationalComponents/Row";
import { RequestUnrequestUser } from "./components/profileActions/RequestUnrequestUser";
import { StoryHighlights } from "./components/StoryHighlights";
import { UserFeeds } from "./components/UserFeeds";
import { Icon } from "@iconify/react";

export const AccountPrivacyDetector = () => {
  let { isAccessible, isUsersFriend } =
    useContext(OtherProfileContext)?.profile_data ?? {};

  if (!isAccessible)
    return (
      <>
        <RequestUnrequestUser />
        <div className="mt-[80px] text-center">
          <Icon
            className="mx-auto mb-4"
            icon="pepicons-pencil:lock-closed-circle"
            height={80}
          />
          <h3 className="text-[22px] text-black font-medium">
            This account is private
          </h3>
          <p className="text-[15px] text-black mt-2">
            Follow the account to see their <br /> reels and posts
          </p>
        </div>
      </>
    );

  return (
    <>
      <Row vPosition="between" paddingX={true}>
        <ProfileActions />
        <MessageTheUser />
        <Suggestions />
      </Row>
      <StoryHighlights />
      <UserFeeds />
    </>
  );
};
