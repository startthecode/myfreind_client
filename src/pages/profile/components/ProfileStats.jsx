import React, { useContext } from "react";
import { ProfileStat } from "../../../ui/PresentationalComponents/ProfileStat";
import { Row } from "../../../ui/PresentationalComponents/Row";
import { ProfileContext } from "../contextAPI/ProfileContext";

export const ProfileStats = () => {
  let { TotalPosts, TotalFollowers, TotalFollowing } =
    useContext(ProfileContext)?.profile_data;

  return (
    <Row vPosition="between" className="px-[0] w-full ml-8">
      <ProfileStat number={TotalPosts || 0} title="Posts" />
      <ProfileStat number={TotalFollowers} title="Followers" />
      <ProfileStat number={TotalFollowing} title="Following" />
    </Row>
  );
};
