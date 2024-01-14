import { ThumbnailCircle } from "../../../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";
import { useGetUserOverview } from "../../../useGetUserOverview";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../../context/SocketProvider";
export const PersonalChatUserInfo = ({ recieverID }) => {
  let { data, isError, isLoading } = useGetUserOverview(recieverID);
  let { data: userOverView } = data ?? {};
  let [isTyping, setIsTyping] = useState(false);
  let socket = useContext(SocketContext);
  let imageUrl = userOverView?.[0]?.userProfile?.UserDP;
  let userName = userOverView?.[0]?.UserName;

  useEffect(() => {
    function setupSocketListeners() {
      socket?.current?.on("getTypingStatus", (data) => {
        setIsTyping(data?.typingStatus);
      });
    }

    if (socket?.current?.connected) {
      setupSocketListeners();
    } else {
      socket?.current?.once("connect", () => {
        setupSocketListeners();
      });
    }

    return () => {
      socket?.current?.off("getTypingStatus");
    };
  }, []);

  if (isError) return <Navigate to={"/"} />;
  if (isLoading) return <Loader />;
  return (
    <div className="flex px-[15px] w-full items-center justify-between py-5 slideUp">
      <div className="basis-1/12 flex justify-between px-0">
        <div>
          <ThumbnailCircle
            size="xsm"
            variation="grey"
            noimage={imageUrl ? false : userName}
          >
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${imageUrl}`}
              className="h-full w-full object-cover"
              alt=""
            />
          </ThumbnailCircle>
        </div>
      </div>
      <div className="flex basis-7/12">
        <div>
          <h5 className="text-[14px] mb-0 text-white font-medium uppercase">
            {userOverView[0]?.userProfile?.FullName}
          </h5>
          <span className="text-[10px] text-gray-200 whitespace-nowrap  max-w-[210px] overflow-hidden">
            {isTyping ? "...Typing" : "Happy Chatting"}
          </span>
        </div>
      </div>
      <div className="basis-3/12 px-0 flex justify-end">
        <div className="h-[32px] w-[32px] mr-5 shadow-md bg-white rounded-full flex items-center justify-center">
          <Icon
            icon="material-symbols:call"
            className=" text-secondary_clr text-[20px]"
          />
        </div>
        <div className="h-[32px] w-[32px] shadow-md bg-white rounded-full flex items-center justify-center">
          <Icon
            icon="fluent:video-20-filled"
            className=" text-secondary_clr text-[18px]"
          />
        </div>
      </div>
    </div>
  );
};
