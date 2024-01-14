import Img from "../Img";

// parent div styling
let sizes = {
  xlg: "h-[100px] w-[100px] p-[0.2em] overflow-hdden",
  lg: "h-[90px] w-[90px] p-[0.1em] overflow-hdden",
  md: "h-[73px] w-[73px] p-[0.19em] overflow-hdden",
  sm: "h-[59px] w-[59px] p-[0.1em] overflow-hdden",
  xsm: "h-[42px] w-[42px] p-[0.05em] overflow-hdden",
  xxsm: "h-[30px] w-[30px] p-[0.05em] overflow-hdden",
};

let textStyle = {
  xlg: "text-[34px] uppercase text-white flex justify-center items-center bg-tertiary_clr h-full w-full uppercase",
  lg: "text-[28px] uppercase text-white flex justify-center items-center bg-tertiary_clr h-full w-full uppercase",
  md: "text-[26px] uppercase text-white flex justify-center items-center bg-tertiary_clr h-full w-full uppercase",
  sm: "text-[24px] uppercase text-white flex justify-center items-center bg-tertiary_clr h-full w-full uppercase",
  xsm: "text-[22px] uppercase text-white flex justify-center items-center bg-tertiary_clr h-full w-full uppercase",
  xxsm: "text-[20px] uppercase text-white flex justify-center items-center bg-tertiary_clr h-full w-full uppercase",
};

let variations = {
  gradient: "theme_gradient",
  grey: "bg-primary_border_clr",
};

// child div styling
let child_Div = {
  className: "overflow-hidden rounded-full h-full w-full block bg-white p-[4%]",
};

// subchild div styling
let sub_Child_Div = {
  className: "overflow-hidden h-full w-full rounded-full",
};

export const ThumbnailCircle = ({
  children,
  size = "md",
  variation = "grey",
  className,
  noimage = false,
  ...props
}) => {
  // parent div styling
  let final_Attributes = {
    className: `${variations[variation]} ${sizes[size]} overflow-hidden rounded-full ${className}`,
    ...props,
  };

  let final_TextAttributes = {
    className: `${textStyle[size]}`,
  };

  return (
    <div {...final_Attributes}>
      <div {...child_Div}>
        <div {...sub_Child_Div}>
          {noimage ? (
            <div {...final_TextAttributes}>{noimage[0] || "a"}</div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};
