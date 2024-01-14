import "https://code.jquery.com/jquery-3.7.1.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import {
  cloneElement,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";

let StoryContext = createContext();

const StoryModel = ({ children }) => {
  let [story, setStory] = useState(false);
  let [currentStory, setCurrentStory] = useState(false);

  let fillStoryArray = setStory;
  let close = () => setStory(false);
  return (
    <StoryContext.Provider
      value={{ story, fillStoryArray, close, currentStory, setCurrentStory }}
    >
      {children}
    </StoryContext.Provider>
  );
};

function OpenStory({ children, storys, currentStory = 1 }) {
  let { fillStoryArray, setCurrentStory } = useContext(StoryContext);
  return cloneElement(children, {
    onClick: () => {
      fillStoryArray(storys);
      setCurrentStory(currentStory);
    },
  });
}

function Storys({ children }) {
  let { story, close, currentStory } = useContext(StoryContext);
  useEffect(() => {
    console.log("aa");
    if (story) {
      $(".storyPanel").owlCarousel({
        margin: 0,
        nav: false,
        dots: false,
        animateIn: true,
        loop: false,
        startPosition: currentStory,
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
  }, [story]);
  if (!story) return null;
  return (
    <div className="owl-carousel owl-theme !z-[101] storyPanel fixed top-0 left-0 h-screen w-full flex bg-white">
      {story?.map((val, index) => (
        <div className="item" key={index}>
          {cloneElement(children, {
            userstory: {
              storyTitle: val.HightlightedStory?.HightlightTitle || val.UserID,
              userID: val.UserID,
              createdAt:val.createdAt
            },
            closeHandle: close,
          })}
        </div>
      ))}
    </div>
  );
}

function SingleStory({ children, userid }) {
  let { story, close } = useContext(StoryContext);
  if (story)
    return (
      <div className="owl-carousel owl-theme !z-[101] storyPanel fixed top-0 left-0 h-screen w-full flex bg-white">
        {cloneElement(children, {
          userstory: {
            userID: userid,
            storys: story,
          },
          closeHandle: close,
        })}
      </div>
    );

  return null;
}

StoryModel.OpenStory = OpenStory;
StoryModel.Storys = Storys;
StoryModel.SingleStory = SingleStory;

export default StoryModel;
