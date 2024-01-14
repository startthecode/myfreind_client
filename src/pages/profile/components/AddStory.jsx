import { ThumbnailCircle } from "../../../ui/PresentationalComponents";
import Img from "../../../ui/Img";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import StoryModel from "../../../ui/PresentationalComponents/StoryModel";
import { StoryCard } from "../../../components/storyCard/StoryCard";
import { useUserTemporaryStory } from "../../useGetTemporaryStory";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../redux/store";
import { Loader } from "../../../ui/PresentationalComponents/Loader";

let imgClasses = {
  className: "h-full w-full object-cover object-center",
};
let iconClasses = {
  className:
    "text-[22px] p-1 block rounded-full text-white bg-secondary_clr right-[5px] absolute bottom-[5px] shadow-md",
};

export const AddStory = ({ children, size = "xlg" }) => {
  let { UserID, UserName, UserDP } = useSelector(get_user_info).user_info;
  let { data, isLoading, isError, refetch } = useUserTemporaryStory(UserID);

  if (isLoading) return <Loader className="scale-80 -ml-10" />;

  if (data?.data?.length > 0 && UserID)
    return (
      <div>
        <StoryModel>
          <StoryModel.OpenStory storys={data?.data}>
            <ThumbnailCircle
              size={size}
              variation="gradient"
              noimage={UserDP ? false : UserName}
            >
              <Img
                {...imgClasses}
                imgURL={`${import.meta.env.VITE_IMAGE_URL}/${UserDP}`}
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
      <ThumbnailCircle noimage={UserDP ? false : UserName} size={size}>
        {children || (
          <Img
            {...imgClasses}
            imgURL={`${import.meta.env.VITE_IMAGE_URL}/${UserDP}`}
          />
        )}
      </ThumbnailCircle>
      <Icon {...iconClasses} icon="ic:twotone-plus" />
    </Link>
  );
};
