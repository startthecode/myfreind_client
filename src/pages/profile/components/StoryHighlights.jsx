import { Icon } from "@iconify/react";
import { ThumbnailCircle } from "../../../ui/PresentationalComponents";
import Img from "../../../ui/Img";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import StoryModel from "../../../ui/PresentationalComponents/StoryModel";
import { StoryCard } from "../../../components/storyCard/StoryCard";

import { Link } from "react-router-dom";
import { useGetStoryHightLight } from "../../useGetStoryHightLight";
import { ProfileContext } from "../contextAPI/ProfileContext";
import { useFileExtentionChecker } from "../../../hooks/useFileExtentionChecker";

let headingBlockClasses = {
  className: "px-[15px] mt-[24px] mb-[20px]",
};
let blockHeadingClasses = {
  className: "text-[16px] text-black font-medium leading-[20px]",
};
let blockSubHeadingClasses = {
  className: "text-[16px] text-black font-normal leading-[20px]",
};
let storyhighLigtBlockClasses = {
  className: "overflow-auto flex w-full no-scrollbar mb-[20px]",
};
let storyhighLigtClasses = {
  className: " basis-2/12 px-2 flex  flex-col items-center",
};
let addHightLightIconClasses = {
  className: "flex justify-center w-full items-center h-full p-4",
  icon: "ph:plus",
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

export const StoryHighlights = () => {
  let { UserID } = useContext(ProfileContext)?.profile_data;
  let { data, isFetching, isError, refetch } = useGetStoryHightLight(UserID);
  let fileChecker = useFileExtentionChecker;
  let storys = Object?.keys(data?.data || {})?.map((key) => {
    return data?.data[key][0];
  });

  useEffect(() => {
    if (!data) refetch();
    console.log("Refetching");
  }, [UserID]);


  if (isFetching) return <Loader />;
  return (
    <>
      <div {...headingBlockClasses}>
        <p {...blockHeadingClasses}>Story Highlights</p>
        <p {...blockSubHeadingClasses}>
          Keep your favourite stories on your profile
        </p>
      </div>

      <div {...storyhighLigtBlockClasses}>
        <Link
          to={`/new-post/story?highlight=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`}
          {...storyhighLigtClasses}
        >
          <ThumbnailCircle size="md">
            <Icon {...addHightLightIconClasses} />
          </ThumbnailCircle>
        </Link>

        <StoryModel>
          {storys.map(({ HightlightedStory, StoryContentURL }, index) => {
            return (
              <div {...storyhighLigtClasses} key={index}>
                <StoryModel.OpenStory storys={storys} currentStory={index}>
                  <ThumbnailCircle size="md">
                  {fileChecker(StoryContentURL || "") === "video" ? (
                      <video
                        {...hightLightVidClasses}
                        autoPlay
                        loop
                        muted={true}
                      >
                        <source
                          src={`${
                            import.meta.env.VITE_IMAGE_URL
                          }/${StoryContentURL}`}
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
            <StoryCard storytype="highlight" UserID={UserID} />
          </StoryModel.Storys>
        </StoryModel>
      </div>
    </>
  );
};
