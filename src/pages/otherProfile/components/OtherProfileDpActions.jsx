import React, { useContext, useEffect } from "react";
import { ThumbnailCircle } from "../../../ui/PresentationalComponents";

import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";
import { fallbackImage } from "../../../constants/otherProfile";
import { useUserTemporaryStory } from "../../useGetTemporaryStory";
import StoryModel from "../../../ui/PresentationalComponents/StoryModel";
import Img from "../../../ui/Img";
import { StoryCard } from "../../../components/storyCard/StoryCard";

let imgClasses = {
  className: "h-full w-full object-cover object-center",
};

export const OtherProfileDpActions = ({ children, size = "xlg" }) => {
  let { userProfile, UserID,UserName, isAccessible } =
    useContext(OtherProfileContext)?.profile_data ?? {};
  let {
    data: tempStory,
    isLoading,
    isError,
    refetch,
  } = useUserTemporaryStory(UserID, true);

  useEffect(() => {
    if (isAccessible) refetch();
    console.log("Refetching");
  }, [isAccessible]);

  if (tempStory?.data?.length > 0 && isAccessible)
    return (
      <div>
        <StoryModel>
          <StoryModel.OpenStory storys={tempStory?.data}>
            <ThumbnailCircle size={size} variation="gradient" noimage={userProfile?.UserDP ? false : UserName}>
              <Img
                {...imgClasses}
                imgURL={`${import.meta.env.VITE_IMAGE_URL}/${
                  userProfile?.UserDP
                }`}
              />
            </ThumbnailCircle>
          </StoryModel.OpenStory>
          <StoryModel.SingleStory userid={UserID}>
            <StoryCard storytype="temporary" />
          </StoryModel.SingleStory>
        </StoryModel>
      </div>
    );

  return (
    <div className="relative">
      <ThumbnailCircle size={size} noimage={userProfile?.UserDP ? false : UserName}>
        {
          <img
            className=" h-full w-full object-cover object-center"
            src={`${import.meta.env.VITE_IMAGE_URL}/${
              userProfile?.UserDP || fallbackImage
            }`}
          />
        }
      </ThumbnailCircle>
    </div>
  );
};
