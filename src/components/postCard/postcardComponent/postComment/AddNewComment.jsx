import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../../../pages/profile/contextAPI/ProfileContext";
import { ThumbnailCircle } from "../../../../ui/PresentationalComponents";
import { Form } from "../../../../ui/PresentationalComponents/Form";
import Inputs from "../../../../ui/PresentationalComponents/Inputs";
import { Icon } from "@iconify/react";
import { useAddComment, useAddCommentReply } from "../../usePostAction";
import { EachPostProvider } from "../../PostCard";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";
import { createRoot } from "react-dom/client";
import { CommentBox } from "./CommentBox";

let addNewCommentWrapperClasses = {
  className: "fixed w-full left-0  bottom-0 ",
};

let replyingToDivClasses = {
  className: " bg-secondary_clr rounded-[10px] max-w-max  px-10  py-2",
};

let replyingToPeraClasses = {
  className: "text-[12px] text-white",
};

let addNewCommentRow = {
  className:
    "flex py-[15px] bg-black pb-[5px] border-t-white border-opacity-20 border-t-[1px] px-[10px]",
};

let addNewCommentForm = {
  className: "relative w-full",
};

let addNewInputFinalAttribute = {
  id: "newCommentAdder",
  type: "text",
  placeholder: "Add comment",
  name: "newComment",
  classname:
    "bg-transparent !rounded-[30px] !w-[93%] py-6 text-white ml-6 newCommentInput",
};

let addNewCommentBtn = {
  className:
    "bg-secondary_clr absolute right-[4.5%] top-2.5 w-[40px] flex justify-center rounded-[25px] py-3",
};

export const AddNewComment = ({
  commentType: passedComment,
  setCommentType,
}) => {
  let userData = useSelector(get_user_info).user_info;
  let [commentType, setType] = useState(false);

  let { post, setpost } = useContext(EachPostProvider);

  // react query and mutation
  let { isSuccess, addNewComment, isLoading, isError, newComment } =
    useAddComment();
  let { isReplySuccess, addReply, isReplyLoading, isReplyError, newreply } =
    useAddCommentReply();

  // image classes and attributes this is inside function because this is using external variables
  let userImgFinalAttribute = {
    src: import.meta.env.VITE_IMAGE_URL + userData.UserDP,
    alt: "userData.UserDP",
    className: "h-full w-full object-cover rotatingThumbnail duration-500",
  };

  // adding new comment
  function handleSubmit(e) {
    e.preventDefault();
    let postID = post.PostID;
    let userNewComment = e.target.newComment.value;

    // adding reply to comment of post
    if (commentType.variation === "reply") {
      addReply({
        comment: userNewComment,
        commentid: commentType.commentID,
        userid: 2,
        replyto: commentType.replyTo.userid,
      });
      return e.target.reset();
    }

    // adding comment on post
    addNewComment({
      postid: postID,
      comment: userNewComment,
    });
    return e.target.reset();
  }

  useEffect(() => {
    setType(passedComment);
    console.log(passedComment);
  }, [passedComment]);

  useEffect(() => {
    console.log(commentType);
    if (newComment && isSuccess) {
      const element = document.createElement("div");
      let root = createRoot(element);

      function renderNewComment() {
        const parentElement = document.getElementById("allCommentList");
        let noComment = document.querySelector(".noComment");
        if (noComment) noComment.remove();
        root.render(
          <CommentBox
            postComment={newComment?.data}
            isUser={true}
            setCommentType={setCommentType}
            userData={userData}
          />
        );

        parentElement.insertBefore(element, parentElement.firstChild);
      }

      renderNewComment();

      // setting new comment on post and reply comments on post to false
      newComment = false;

      isSuccess = false;
    }

    // setting commentType to false so user get same as first time
  }, [newComment]);

  useEffect(() => {
    if (isReplySuccess && newreply) {
      const element = document.createElement("div");
      let root = createRoot(element);

      function renderNewComment() {
        if (commentType.variation === "reply") {
          let replyWrapper = document.getElementById(
            `allReply_${commentType.commentID}`
          );

          // if div which contains reply list is already exists
          if (replyWrapper) {
            root.render(
              <CommentBox
                isReply={true}
                commentType={commentType}
                postComment={newreply?.data}
                userData={userData}
                setCommentType={setCommentType}
                isUser={true}
                parentCommentId={commentType.commentID}
              />
            );
            replyWrapper.insertBefore(element, replyWrapper.firstChild);
            return setCommentType(false);
          }

          // if div which contains reply list is not  exists
          let commentWrapper = document.getElementById(
            `comment_${commentType?.commentID}`
          );
          element.id = `allReply_${commentType?.commentID}`;
          element.className = "ml-[50px] mt-[-10px]";

          root.render(
            <CommentBox
              isReply={true}
              commentType={commentType}
              postComment={newreply?.data}
              userData={userData}
              setCommentType={setCommentType}
              isUser={true}
              parentCommentId={commentType.commentID}
            />
          );
          commentWrapper.after(element);
          return setCommentType(false);
        }
      }

      renderNewComment();

      // setting new comment on post and reply comments on post to false

      newreply = false;
      isReplySuccess = false;
    }

    // setting commentType to false so user get same as first time
  }, [newreply]);

  // useEffect(
  //   () => () => {
  //     setCommentType(false);
  //   },
  //   []
  // );
  return (
    <div {...addNewCommentWrapperClasses}>
      {commentType && (
        <div className="flex justify-center items-center mb-2">
          <div {...replyingToDivClasses}>
            <p {...replyingToPeraClasses}>
              you are replying to {commentType?.replyTo?.username}
            </p>
          </div>
          <div
            className=" bg-red-500 text-white ml-2 px-3 py-1.5 rounded-xl"
            onClick={() => {
              setCommentType(false);
            }}
          >
            <Icon icon="uil:times" height={18} />
          </div>
        </div>
      )}

      <div {...addNewCommentRow}>
        <div>
          <ThumbnailCircle
            size="sm"
            variations="grey"
            noimage={userData?.UserDP ? false : userData?.UserName}
          >
            <img {...userImgFinalAttribute} />
          </ThumbnailCircle>
        </div>

        <div {...addNewCommentForm}>
          <Form onSubmit={handleSubmit}>
            <Inputs {...addNewInputFinalAttribute} required />
            {isLoading || isReplyLoading ? (
              <Loader className="scale-50" />
            ) : (
              <button {...addNewCommentBtn}>
                <Icon icon="gg:arrow-up" color="white" height={25} />
              </button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};
