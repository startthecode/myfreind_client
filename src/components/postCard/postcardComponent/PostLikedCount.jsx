import { useContext, useEffect } from "react";
import { EachPostProvider } from "../PostCard";
import { get_user_info } from "../../../redux/store";
import { useSelector } from "react-redux";

export const PostLikedCount = () => {
  let { UserID, UserDP,UserName } = useSelector(get_user_info).user_info;
  let { post: postData, setpost } = useContext(EachPostProvider);
  let isLikedByUser = postData?.postLikes.find(
    (val) => val.LikingUser === UserID
  );

  let totalLikes = isLikedByUser
    ? postData?.postStats?.TotalLikes - 1
    : postData?.postStats?.TotalLikes;

  let otherLikes = totalLikes + (postData.isLikedByUser ? 1 : 0) > 1;
  let noLikeCondition =
    (!totalLikes && !postData?.postLikes[0] && !postData.isLikedByUser) ||
    (postData?.postLikes[0] && !postData.isLikedByUser && totalLikes === 0);

  useEffect(() => {
    if (postData.isLikedByUser === undefined)
      setpost({ type: "updateLike", data: isLikedByUser ? true : false });
  }, []);

  if (noLikeCondition)
    return (
      <p className="text-[14px] font-light like_info px-[15px] mt-[7px] flex">
        0 Likes 😭
      </p>
    );

  return (
    <div className="px-[15px] mt-[7px] flex">
      <div className="flex mr-2 items-center">
        {postData?.postLikes.map(
          (val, index) =>
            val.LikingUser !== UserID && (
              val?.userprofileCon?.UserDP  ?  <img
                key={index}
                className={`h-[25px] w-[25px] ${
                  index > 0 ? "-ml-4" : ""
                } rounded-full border-[2px] border-white`}
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  val?.userprofileCon?.UserDP
                }`}
                alt=""
              /> : <div  key={index} className={`h-[25px] w-[25px] ${
                index > 0 ? "-ml-4" : ""
              } rounded-full border-[2px] border-white text-white flex items-center justify-center uppercase bg-secondary_clr`}>{val?.userprofileCon?.FullName?.[0]}</div>
            )
        )}

        {postData.isLikedByUser && (
         UserDP ? <img
            className={`h-[25px] w-[25px] ${
              totalLikes && "-ml-4"
            } rounded-full border-[2px] border-white`}
            src={`${import.meta.env.VITE_IMAGE_URL}/${UserDP}`}
            alt=""
          /> : <div  className={`h-[25px] w-[25px] ${
            totalLikes && "-ml-4"
          } rounded-full border-[2px] border-white bg-secondary_clr text-white flex items-center justify-center uppercase`}>{UserName[0]}</div>
        )}
      </div>
      <p className="text-[14px] font-light like_info">
        Liked by
        <span className="font-medium">
          {postData.isLikedByUser
            ? " You"
            : " " + postData?.postLikes[0]?.userprofileCon?.FullName}
        </span>
        {otherLikes && (
          <>
            <span className="font-medium"> and {totalLikes} </span>
            <span className="font-medium"> Other</span>
          </>
        )}
      </p>
    </div>
  );
};
