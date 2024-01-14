export const Row = ({
  vPosition = "center",
  hposition = "center",
  wrap = false,
  paddingX = false,
  children,
  className,
  ...props
}) => {
  let vPositions = {
    center: "justify-center",
    start: "justify-start",
    between: "justify-between",
    end: "justify-end",
  };
  let hpositions = {
    center: "items-center",
  };
  let finalAttributes = {
    className: `flex w-full ${vPositions[vPosition]} ${hpositions[hposition]} ${
      className || ""
    } ${wrap ? "flex-wrap" : ""} ${paddingX ? "px-[15px]" : ""}`,
  };

  return (
    <div {...finalAttributes} {...props}>
      {children}
    </div>
  );
};
