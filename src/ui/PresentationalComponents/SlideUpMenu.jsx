import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import outSideClick from "../../hooks/outSideClick";
import { Overlay } from "./Overlay";

let SlideUpMenuContext = createContext();
let popUpPreClasses = `max-h-[80vh] w-full bg-tertiary_BG fixed z-[99999] left-0 rounded-t-[10px] overflow-auto ease-linear duration-300 pt-[40px] pb-[60px] outerPanelPopUp bottom-0`;
let popUpToplineClasses = {
  className: `absolute top-[10px] translate-x-[-50%] left-[50%] w-[50px] h-[4px] rounded-lg bg-[#555555]`,
};

const SlideUpMenu = ({ children }) => {
  let [openName, setOpenName] = useState(false);
  let open = setOpenName;
  let close = () => setOpenName("");

  return (
    <>
      <SlideUpMenuContext.Provider value={{ openName, open, close }}>
        {children}
        <PopUpOuterBox />
      </SlideUpMenuContext.Provider>
    </>
  );
};

const PopUpOuterBox = () => {
  let { openName, close } = useContext(SlideUpMenuContext);
  let ref = outSideClick(close);
  // if (!openName) return;
  let popUpFinalAttributes = {
    className: `${popUpPreClasses} ${
      openName ? "bottom-[0px]" : "bottom-[-100%]"
    }`,
    ref: ref,
    id: "outerPanelPopUp",
  };

  return createPortal(
    <Overlay visibility={openName ? true : false}>
      <div {...popUpFinalAttributes}>
        <div {...popUpToplineClasses}></div>
      </div>
    </Overlay>,

    document.body
  );
};

function Open({ whichPopUp, children }) {
  let { open, openName, close } = useContext(SlideUpMenuContext);
  return cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation();
      whichPopUp == openName ? close() : open(whichPopUp);
    },
  });
}

function PopUp({ children, popUpName }) {
  let { openName, close } = useContext(SlideUpMenuContext);
  if (openName !== popUpName) return;
  let popOuterDiv = document.getElementById("outerPanelPopUp");
  return createPortal(
    cloneElement(
      <div>
        <div {...popUpToplineClasses}></div>
        {openName === popUpName && children}
      </div>
      // ,{
      //   onCloseModal: close,
      // }
    ),

    popOuterDiv,
    23
  );
}

function Close({ children }) {
  let { close } = useContext(SlideUpMenuContext);
  return cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation();
      close();
    },
  });
}

SlideUpMenu.Open = Open;
SlideUpMenu.PopUp = PopUp;
SlideUpMenu.Close = Close;
export default SlideUpMenu;
