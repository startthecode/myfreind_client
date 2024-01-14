import { SlideUpMenuInnerRowsBTN } from "../../../../ui/PresentationalComponents/SlideUpMenuInnerRows";

let PeraAttributes = {
  className:
    "text-left px-[10px] text-white text-[16px] bg-secondary_clr bg-opacity-10 leading-[15px] py-[10px]",
};

export const MuteUserUploads = () => {
  return (
    <>
      <p {...PeraAttributes}>
        Mute <br />
        <span className="text-[10px] font-light">
          Instaram won't let them know that you muted them.
        </span>
      </p>
      <SlideUpMenuInnerRowsBTN key={"Posts"} name={"Posts"} />
      <SlideUpMenuInnerRowsBTN key={"Stroies"} name={"Stroies"} />
      <SlideUpMenuInnerRowsBTN key={"Notes"} name={"Notes"} />
    </>
  );
};
