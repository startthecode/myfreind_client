import { useState } from "react";
// import { StoryCard } from "../../components/storyCard/StoryCard";
// import { ThumbnailCircle } from "../../ui/PresentationalComponents";
// import StoryModel from "../../ui/PresentationalComponents/StoryModel";
import { HomeHeader } from "./Components/Header/HomeHeader";
import { HomeFeeds } from "./Components/HomeFeeds";
import SlideUpMenu from "../../ui/PresentationalComponents/SlideUpMenu";
import { TemporaryStories } from "./Components/TemporaryStories";

let storyhighLigtBlockClasses = {
  className:
    "overflow-auto flex w-full no-scrollbar mb-[20px] px-[10px] border-b-[0.5px] border-slate-200",
};

let storyhighLigtClasses = {
  className: "px-2  pt-2 pb-4 flex  flex-col items-center",
};

let hightLightImgClasses = {
  className: "object-cover object-center h-full w-full",
};

export const Home = ({}) => {
  return (
    <SlideUpMenu>
      <HomeHeader />
      <TemporaryStories />
      <HomeFeeds />
    </SlideUpMenu>
  );
};
