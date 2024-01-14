import { useContext } from "react";
import { CommonNav } from "../../../../ui/LayoutComponents/CommonNav";
import { ListViewContext } from "../compoentent_contextsApi/ListViewContext";
import { get_user_info } from "../../../../redux/store";
import { useSelector } from "react-redux";

export const ListHeader = () => {
  let { close } = useContext(ListViewContext);
  let { UserName } = useSelector(get_user_info).user_info;

  return (
    <CommonNav
      leftArrow={true}
      column={4}
      event={close}
      className="border-primary_border_clr border-b-[1px]"
    >
      <div className="text-center">
        <p className="text-[15px] text-tertiary_text_clr uppercase">
          {UserName}
        </p>
        <span className="text-[14px] font-medium">Posts</span>
      </div>
    </CommonNav>
  );
};
