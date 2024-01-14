import { HightLight_Story_body } from "./HightLight_Story_body";
import { Temporary_story } from "./Temporary_story";
import { Story_footer } from "./Story_footertory_footer";
import { Story_header } from "./Story_header";

let classes = {
  className: "bg-white h-screen w-full",
};
export const StoryCard = ({
  userstory = false,
  closeHandle,
  storytype,
  UserID,
  preloadedStory,
}) => {
  return (
    <div {...classes}>
      <div className="bg-gradient-to-t to-90% from-[#000000d7] to-[#00000000] h-[100px] absolute w-full z-[2] bottom-0 left-0"></div>
      <Story_header
        closeHandle={closeHandle}
        createdAt={userstory?.createdAt}
        userID_of_Story_Uploader={userstory?.userID}
      />

      {storytype === "highlight" ? (
        <HightLight_Story_body
          userstory={userstory}
          UserID={UserID}
          preloadedStory={preloadedStory}
        />
      ) : (
        <Temporary_story storys={userstory.storys} />
      )}

      <Story_footer />
    </div>
  );
};
