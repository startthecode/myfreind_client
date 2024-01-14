export const IndicatorCircle = ({ variation = "primary", size = "sm" }) => {
  let defaultClasses = "rounded-full circle overflow-hidden";
  let variations = {
    primary: "bg-primary_clr",
    secondary: "bg-secondary_clr",
    tertiary: "bg-tertiary_clr",
  };

  let sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
  };

  let finalAttributes = {
    className: `${defaultClasses} ${variations[variation]} ${sizes[size]}`,
  };

  return <div {...finalAttributes}></div>;
};
