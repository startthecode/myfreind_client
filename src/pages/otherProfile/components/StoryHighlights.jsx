import { Link } from "react-router-dom";
import { useGetStoryHightLight } from "../../useGetStoryHightLight";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";
import { useContext, useEffect, useId, useState } from "react";
import { ThumbnailCircle } from "../../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";
import StoryModel from "../../../ui/PresentationalComponents/StoryModel";
import Img from "../../../ui/Img";
import { StoryCard } from "../../../components/storyCard/StoryCard";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { useFileExtentionChecker } from "../../../hooks/useFileExtentionChecker";

let storyhighLigtBlockClasses = {
  className: "overflow-auto flex w-full no-scrollbar mb-[20px] mt-[20px]",
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

export const StoryHighlights = () => {
  let { UserID } = useContext(OtherProfileContext)?.profile_data ?? {};
  let { data, isFetching, isError, refetch } = useGetStoryHightLight(UserID);
  let fileChecker = useFileExtentionChecker;
  let storys = Object?.keys(data?.data || {})?.map((key) => {
    return data?.data[key][0];
  });

  if (isFetching) return <Loader />;
  return (
    <>
      <div {...storyhighLigtBlockClasses}>
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
