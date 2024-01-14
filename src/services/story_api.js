import axios from "axios";

export let getStoryHighlights = async (userid = false) => {
  try {
    let gettingStories = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}story/storyhighlight/all/${
        userid.queryKey[1]
      }`,
      withCredentials: true,
    });
    return gettingStories;
  } catch (err) {
    throw err;
  }
};

export let userTemporaryStory = async (returnValue) => {
  try {
    let [, userid] = returnValue.queryKey;
    let gettingStories = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}story/user/temporary`,
      withCredentials: true,
      params: { userid: userid },
    });
    return gettingStories;
  } catch (err) {
    return err.message;
  }
};

export let storyFromFollowedUser = async () => {
  try {
    let gettingStories = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}story/from-followed-user`,
      withCredentials: true,
    });
    return gettingStories;
  } catch (err) {
    return err.message;
  }
};
