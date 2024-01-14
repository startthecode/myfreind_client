import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useGetUnseenConversationsCount } from "./useGetUnseenConversationsCount";

let iconAttributes = {
  icon: "uiw:message",
  className: "text-black text-[28px]",
};
export const AllMessages = () => {
  let { count } = useGetUnseenConversationsCount();
  return (
    <Link to={"/chat"} className="relative">
      {count?.data > 0 && (
        <div className="absolute -top-4 -right-3 bg-primary_clr w-[22px] h-[22px] text-white rounded-full flex justify-center items-center text-[10px]">
          {count?.data > 10 ? "10+" : count?.data}
        </div>
      )}
      <Icon {...iconAttributes} />
    </Link>
  );
};
