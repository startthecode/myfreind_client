import { Icon } from "@iconify/react";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";
import { SlideUpMenuInnerRows } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";
import { useDeletePost } from "../../usePostAction";
import { useEffect } from "react";

export const EditPost = ({ post }) => {
  let userData = useSelector(get_user_info).user_info;
  let userID = userData?.UserID === post.UserID;
  let postId = post?.PostID;
  let { deleteThePost, isLoading, isError, deletedPost } =
    useDeletePost(postId);

  useEffect(() => {
    if (deletedPost)
      document.querySelector(`#post_${post?.PostID}_edit_closer`)?.click();
  }, [deletedPost]);

  return (
    <div>
      <SlideUpMenu.Open whichPopUp={`post_${post?.PostID}_edit`}>
        <Icon icon="ph:dots-three-vertical-bold" height={30} />
      </SlideUpMenu.Open>

      <SlideUpMenu.Close whichPopUp={`post_${post?.PostID}_edit`}>
        <div id={`post_${post?.PostID}_edit_closer`}></div>
      </SlideUpMenu.Close>

      <SlideUpMenu.PopUp popUpName={`post_${post?.PostID}_edit`}>
        {userID ? (
          <>
            <SlideUpMenuInnerRows
              url={`/editpost/${postId}`}
              name="Edit"
              iconName="basil:edit-outline"
            />

            <SlideUpMenuInnerRows
              name="delete"
              iconName="solar:trash-bin-trash-linear"
              onClick={() => deleteThePost({ postid: postId })}
            />
          </>
        ) : (
          <SlideUpMenuInnerRows name="Report" iconName="carbon:report" />
        )}
      </SlideUpMenu.PopUp>
    </div>
  );
};
