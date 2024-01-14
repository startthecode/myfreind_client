import React, { useContext } from "react";
import { ThumbnailCircle } from "../../ui/PresentationalComponents";
import Img from "../../ui/Img";
import { useSelector } from "react-redux";
import { get_user_info } from "../../redux/store";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

let imgClasses = {
  className: "h-full w-full object-cover object-center h-full w-full",
};
let iconClasses = {
  className:
    "text-[18px] p-1 block rounded-full text-white bg-secondary_clr right-[2px] border-white absolute bottom-[14px] shadow-md",
};

export const AddStory = ({ children, size = "sm" }) => {
  let { UserDP, UserName } = useSelector(get_user_info).user_info ?? {};
  return (
    <Link to={"/new-post/story"} className="relative">
      <ThumbnailCircle size={"md"} noimage={UserDP ? false : UserName}>
        {children || (
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${UserDP}`}
            {...imgClasses}
          />
        )}
      </ThumbnailCircle>
      <Icon {...iconClasses} icon="ic:twotone-plus" />
    </Link>
  );
};
