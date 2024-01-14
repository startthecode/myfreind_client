import { useContext } from "react";

import { EachPostProvider } from "../PostCard";
import { PostImage } from "./PostImage";
import { PostVideo } from "./PostVideo";

export const PostBody = () => {
  let { post } = useContext(EachPostProvider);

  return post?.PostType === "image" ? <PostImage /> : <PostVideo />;
};
