import { useState } from "react";

export const toggler = () => {
  let [toggle, setToggle] = useState(false);
  let updatetoggle = () => setToggle((change) => !change);
  return { toggle, updatetoggle };
};
