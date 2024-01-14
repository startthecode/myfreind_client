import { useContext } from "react";
import { CommonNav } from "../../../../ui/LayoutComponents/CommonNav";
import { ListViewContext } from "../compoentent_contextsApi/ListViewContext";


export const ListHeader = () => {
  let {close} = useContext(ListViewContext);
  return (
    <CommonNav
      leftArrow={true}
      column={3}
      event={close}
      className="border-primary_border_clr border-b-[1px]"
    >
      <div className="text-center">
        <p className="text-[15px] text-tertiary_text_clr uppercase">
          _ashu_gola_
        </p>
        <span className="text-[14px] font-medium">Posts</span>
      </div>
    </CommonNav>
  );
};
