import { useContext } from "react";
import { ReadMore } from "../../../ui/PresentationalComponents/ReadMore";
import { EachPostProvider } from "../PostCard";

const parentClasses = {
  className: "text-[14px] px-[15px] mt-[10px]",
};
const descriptionClasses = {
  className:
    "tags text-[14px] font-normal flex flex-wrap items-center leading-7",
};
export const PostDescription = () => {
  let { post } = useContext(EachPostProvider);

  return (
    <ReadMore {...parentClasses}>
      <p {...descriptionClasses}>{post.PostCaption}</p>
      {/* <PostHashTags hashtags={hashtags} /> */}
    </ReadMore>
  );
};
