import { Link } from "react-router-dom";

export let Input = ({ ...props }) => {
  return <input {...props} />;
};

let variations = {
  primary:
    "bg-primary_clr text-white font-medium hover:bg-tertiary_clr duration-500",
  secondary:
    "bg-secondary_clr text-white font-medium hover:bg-primary_clr duration-500",
  grey: "bg-secondary_BG text-primary_text_clr hover:bg-primary_clr hover:text-white duration-500",
};

const sizes = {
  lg: "py-[9px] text-[16px] font-normal",
  md: "py-[7px] text-[14px] font-normal",
  sm: "py-[4px] text-[12px] font-normal",
};

export const Button = ({
  children,
  className,
  variation = "primary",
  size = "md",
  onCloseModal,
  link,
  disabled,
  ...props
}) => {
  let final_Attributes = {
    className: `${className} ${variations[variation]} ${sizes[size]} ${
      disabled === true && " !bg-gray-400"
    } overflow-hidden rounded-md block w-full text-center flex justify-center`,
    ...props,
    ...(onCloseModal && { onClick: () => onCloseModal() }),
    ...(disabled && { disabled: true }),
  };
  if (link)
    return (
      <Link to={link} {...final_Attributes}>
        {children}
      </Link>
    );
  return <button {...final_Attributes}>{children}</button>;
};
