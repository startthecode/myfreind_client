import { useEffect, useRef } from "react";

const outSideClick = (handler) => {
  let ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [ref, handler]);
  return ref;
};

export default outSideClick;
