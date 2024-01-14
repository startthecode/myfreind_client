import { useContext } from "react";
import { CommentBox } from "./CommentBox";
import { EachPostProvider } from "../../PostCard";
import { useGetPostComments } from "../../useGetPostComments";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";
import { CommenReplys } from "./CommenReplys";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";

export const AllComments = ({ setCommentType }) => {
  let { post } = useContext(EachPostProvider);
  let userData = useSelector(get_user_info).user_info;
  let { allComments, isError, isFetching, refetch } = useGetPostComments(
    post?.PostID
  );
  if (isFetching) return <Loader />;
  if (
    allComments?.data?.length === 0 || !allComments?.data ||
    isError
  )
    return (
      <div className="noComment">
        <p className="text-center text-[20px] mt-10 text-white">
          No comment Yet
        </p>
      </div>
    );

  return (
    <>
      {allComments?.data?.map((postComment) => (
        <div key={postComment.CommentID}>
          <CommentBox
            postComment={postComment}
            setCommentType={setCommentType}
            userData={userData}
          />

          {postComment?.totalReplies > 0 && (
            <CommenReplys
              commentId={postComment?.CommentID}
              totalReplies={postComment?.totalReplies}
              userData={userData}
              setCommentType={setCommentType}
            />
          )}
        </div>
      ))}
    </>
  );
};
