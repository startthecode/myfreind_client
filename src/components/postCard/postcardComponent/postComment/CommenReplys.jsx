import { useEffect } from "react";
import { useGetPostCommentReplies } from "../../useGetPostComments";
import { CommentBox } from "./CommentBox";

export const CommenReplys = ({
  commentId,
  totalReplies,
  userData,
  setCommentType,
}) => {
  let { allComments, isError, isFetching, refetch, remove } =
    useGetPostCommentReplies(commentId);

  // useEffect(() => () => {
  //   if (allComments) return remove();
  // });

  return (
    <div className="ml-[50px]">
      {!allComments && totalReplies && (
        <div className="ml-[60px] -mt-[44px] mb-[25px]">
          <p
            className="text-[10px] font-light text-tertiary_text_clr mt-4"
            onClick={refetch}
          >
            ------ view {totalReplies} more replies
          </p>
        </div>
      )}

      <div id={`allReply_${commentId}`}>
        {allComments &&
          allComments?.data?.map((postComment) => (
            <CommentBox
              isReply={true}
              key={postComment?.ReplyCommentID}
              postComment={postComment}
              userData={userData}
              setCommentType={setCommentType}
              parentCommentId={commentId}
            />
          ))}
      </div>
    </div>
  );
};
