import { AddToCloseFreind } from "./AddToCloseFreind";
import { MuteUserUploads } from "./MuteUserUploads";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { Button } from "../../../../ui/PresentationalComponents";
import { useContext } from "react";
import { OtherProfileContext } from "../../contextAPI/OtherProfileProvider";
import { useUnFollowUser } from "../../useFollowUnfollowUser";
import { Icon } from "@iconify/react";

let peraAttributes = {
  className: "text-center text-white text-[16px]",
};

export const FollowedUserActions = () => {
  let { profile_data, update_data } = useContext(OtherProfileContext) ?? {};
  let { unFollowTheUser, isLoading, isError, succefullyUnFollow } =
    useUnFollowUser();
  function handleClick(e) {
    unFollowTheUser({ followingid: profile_data?.UserID });
    update_data({
      ...profile_data,
      isUsersFriend: false,
      isAccessible: !profile_data?.AccountPrivacy,
    });
  }

  return (
    <>
      <SlideUpMenu.Open whichPopUp="profileActions2">
        <div className="basis-5/12 px-1">
          <Button
            variation="secondary"
            size="md"
            className={"flex items-center"}
          >
            Following
            <Icon icon="ph:caret-down-light" className="ml-2 text-[18px]" />
          </Button>
        </div>
      </SlideUpMenu.Open>
      <SlideUpMenu.PopUp popUpName="profileActions2">
        <p {...peraAttributes}>{profile_data?.UserName || ""}</p>
        <AddToCloseFreind />
        {/* <AddToFavourite /> */}
        <MuteUserUploads />
        {/* <RestrictUser /> */}

        <Button
          variation="secondary"
          size="md"
          className={"flex items-center !bg-red-600 max-w-[90%] mx-auto mt-5"}
          onClick={handleClick}
        >
          Unfolllow
        </Button>
      </SlideUpMenu.PopUp>
    </>
  );
};
