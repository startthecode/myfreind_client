import { Link } from "react-router-dom";
import {
  HeartIcon,
  HomeIcon,
  ReelIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "../../icons/icons";
import { ThumbnailCircle } from "../../ui/PresentationalComponents";
import { get_user_info } from "../../redux/store";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
export const Footer = () => {
  let { UserDP,UserName } = useSelector(get_user_info)?.user_info ?? {};
  const location = useLocation();

  const isActive = (href) => {
    return location.pathname === href;
  };

  let finalAttribute = {
    className:
      "flex justify-between px-[15px] itmes-center py-[18px] fixed bottom-[10px] w-[97%] shadow-lg  left-[50%] translate-x-[-50%]  bg-[#000000] z-[100] rounded-[30px] shadow-lg",
  };

  return (
    <footer {...finalAttribute}>
      {/* <CreatePost /> */}
      <Link
        to={"/"}
        className={isActive("/feed") ? "active footerNAV" : "footerNAV"}
      >
        <HomeIcon />
      </Link>

      <Link
        to={"/search"}
        className={isActive("/search") ? "active footerNAV" : "footerNAV"}
      >
        <SearchIcon />
      </Link>

      <Link
        to={"/reels"}
        className={isActive("/reels") ? "active footerNAV" : "footerNAV"}
      >
        <ReelIcon />
      </Link>
      <Link
        to={"/chat"}
        className={isActive("/chat") ? "active footerNAV" : "footerNAV"}
      >
        <Icon icon="uiw:message" className="text-white text-[25px]" />{" "}
      </Link>

      <Link
        to={"/my-profile"}
        className={isActive("/my-profile") ? "active footerNAV" : "footerNAV"}
      >
        <ThumbnailCircle size={"xxsm"} noimage={UserDP ? false : UserName}>
          <img
            className="h-full w-full object-cover "
            src={`${import.meta.env.VITE_IMAGE_URL}/${UserDP}`}
            alt=""
          />
        </ThumbnailCircle>
      </Link>
    </footer>
  );
};
