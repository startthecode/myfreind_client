import { Outlet, useParams } from "react-router-dom";
import { CommonNav } from "../../../../ui/LayoutComponents/CommonNav";
export const Header = () => {
  return (
    <CommonNav leftArrow={true}>
      <p className="text-[14px] text-white">
       Go back
      </p>
    </CommonNav>
  );
};
