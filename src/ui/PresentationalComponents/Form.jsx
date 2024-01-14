// export const Form = ({ children, ...props }) => {
//   return (
//     <form className="w-full" {...props}>
//       {children}
//     </form>
//   );
// };

import { forwardRef } from "react";

export const Form = forwardRef(function Form({ children, ...props }, ref) {
  return (
    <form className="w-full" {...props} ref={ref}>
      {children}
    </form>
  );
});
