import { useState } from "react";

export const TextArea = ({ classname, onChange, error, ...props }) => {
  let inputClasses = {
    className: `${classname} text-secondary_border_clr text-[13px] border-2 bg-opacity-20 bg-secondary_BG w-full block rounded-lg py-3 px-5 placeholder:text-tertiary_text_clr focus:outline-0 ${
      error ? " border-red-600" : "border-quaternary_clr"
    }`,
  };
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <>
      <textarea {...inputClasses} {...props} onChange={handleInputChange} />
      <span className="text-red-600 px-3 text-[12px]">{error}</span>
    </>
  );
};


