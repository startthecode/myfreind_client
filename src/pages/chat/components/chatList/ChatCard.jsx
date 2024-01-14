import { Link } from "react-router-dom";
import { ThumbnailCircle } from "../../../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";
import useDateFormate from "../../../../hooks/useDateFormate";

export const ChatCard = (props) => {
  let {
    userID,
    name,
    profileDp,
    lastMessage,
    unSeenCount,
    seen,
    liveSeen,
    updatedAt,
    userName,
  } = props;
  let timeFormat = useDateFormate;
  
  let time = timeFormat(updatedAt)
    ?.replace("utes", "")
    ?.replace("ours", "")
    ?.replace("onds", "");
  let unSeenMesDisplayCon = unSeenCount !== 0 && unSeenCount;
  let seenTickDisplayCon = unSeenCount == 0 && !unSeenCount;
  let seenUnseenCondition = seen || liveSeen;

  return (
    <Link
      to={`${userID}`}
      className="flex slideUp px-[15px] w-full items-center py-5 border-b-[1px] border-slate-200"
    >
      <div className="basis-2/12 flex justify-between px-0">
        <div>
          <ThumbnailCircle size="sm" variation="grey" noimage={profileDp ? false : userName}>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${profileDp}`}
              className="h-full w-full object-cover"
              alt=""
            />
          </ThumbnailCircle>
        </div>
      </div>
      <div className="flex basis-7/12">
        <div>
          <h5 className="text-[16px] mb-0 text-primary_text_clr font-medium uppercase">
            {name}
          </h5>

          <span className="text-[12px] text-gray-600 whitespace-nowrap  max-w-[210px] overflow-hidden flex">
            {seenTickDisplayCon && (
              <Icon
                icon="charm:tick-double"
                className={`${
                  seenUnseenCondition ? "text-primary_clr" : "text-gray-400"
                } mr-1`}
                height="16"
              />
            )}

            {lastMessage}
          </span>
        </div>
      </div>

      <div className="basis-3/12 px-0">
        <p className="text-[12px] font-light mb-3 text-end text-gray-800">
          {time}
        </p>
        {unSeenMesDisplayCon && (
          <p className="text-[12px] font-medium h-[22px] w-[22px] ml-auto rounded-full bg-secondary_clr text-white flex items-center justify-center">
            {unSeenCount}
          </p>
        )}
      </div>
    </Link>
  );
};
