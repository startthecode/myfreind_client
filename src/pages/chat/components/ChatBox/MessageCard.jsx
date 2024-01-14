import { Icon } from "@iconify/react";
import useDateFormate from "../../../../hooks/useDateFormate";

export const MessageCard = ({
  received,
  sended,
  text,
  timestamp = false,
  seen = false,
}) => {
  let formatTime = useDateFormate;
  
  if (received)
    return (
      <div className="messageCard slideUp w-max  max-w-[50%] mb-[15px]">
        <p className="bg-gradient-to-r to-[#d4d1d1] from-[#eeeef2]  rounded-[15px] py-5 px-[12px] text-black text-[12px] text-left rounded-tl-none">
          {text}
        </p>
        <div className="time flex items-center px-[12px] mt-1">
          <span className="text-[10px]   block text-gray-500 whitespace-nowrap  max-w-[210px] overflow-hidden mr-5">
            {timestamp ? formatTime(timestamp) : ""}
          </span>
        </div>
      </div>
    );

  if (sended)
    return (
      <>
        <div className="messageCard slideInUp slideUp w-max max-w-[50%] mb-[15px] ml-auto">
          <p className="bg-gradient-to-r from-[#8073da] to-[#897de3]  rounded-[15px] py-5 px-[12px] text-white text-[12px] text-left rounded-tl-none">
            {text}
          </p>
          <div className="time flex items-center px-[12px] mt-1">
           
            <span className="text-[10px]   block text-gray-500 whitespace-nowrap  max-w-[210px] overflow-hidden mr-5">
              {timestamp ? formatTime(timestamp) : "Now"}
            </span>
          </div>
        </div>
      </>
    );
  return null;
};
