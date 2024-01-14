import { useContext } from "react";
import { FollowedUserActions } from "./FollowedUserActions";
import { OtherProfileContext } from "../../contextAPI/OtherProfileProvider";
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
