export const Overlay = ({
  children,
  bg = "dark",
  visibility = true,
  ...props
}) => {
  let finalAttributes = {
    className: `fixed  z-[999] top-0 left-0 h-screen w-full ease-linear duration-200 ${
      bg === "dark" ? "bg-black bg-opacity-70" : "bg-white bg-opacity-70"
    }
    ${visibility ? "visible" : "invisible"}
    `,
    ...props,
  };
  return <div {...finalAttributes}>{children}</div>;
};
