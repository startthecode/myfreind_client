import { Icon } from "@iconify/react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { EachPostProvider } from "../../PostCard";
import { useContext, useState } from "react";
import { AllComments } from "../postComment/AllComments";
import { AddNewComment } from "../postComment/AddNewComment";

export const Comment = () => {
  let { post } = useContext(EachPostProvider);
  let [commentType, setCommentType] = useState(false);
  const cmntIconFinalAttribute = {
    className: "text-[22px] mr-[10px]",
    icon: "basil:comment-outline",
    hFlip: true,
  };



  return (
    <div>
      <SlideUpMenu.Open whichPopUp={`post_${post.PostID}`}>
        <Icon {...cmntIconFinalAttribute} />
      </SlideUpMenu.Open>

      <SlideUpMenu.PopUp popUpName={`post_${post.PostID}`}>
       <div className="comments_block">
       <p className="text-center text-white text-[16px] mb-5">Comments</p>
        <div className="pb-[80px]" id="allCommentList">
          <AllComments setCommentType={setCommentType} />
        </div>
       </div>
        <AddNewComment
          commentType={commentType}
          setCommentType={setCommentType}
        />
      </SlideUpMenu.PopUp>
    </div>
  );
};
