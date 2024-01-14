import React, { useContext } from "react";
import { ThumbnailCircle } from "../../../ui/PresentationalComponents";
import Img from "../../../ui/Img";
import { Icon } from "@iconify/react";
import { ProfileContext } from "../contextAPI/ProfileContext";
import { Link } from "react-router-dom";
;
import { useSelector } from "react-redux";

let imgClasses = {
  className: "h-full w-full object-cover object-center",
};
let iconClasses = {
  className:
    "text-[22px] p-1 block rounded-full text-white bg-secondary_clr right-[5px] absolute bottom-[5px] shadow-md",
};

export const AddStory = ({ children, size = "xlg" }) => {
  let { UserID, userProfile } = useSelector(get_user_info).user_info;
  let { data, isLoading, isError, refetch } = useUserTemporaryStory(UserID);

  if (data?.data?.length > 0 && UserID)
    return (
      <div>
        {console.log(data.data)}
        <StoryModel>
          <StoryModel.OpenStory storys={data?.data}>
            <ThumbnailCircle size={size} variation="gradient">
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
    <Link to={"/new-post/story"} className="relative">
      <ThumbnailCircle size={size}>
        {children || (
          <Img
            {...imgClasses}
            imgURL={`${import.meta.env.VITE_IMAGE_URL}/${userProfile?.UserDP}`}
          />
        )}
      </ThumbnailCircle>
      <Icon {...iconClasses} icon="ic:twotone-plus" />
    </Link>
  );
};
