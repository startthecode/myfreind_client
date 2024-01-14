let sizes = {
  lg: "text-[16px] leading-[20px] font-medium",
  md: "text-[14px] leading-[20px] font-medium",
};

let colors = {
  textPrimary: "text-primary_text_clr",
  primary: "text-primary_clr",
  secondary: "text-secondary_clr",
  black: "text-black",
  white: "text-black",
};

export const Heading = ({
  as = "h5",
  size = "lg",
  color = "textPrimary",
  className = "",
  children,
  ...props
}) => {
  let Element = as;

  let final_Attributes = {
    className: `${className} ${colors[color]} ${sizes[size]} overflow-hidden rounded-full`,
    ...props,
  };

  return <Element {...final_Attributes}>{children}</Element>;
};
