import { useState } from "react";

export const ReadMore = ({ children, className, ...props }) => {
  let [read, setread] = useState(false);
  let finallAttributs = {
    className: `flex flex-wrap items-center ${className}`,
  };

  let spanClasses = {
    className: `text-[14px] text-secondary_clr font-bold ml-1`,
  };

  let duplicateChildren = Array.isArray(children)
    ? children
    : children.props.children.split(" ").map((value) => `${value} `);

  let visibleChildIndex = duplicateChildren.reduce(
    (accum, val) => {
      let valLength = val?.props?.children?.length || val?.length;
      if (accum.length + valLength < 50) {
        return {
          length: accum.length + valLength,
          index: accum.index + 1,
        };
      }
      return { ...accum };
    },
    { length: 0, index: 0 }
  );

  let visibleText = duplicateChildren.slice(0, visibleChildIndex.index);
  let hiddenText = duplicateChildren.slice(
    visibleChildIndex.index,
    duplicateChildren.length
  );
console.log(hiddenText)
  return (
    <div {...finallAttributs}>
      {visibleText} {read && hiddenText}
      {hiddenText.length > 0 && (
        <span {...spanClasses} onClick={() => setread(!read)}>
          {read ? ` less ` : ` more `}
        </span>
      )}
    </div>
  );
};
