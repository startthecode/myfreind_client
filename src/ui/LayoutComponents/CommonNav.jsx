import { Icon } from "@iconify/react";
import { useMoveBack } from "../../hooks/goBack";

export const CommonNav = ({
  children,
  leftArrow = false,
  column = 2,
  className,
  event = false,
}) => {
  let goBack = useMoveBack();

  let finalAttributes = {
    className: `flex items-center justify-between py-[14px] px-[15px] w-full ${className}`,
  };

  let child_final_Attributes = {
    className: `flex justify-between items-center ml-[20px] w-full px-0 ${
      column === 3 ? "basis-8/12" : ""
    }
    ${column === 4 ? "basis-7/12" : ""}`,
  };

  return (
    <div {...finalAttributes}>
      {leftArrow && (
        <Icon
          icon="formkit:left"
          height={30}
          inline={true}
          className="group-[.white]:text-white"
          onClick={event || goBack}
        ></Icon>
      )}

      <div {...child_final_Attributes}>{children}</div>
    </div>
  );
};
