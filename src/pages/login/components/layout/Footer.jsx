import { Link } from "react-router-dom";

export const Footer = () => {
  let peraClasses = {
    className: `text-[16px] text-tertiary_text_clr font-normal mt-14`,
  };

  let createUserFinalAttributes = {
    className: `text-secondary_clr font-medium`,
    to: "/signup",
  };
  return (
    <>
      <p {...peraClasses}>
        Don't have an account?
        <Link {...createUserFinalAttributes}> Sign Up</Link>
      </p>
      <>
        <div className=" mt-auto text-center z-10">
          <p className={`text-[12px] text-tertiary_text_clr font-normal mt-14`}>
            from
          </p>
          <p className=" text-secondary_clr text-[16px] font-normal">SAMTAR</p>
        </div>
      </>
    </>
  );
};
