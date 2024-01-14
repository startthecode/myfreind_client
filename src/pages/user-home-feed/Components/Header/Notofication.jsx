import { Icon } from "@iconify/react";
import { AllFreindRequests } from "../AllFreindRequests";
import { useState } from "react";
import { useGetFreindRequestCount } from "./useGetFreindRequestCount";
const iconAttributes = {
  className: "text-[32px] ",
  icon: "ph:heart",
};

export const Notofication = () => {
  let { count } = useGetFreindRequestCount();
  let [show, setShow] = useState(null);
  return (
    <div className="relative mr-[10px]">
      <Icon onClick={() => setShow(!show)} {...iconAttributes} />
      {count?.data > 0 && (
        <div className="h-[10px] w-[10px] rounded-full duration-700 bg-primary_clr absolute  -top-0 -right-0"></div>
      )}

      <div
        className={`${
          show ? "visible top-[57px]" : "invisible top-[-100%]"
        } h-[calc(100vh-57px)] overflow-y-auto fixed  w-full left-0 z-[100] bg-white duration-500 ease-linear pb-10`}
      >
        {count?.data}
        {show !== null && <AllFreindRequests />}
      </div>
    </div>
  );
};
