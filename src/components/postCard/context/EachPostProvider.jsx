import { createContext, useState } from "react";

export const EachPostContext = ({ children }) => {
  let [postData, setPostData] = useState({
    post_url: Math.floor(Math.random(5) * 4),
  });

  return (
    <EachPostProvider.Provider value={postData}></EachPostProvider.Provider>
  );
};
