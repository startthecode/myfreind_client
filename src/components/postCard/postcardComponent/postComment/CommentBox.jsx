import { useContext, useState } from "react";
import useDateFormate from "../../../../hooks/useDateFormate";

import { ThumbnailCircle } from "../../../../ui/PresentationalComponents";
import LikeComment from "./LikeComment";
import { get_user_info } from "../../../../redux/store";
import { Link } from "react-router-dom";

export const CommentBox = ({
  postComment,
  isUser = false,
  isReply = false,
  userData,
  parentCommentId = false,
  setCommentType,
  commentType,
}) => {
  let dattFormater = useDateFormate;
  let { UserDP, UserName, UserID } = userData;
  let commentorDp = isUser
    ? UserDP
    : postComment?.Commenter?.userProfile.UserDP ||
      postComment?.replier?.userProfile.UserDP;
  let commentorUsername = isUser
    ? UserName
    : postComment?.Commenter?.UserName || postComment?.replier?.UserName;

  let commentorUserID = isUser
    ? UserID
    : postComment?.Commenter?.UserID || postComment?.replier?.UserID;

  let replyTo =
    postComment?.replyto?.UserName || commentType?.replyTo?.username;

  return (
    <div
      id={`${
        isReply
          ? `comment_reply_${postComment?.ReplyCommentID}`
          : `comment_${postComment?.CommentID}`
      }`}
      className={` bg-[#000000] px-[15px] ${
        isReply ? "mb-[15px]" : "mb-[30px]"
      }`}
    >
      <div className="flex">
        <div className="mr-4">
          <ThumbnailCircle
            size={isReply ? "xxsm" : "xsm"}
            variations="grey"
            noimage={commentorDp ? false : commentorUsername}
          >
            <img
              className="h-full w-full object-cover"
              src={`${import.meta.env.VITE_IMAGE_URL}/${commentorDp}`}
              alt=""
            />
          </ThumbnailCircle>
        </div>
        <div className="mr-auto">
          <p className="text-[14px] font-normal text-white">
            {commentorUsername}
            <span className="text-[10px] text-white opacity-75 pl-3">
              {dattFormater(postComment?.createdAt) || " now"}
            </span>
          </p>
          <div className="flex item">
            {isReply ? (
              !isUser ? (
                <Link
                  to={`/@${replyTo || ""}`}
                  className="text-[12px] text-secondary_clr mr-1 mt-[1px]"
                >
                  {`@${replyTo || ""} `}
                </Link>
              ) : (
                <p className="text-[12px] text-white mr-1 mt-[1px]">{`@${
                  replyTo || ""
                }`}</p>
              )
            ) : (
              ""
            )}
            <p className="text-[14px] font-light text-tertiary_text_clr">
              {postComment?.Comment || postComment?.Reply}
            </p>
          </div>
          <span
            className="reply block text-[10px] font-light text-tertiary_text_clr mt-[4px]"
            onClick={() =>
              setCommentType({
                variation: "reply",
                commentID: parentCommentId || postComment?.CommentID,
                replyTo: {
                  username: commentorUsername,
                  userid: commentorUserID,
                },
              })
            }
          >
            Reply
          </span>
        </div>

        {postComment?.Commenter?.UserID === UserID && (
          <LikeComment commentID={postComment?.CommentID} />
        )}
      </div>
    </div>
  );
};
