import { Icon } from "@iconify/react";
import React, { useContext, useEffect } from "react";
import { EachPostProvider } from "../../PostCard";
import { useDeleteComment } from "../../usePostAction";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";

const LikeComment = ({ commentID }) => {
  let { post } = useContext(EachPostProvider);
  let { isDeleted, deleteMyComment, isDeleting, isDeletingErr } =
    useDeleteComment(commentID);
  const likeIconFinalAttribute = {
    className: "text-[18px] mr-[10px]",
    color: "#ff000059",
    icon: "mdi:bin",
    onClick: handleDelete,
  };
  function handleDelete(e) {
    e.preventDefault();
    deleteMyComment({
      commentid: commentID,
      postid: post.PostID,
    });
  }
  // if (isDeleted)
  //   document.querySelector(`#comment_${commentID}`).style = "height: none";
  return (
    <div className="mt-10">
      {isDeleting ? (
        <Loader className="scale-50" />
      ) : (
        <Icon {...likeIconFinalAttribute} />
      )}
    </div>
  );
};

export default LikeComment;
