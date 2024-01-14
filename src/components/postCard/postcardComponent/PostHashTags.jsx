import { Link } from "react-router-dom";
import { ReadMore } from "../../../ui/PresentationalComponents/readMore";

export const PostHashTags = () => {
  const tagsParentClasses = {
    className:
      "tags text-[14px] font-normal mt-[7px] flex flex-wrap leading-7 ",
  };

  const hashTagClasses = {
    className: "mr-2",
  };

  return (
    <div {...tagsParentClasses}>
      <Link to={"/"} {...hashTagClasses}>
        #mediamodifier
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #mockups
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #instaClone
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #owngram
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #owngram
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #owngram
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #owngram
      </Link>
      <Link to={"/"} {...hashTagClasses}>
        #owngram
      </Link>
    </div>
  );
};
