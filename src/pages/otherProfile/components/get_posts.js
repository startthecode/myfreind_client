import { user_latest_post, user_reels } from "../../services/post_api";

export let getposts = async () => {
  let posts = await user_latest_post();
  return posts;
};


export let getreels = async () => {
    let reels = await user_reels();
    return reels;
  };
  