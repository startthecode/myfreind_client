import { useSelector } from "react-redux";
import { useStoryFromFollowedUser } from "../../../reactQuerys/useStoryFromFollowedUser";
import { get_user_info } from "../../../redux/store";
import { ThumbnailCircle } from "../../../ui/PresentationalComponents";
import StoryModel from "../../../ui/PresentationalComponents/StoryModel";
import { StoryCard } from "../../../components/storyCard/StoryCard";
import Img from "../../../ui/Img";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { useFileExtentionChecker } from "../../../hooks/useFileExtentionChecker";
import { AddStory } from "../AddStory";

let storyhighLigtBlockClasses = {
  className:
    "overflow-auto flex w-full no-scrollbar mb-[0px] mt-[0px] border-b-2 border-gray-100 pb-8 px-[10px]",
};
let storyhighLigtClasses = {
  className: " basis-2/12 px-2 flex  flex-col items-center",
};

let hightLightImgClasses = {
  className: "object-cover object-center h-full w-full",
};

let hightLightVidClasses = {
  className: "object-cover object-center h-full w-full",
};

let higthLightStoryIcon = {
  className:
    "text-[12px] text-black whitespace-nowrap text-center overflow-hidden w-[80px] overflow-hidden",
};

export const TemporaryStories = () => {
  let { UserID } = useSelector(get_user_info).user_info;
  let { stories, storiesLoading, storiesFetchFail } =
    useStoryFromFollowedUser();
  let storys = Object?.keys(stories?.data || {})?.map((key) => {
    return stories?.data[key][0];
  });
  let fileChecker = useFileExtentionChecker;
  let myStory = Object?.keys(stories?.data || {}).includes(`userID_${UserID}`);
  if (storiesLoading) return <Loader className=" !h-[65px] !w-[95px]" />;
  if (storiesFetchFail)
    return <h3 className="text-center text-[14px]">unable load story 😔</h3>;
  return (
    <div {...storyhighLigtBlockClasses}>
      {!myStory && <AddStory />}
      <StoryModel>
        {storys.map(({ HightlightedStory, StoryContentURL }, index) => {
          return (
            <div {...storyhighLigtClasses} key={index}>
              <StoryModel.OpenStory storys={storys} currentStory={index}>
                <ThumbnailCircle size="md" variation="gradient">
                  {fileChecker(StoryContentURL || "") === "video" ? (
                    <video {...hightLightVidClasses} autoPlay loop muted={true}>
                      <source
                        src={`${
                          import.meta.env.VITE_IMAGE_URL
                        }/${StoryContentURL}`}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <img
                      src={`${
                        import.meta.env.VITE_IMAGE_URL
                      }/${StoryContentURL}`}
                      {...hightLightImgClasses}
                    />
                  )}
                </ThumbnailCircle>
              </StoryModel.OpenStory>
              <p {...higthLightStoryIcon}>
                {HightlightedStory?.HightlightTitle}
              </p>
            </div>
          );
        })}
        <StoryModel.Storys>
          <StoryCard
            storytype="highlight"
            UserID={UserID}
            preloadedStory={stories?.data}
          />
        </StoryModel.Storys>
      </StoryModel>
    </div>
  );
};
