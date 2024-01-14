import { Icon } from "@iconify/react";
import { useLikePost, useUnLikePost } from "../../usePostAction";
import { useContext, useEffect, useState } from "react";
import { EachPostProvider } from "../../PostCard";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";

export const LikeDislike = () => {
  let {UserID} = useSelector(get_user_info).user_info;
  let { post, setpost } = useContext(EachPostProvider);
  let [like, setLike] = useState(
    post?.postLikes.find((val) => val.LikingUser === UserID)
      ? true
      : false
  );

  const likeIconFinalAttribute = {
    className: "text-[30px] mr-[10px]",
    icon: "ph:heart",
    ...(like && {
      icon: `${like ? "ph:heart-fill" : "ph:heart"}`,
      color: "#d62976",
    }),
    onClick: () => handlesUBMIT(),
  };
  let { addLike, data, isError, isLoading } = useLikePost();
  let { unlike, unlikeSuccess, unlikeError, unlikeLoading } = useUnLikePost();
  function handlesUBMIT() {
    if (!like) {
      addLike(post?.PostID);
      if (!isError) {
        setpost({ type: "updateLike", data: true });
        return setLike(true);
      }
    } else {
      unlike(post?.PostID);
      if (!unlikeError) {
        setpost({ type: "updateLike", data: false });
        setLike(false);
      }
    }
  }

  return <Icon {...likeIconFinalAttribute} />;
};
