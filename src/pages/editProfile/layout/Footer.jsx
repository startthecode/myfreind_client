export const Footer = () => {
  let peraClasses = {
    className: `text-[16px] text-tertiary_text_clr font-normal mt-14`,
  };
  return (
    <div className="absolute bottom-2 left-[50%] translate-x-[-50%] text-center">
      <p {...peraClasses}>from</p>
      <p className=" text-secondary_clr text-[16px] font-normal">SAMTAR</p>
    </div>
  );
};
