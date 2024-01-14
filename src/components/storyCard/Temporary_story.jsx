import { useEffect } from "react";
import { Loader } from "../../ui/PresentationalComponents/Loader";
import { useFileExtentionChecker } from "../../hooks/useFileExtentionChecker";

export const Temporary_story = ({ storys }) => {
  let fileChecker = useFileExtentionChecker;
  
  let storyContent = {
    className:"h-screen w-full object-cover"
  }
  
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
  }, [storys]);
  if (storys?.length > 0) {
    return (
      <div className="owl-carousel owl-theme h-full owl_storyCard">
        {storys.map((val) => (
          <div className="item" key={val?.StoryContentURL}>
            {fileChecker(val?.StoryContentURL || "") == "video" ? (
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
    return <Loader />;
  }
};
