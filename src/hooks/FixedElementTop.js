import { useEffect, useRef } from "react";

export function fixedonscroll(offset) {
  let ref = useRef();
  useEffect(() => {
    let targetCurrentPosition;
    let handleEvent = function (e) {
      if (!ref.current) return null;
      targetCurrentPosition = targetCurrentPosition || ref.current.offsetTop;
      if (targetCurrentPosition <= window.pageYOffset) {
        ref.current.classList.add("fixed", "top-0", "right-0", "mt-0");
      } else {
        ref.current.classList.remove("fixed", "top-0", "right-0", "mt-0");
      }
    };
    window.addEventListener("scroll", handleEvent);
    return () => window.removeEventListener("scroll", handleEvent);
  }, [ref]);
  return ref;
}
