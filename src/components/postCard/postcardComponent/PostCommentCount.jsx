import { useContext } from "react";
import { EachPostProvider } from "../PostCard";
import SlideUpMenu from "../../../ui/PresentationalComponents/SlideUpMenu";

export const PostCommentCount = () => {
  let { post } = useContext(EachPostProvider) ?? {};
  let totalComments = post?.postStats?.TotalComments || 0;

  return (
    <SlideUpMenu.Open whichPopUp={`post_${post?.PostID}`}>
      <p className="text-tertiary_text_clr text-[14px] px-[15px] mt-[7px] mb-[9px]">
        {totalComments !== 0
          ? `view ${totalComments > 2 ? "all" : ""} ${totalComments} ${
              totalComments > 2 ? "comments" : "comment"
            }`
          : "0 Comments"}
      </p>
    </SlideUpMenu.Open>
  );
};
