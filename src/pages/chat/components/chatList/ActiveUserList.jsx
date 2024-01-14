import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../../context/SocketProvider";
import { ThumbnailCircle } from "../../../../ui/PresentationalComponents";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";
import { Link } from "react-router-dom";

export const ActiveUserList = () => {
  let { UserID } = useSelector(get_user_info).user_info;
  let socket = useContext(SocketContext);
  let [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    function setupSocketListeners() {
      socket?.current?.emit("getAcitveUser", UserID);
      socket?.current?.on("acitveUsers", (data) => {
        setActiveUser(data?.filter((val) => val.userID !== UserID));
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
      socket?.current?.off("acitveUsers");
    };
  }, []);

  if (activeUser == null)
    return (
      <h5 className="h-[64.5px] text-white text-[14px] flex items-center justify-center slideUp">
        Something is wrong
      </h5>
    );

  if (activeUser?.length == 0)
    return (
      <h5 className="h-[64.5px] text-white text-[14px] flex items-center justify-center slideUp">
        No one is online from your friends list 😔😔
      </h5>
    );

  return (
    <div className="pb-5 pt-4 px-[15px] overflow-auto flex w-full no-scrollbar slideUp">
      {activeUser?.map((val, index) => (
        <Link to={`${val?.userID}`} className="mr-5 relative" key={index}>
          <div className=" bg-green-600 border-[1px] rounded-full border-white h-[10px] w-[10px] shadow-md absolute bottom-1 right-1"></div>
          <ThumbnailCircle
            size="xsm"
            noimage={val?.userDp ? false : val?.userName}
          >
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${val?.userDp}`}
              className="h-full w-full object-cover"
              alt=""
            />
          </ThumbnailCircle>
        </Link>
      ))}
    </div>
  );
};
