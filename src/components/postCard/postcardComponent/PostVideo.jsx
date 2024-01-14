import { useContext } from "react";
import { fallbackVideo } from "../../../constants/myProfile";
import { EachPostProvider } from "../PostCard";

export const PostVideo = () => {
  let { post } = useContext(EachPostProvider);

  const feedPost = {
    className: "h-[350px] flex items-center bg-white my-[10px] px-[10px]",
  };

  const feedPostImg = {
    className: "h-full object-cover max-w-full rounded-3xl shadow-2xl",
  };
  return (
    <div {...feedPost}>
      <video
        {...feedPostImg}
        src={
          `${import.meta.env.VITE_IMAGE_URL}/${post?.PostContentURL}` ||
          fallbackVideo
        }
        muted={true}
        autoPlay
        controls
      />
    </div>
  );
};
