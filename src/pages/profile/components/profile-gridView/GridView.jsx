import { useContext } from "react";
import { ListViewContext } from "../compoentent_contextsApi/ListViewContext";
import { Icon } from "@iconify/react";

export const GridView = ({ gridFor = null, post_list }) => {
  let { open } = useContext(ListViewContext);

  return (
    <div className="flex flex-wrap">
      {post_list?.map(({ PostContentURL, PostType, PostID }) =>
        PostType !== "video" && PostType !== "reel" ? (
          <div className="basis-4/12 px-[4px] py-[4px]" id={PostID} key={PostID}>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${PostContentURL}`}
              className="h-[140px] rounded-3xl shadow-xl w-full object-cover"
              onClick={() => open(PostID, gridFor)}
            />
          </div>
        ) : (
          <div className="basis-4/12 px-[4px] py-[4px] relative" id={PostID} key={PostID}>
            <video  src={`${import.meta.env.VITE_IMAGE_URL}/${PostContentURL}`} type="video/mp4" className="h-[140px] rounded-3xl shadow-xl w-full object-cover"
              onClick={() => open(PostID, gridFor)}>
            </video>
            <Icon color="#fff" icon="ph:play-light" className="absolute bottom-4 left-4 z-[2] shadow-md" height={25} />
          </div>
        )
      )}
    </div>
  );
};
