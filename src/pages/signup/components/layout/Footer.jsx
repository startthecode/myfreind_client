import { Link } from "react-router-dom";

export const Footer = () => {
  let peraClasses = {
    className: `text-[12px] text-tertiary_text_clr font-normal mt-10`,
  };

  return (
    <>
      <div className=" mt-auto text-center z-10">
        <p {...peraClasses}>from</p>
        <p className=" text-secondary_clr text-[16px] font-normal">SAMTAR</p>
      </div>
    </>
  );
};
