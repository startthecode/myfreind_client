import { useContext } from "react";
import { Button } from "../../../../ui/PresentationalComponents";
import { useFollowUser } from "../../useFollowUnfollowUser";
import { OtherProfileContext } from "../../contextAPI/OtherProfileProvider";

export const FollowUser = () => {
  let { profile_data, update_data } = useContext(OtherProfileContext) ?? {};
  let { followTheUser, isLoading, isError, succefullyFollow } = useFollowUser();
  function handleClick(e) {
    followTheUser({ followingid: profile_data?.UserID });
    update_data({ ...profile_data, isUsersFriend: true });
    console.log(profile_data?.UserID);
  }

  return (
    <div className="basis-5/12 px-1">
      <Button variation="secondary" size="md" onClick={handleClick}>
        Follow
      </Button>
    </div>
  );
};
