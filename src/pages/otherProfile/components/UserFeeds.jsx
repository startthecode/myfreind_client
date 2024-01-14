import { fixedonscroll } from "../../../hooks/FixedElementTop";
import TabModel from "../../../ui/PresentationalComponents/TabModel";
import UserPosts from "./UserPosts";
import UserReels from "./UserReels";
import UserTags from "./UserTags";
import { User_latest_posts } from "./User_latest_posts";
import { User_reels } from "./User_reels";
import { ListViewProvider } from "./compoentent_contextsApi/ListViewContext";
// import { User_latest_posts } from "./User_latest_posts";
// import { User_reels } from "./User_reels";

export const UserFeeds = () => {
  let ref = fixedonscroll(10);
  let tabButtonClass = {
    className:
      "grid grid-cols-3 gap-[3px] items-center bg-white w-full py-[8px] tabsParent",
    ref: ref,
  };

  return (
    <>
      <ListViewProvider>
        <TabModel>
          <div {...tabButtonClass}>
            <TabModel.Open whichTab="latest_posts">
              <UserPosts.icon />
            </TabModel.Open>

            <TabModel.Open whichTab="user_reels">
              <UserReels.icon />
            </TabModel.Open>

            <TabModel.Open whichTab="tab3">
              <UserTags.icon />
            </TabModel.Open>
          </div>

          <TabModel.Tab tabName="latest_posts">
            <User_latest_posts />
          </TabModel.Tab>

          <TabModel.Tab tabName="user_reels">
            <User_reels />
          </TabModel.Tab>
        </TabModel>
      </ListViewProvider>
    </>
  );
};
