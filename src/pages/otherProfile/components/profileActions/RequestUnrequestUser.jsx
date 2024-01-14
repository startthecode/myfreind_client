import { useContext, useEffect, useId } from "react";
import { Button } from "../../../../ui/PresentationalComponents";
import { OtherProfileContext } from "../../contextAPI/OtherProfileProvider";
import { useSelector } from "react-redux";
import {
  useFriendRequestStatus,
  useSendFriendRequest,
  useUnSendFriendRequest,
} from "../../useSendFriendRequest";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";
import { SocketContext } from "../../../../context/SocketProvider";
import { get_user_info } from "../../../../redux/store";

export const RequestUnrequestUser = () => {
  let { UserID: senderUserID } = useSelector(get_user_info).user_info;
  let { UserID: receiverID } =
    useContext(OtherProfileContext)?.profile_data ?? {};
  let socket = useContext(SocketContext);

  let { sendRequest, isLoading, isError, succefullySend } =
    useSendFriendRequest();

  let { unSendRequest, isUnsending, isUnsendError, succefullyUnsent } =
    useUnSendFriendRequest();

  let { checkingRequestStatus, requestStatusFail, requestStatus } =
    useFriendRequestStatus(receiverID);

  function handleClick(e) {
    if (requestStatus?.data?.RequestID)
      return unSendRequest({ requestReceiver: receiverID });
    sendRequest({ requestReceiver: receiverID });
  }

  useEffect(() => {
    function setupSocketListeners() {
      if (succefullySend) {
        socket?.current?.emit("send_friendRequest", {
          receiverID: receiverID,
          senderID: senderUserID,
        });
      }
    }
    if (socket?.current?.connected) {
      setupSocketListeners();
    } else {
      socket?.current?.once("connect", () => {
        setupSocketListeners();
      });
    }
  }, [succefullySend]);

  if (checkingRequestStatus) return <Loader className="!h-[55px] !w-[76px]" />;

  if (requestStatus?.data?.RequestID)
    return (
      <div className="basis-full ">
        <Button variation={`grey`} size="md" onClick={handleClick}>
          request sent
        </Button>
      </div>
    );
  return (
    <div className="basis-full ">
      <Button variation="secondary" size="md" onClick={handleClick}>
        Follow
      </Button>
    </div>
  );
};
