import { createContext, useReducer } from "react";
import { PostHeader } from "./postcardComponent/layout/PostHeader";
import { PostBody } from "./postcardComponent/PostBody";
import { PostActions } from "./postcardComponent/postActions/PostActions";

import { PostLikedCount } from "./postcardComponent/PostLikedCount";
import { PostDescription } from "./postcardComponent/PostDescription";
import { PostFooter } from "./postcardComponent/layout/PostFooter";
import { PostCommentCount } from "./postcardComponent/PostCommentCount";

export let EachPostProvider = createContext();
export const PostCard = ({ post: currentPost }) => {
  function dispatchEvent(state, action) {
    switch (action.type) {
      case "updateLike":
        return { ...state, isLikedByUser: action.data };
      case "newComment":
        return {
          ...state,
          userNewComment: [...state.userNewComment, action.data],
        };

      case "removeAllComments":
        return {
          ...state,
          userNewComment: [],
        };
    }
  }
  let [post, setpost] = useReducer(dispatchEvent, {
    ...currentPost,
    isLikedByUser: undefined,
    userNewComment: [],
  });

  const parentDivFinalAttri = {
    className: "py-2 my-[20px]",
    id: post.PostID,
  };

  if (!post) return null;
  return (
    <EachPostProvider.Provider value={{ post, setpost }}>
      <div {...parentDivFinalAttri}>
        <PostHeader />
        <PostBody />
        <PostActions />
        <PostLikedCount />
        <PostDescription />
        <PostCommentCount />
        {/*  <PostAddComment id={PostID} />*/}
        <PostFooter />
      </div>
    </EachPostProvider.Provider>
  );
};
