import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { ToggleButton } from "./toggleButton";

export const SlideUpMenuInnerRows = ({
  iconName = false,
  url,
  name,
  notifiy = true,
  className,
  ...props
}) => {
  let iconFinalAttributes = {
    className: "text-[28px] text-[#E0E0E0]",
    icon: iconName,
  };
  let linkFinalAttributes = {
    className: `flex items-center w-full px-[20px]`,
    to: url,
  };
  let divFinalAttributes = {
    className: `flex items-center w-full ml-4 py-6 border-b-2 border-tertiary_border_clr ${className}`,
  };
  let spanFinalAttributes = {
    className: "text-[16px] font-normal text-[#E0E0E0]",
  };

  return (
    <div>
      <Link {...linkFinalAttributes} {...props}>
        {iconName && <Icon {...iconFinalAttributes} />}
        <div {...divFinalAttributes}>
          <span {...spanFinalAttributes}>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export const SlideUpMenuInnerRowsBTN = ({
  iconName = false,
  url = false,
  name,
  checked,
  className,
  ...props
}) => {
  let iconFinalAttributes = {
    className: "text-[28px] text-[#E0E0E0]",
    icon: iconName,
  };
  let linkFinalAttributes = {
    className: `flex items-center  w-full px-[20px]`,
    to: url,
  };
  let labelFinalAttributes = {
    className: `flex items-center w-full px-4 py-6 border-b-2 border-tertiary_border_clr justify-between ${className}`,
    htmlFor: `${name}`,
  };
  let spanFinalAttributes = {
    className: "text-[16px] font-normal text-[#E0E0E0]",
  };

  let buttonFinalAttributes = {
    id: `${name}`,
    ...(checked && { defaultChecked: "defaultChecked" }),
  };

  return (
    <div>
      {iconName && <Icon {...iconFinalAttributes} />}
      <label {...labelFinalAttributes}>
        <span {...spanFinalAttributes}>{name}</span>
        <ToggleButton {...buttonFinalAttributes} {...props} />
      </label>
    </div>
  );
};
