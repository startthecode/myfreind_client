import { useContext } from "react";
import { EachPostProvider } from "../../PostCard";
import useDateFormate from "../../../../hooks/useDateFormate";

export const PostFooter = () => {
  let { post } = useContext(EachPostProvider);
  let datFormat = useDateFormate;
  return (
    <p className="text-[12px] text-tertiary_text_clr px-[15px] mt-[7px]">
      {datFormat(post?.createdAt)}
    </p>
  );
};
