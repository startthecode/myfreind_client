import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import outSideClick from "../../hooks/outSideClick";

let comonClasses = { className: `absolute bg-green-500 py-10 w-full` };

let getPoition = function (e) {
  let { x: Xaxis, y: Yaxis, height } = e.target.getBoundingClientRect();
  return { Xaxis, ...{ Yaxis: Yaxis + height } };
};

let DropDownContext = createContext();

const DropDownMenu = ({ children }) => {
  let [openName, setOpenName] = useState(false);
  let [position, setPosition] = useState({ Xaxis: 0, Yaxis: 0 });
  let open = setOpenName;
  let close = () => setOpenName("");

  return (
    <DropDownContext.Provider
      value={{ open, close, openName, setPosition, position }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

function Open({ whichDropDown, children }) {
  let { open, setPosition, openName, close } = useContext(DropDownContext);
  let handleEvents = (e) => {
    e.stopPropagation();
    whichDropDown === openName ? close() : open(whichDropDown);
    setPosition(getPoition(e));
  };
  return cloneElement(children, {
    onClick: (e) => handleEvents(e),
  });
  // return cloneElement(children, {
  //   onMouseEnter: (e) => {
  //     open(whichDropDown);
  //     setPosition(getPoition(e));
  //   },
  // });
}

function DropDown({ dropDownName, children }) {
  let { openName, close, position } = useContext(DropDownContext);
  let { Xaxis, Yaxis } = position;
  let ref = outSideClick(close);

  if (openName !== dropDownName) return;

  let finalAttributes = {
    ...comonClasses,
    style: { top: `${Yaxis}px`, left: `${Xaxis}px` },
    ref: ref,
  };
  return createPortal(
    <div {...finalAttributes}>{children}</div>,
    document.body
  );
}

DropDownMenu.Open = Open;
DropDownMenu.DropDown = DropDown;

export default DropDownMenu;
