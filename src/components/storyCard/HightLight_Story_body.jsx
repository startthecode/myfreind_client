import { useEffect, useState } from "react";
import { Loader } from "../../ui/PresentationalComponents/Loader";
import { useGetStoryHightLight } from "../../pages/useGetStoryHightLight";
import { useFileExtentionChecker } from "../../hooks/useFileExtentionChecker";

let storyContent = {
  className: "h-screen w-full object-cover object-center",
};

export const HightLight_Story_body = ({
  userstory,
  UserID,
  preloadedStory,
}) => {
  const [error, setError] = useState(false);
  let { data, isFetching, isError, refetch } =
    useGetStoryHightLight(UserID) ?? {};

  let fileChecker = useFileExtentionChecker;

  useEffect(() => {
    if (!data) refetch();
    console.log("Refetching");
  }, [UserID]);

  function intializeStory() {
    $(".owl_storyCard").owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      dots: true,
      animateIn: true,
      // touchDrag: false,
      // mouseDrag: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  useEffect(() => {
    return () => {
      intializeStory();
    };
  }, [data?.data]);

  if (preloadedStory) {
    return (
      <div className="owl-carousel owl-theme h-full owl_storyCard">
        {preloadedStory[`userID_${userstory.storyTitle}`].map((val) => (
          <div className="item" key={val.StoryContentURL}>
            {fileChecker(val?.StoryContentURL || "") === "video" ? (
              <video
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  val?.StoryContentURL
                }`}
                {...storyContent}
                autoPlay
                loop
                muted={true}
              ></video>
            ) : (
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  val?.StoryContentURL
                }`}
                {...storyContent}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (data?.data[userstory.storyTitle]?.length > 0) {
    return (
      <div className="owl-carousel owl-theme h-full owl_storyCard">
        {data?.data[userstory.storyTitle].map((val) => (
          <div className="item" key={val.StoryContentURL}>
            {fileChecker(val?.StoryContentURL || "") === "video" ? (
              <video
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  val?.StoryContentURL
                }`}
                {...storyContent}
                autoPlay
                loop
                muted={true}
              ></video>
            ) : (
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  val?.StoryContentURL
                }`}
                {...storyContent}
              />
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return error || <Loader />;
  }
};
