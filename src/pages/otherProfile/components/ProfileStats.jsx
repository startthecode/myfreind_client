import React, { useContext } from "react";
import { ProfileStat } from "../../../ui/PresentationalComponents/ProfileStat";
import { Row } from "../../../ui/PresentationalComponents/Row";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";

export const ProfileStats = () => {
  let { TotalPosts, TotalFollowers, TotalFollowing } =
    useContext(OtherProfileContext)?.profile_data?.userProfile ?? {};

  return (
    <Row vPosition="between" className="px-[0] w-full ml-8">
      <ProfileStat number={TotalPosts} title="Posts" />
      <ProfileStat number={TotalFollowers} title="Followers" />
      <ProfileStat number={TotalFollowing} title="Following" />
    </Row>
  );
};
