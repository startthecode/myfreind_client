import { SlideUpMenuInnerRowsBTN } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";

let PeraAttributes = {
  className:
    "text-left px-[10px] text-white text-[16px] bg-secondary_clr bg-opacity-10 leading-[15px] py-[10px]",
};

export const RestrictUser = () => {
  return (
    <>
      <p {...PeraAttributes}>
        Restrict <br />
        <span className="text-[10px] font-light">
          Are you having a problem with this user
        </span>
      </p>
      <SlideUpMenuInnerRowsBTN key={"Reelsaaa"} name={"Reelsaaa"} />
      <SlideUpMenuInnerRowsBTN key={"Live-videosaaa"} name={"Live videoaas"} />
    </>
  );
};

export default RestrictUser;
