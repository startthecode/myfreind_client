import { forwardRef, useState } from "react";

const Inputs = forwardRef(
  ({ classname, error, inline, label, ...props }, ref) => {
    let inputClasses = {
      className: `${classname} text-secondary_border_clr text-[13px] ${
        inline ? "border-b-[2px]" : "border-2 bg-secondary_BG"
      } bg-opacity-20  w-full block rounded-lg py-3 px-5 placeholder:text-tertiary_text_clr focus:outline-0 read-only:text-secondary_clr read-only:bg-gray-100 ${
        error ? " border-red-600" : "border-quaternary_clr"
      }`,
      // ...(ref && { ref: ref }),
    };

    if (label)
      return (
        <>
          <label
            htmlFor="label"
            className={`w-full ${inline ? "flex items-center mb-7" : "block"}`}
          >
            <p
              className={`text-[15px] text-primary_text_clr  ${
                inline ? "mr-5 w-[97px]" : "mb-2"
              }`}
            >
              {label}
            </p>
            <input {...inputClasses} {...props} ref={ref} />
          </label>
        </>
      );

    return (
      <>
        <input {...inputClasses} {...props} ref={ref} />
        <span className="text-red-600 px-3 text-[12px] ">{error}</span>
      </>
    );
  }
);

export default Inputs;
