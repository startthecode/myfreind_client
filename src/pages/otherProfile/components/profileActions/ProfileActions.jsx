import { useContext, useState } from "react";
import { UnfollowUser } from "./UnfollowUser";
import { FollowedUserActions } from "./followedUserActions";
import { OtherProfileContext } from "../../contextAPI/OtherProfileProvider";
import { Button } from "../../../../ui/PresentationalComponents";
import { FollowUser } from "./FollowUser";

export const ProfileActions = () => {
  let { UserID, isUsersFriend } =
    useContext(OtherProfileContext)?.profile_data ?? {};

  if (!isUsersFriend) return <FollowUser />;

  return (
    <>
      {/* <UnfollowUser /> */}
      <FollowedUserActions />
    </>
  );
};
