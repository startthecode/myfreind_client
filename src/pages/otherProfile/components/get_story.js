import { story_hightlight_list, storys } from "../../services/story_api";

export let get_story_hightlight_list = async () => {
  let storyList = await story_hightlight_list();
  return storyList;
};

export let get_storys = async (condition) => {

  let story = await storys(condition);
  return story;
};
