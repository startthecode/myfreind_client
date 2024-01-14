import { useParams } from "react-router-dom";
import { PersonalChatUserInfo } from "./components/ChatBox/PersonalChatUserInfo";
import { SendMessage } from "./components/ChatBox/SendMessage";
import { MessageWrapper } from "./components/ChatBox/MessageWrapper";
import { useContext, useEffect, useState } from "react";
import { useGetConversationDTL } from "./useGetAllConversations";
import { SocketContext } from "../../context/SocketProvider";
import { useSelector } from "react-redux";
import { get_user_info } from "../../redux/store";
import { Loader } from "../../ui/PresentationalComponents/Loader";
export const ChatBox = () => {
  let socket = useContext(SocketContext);
  let { userid: recieverID } = useParams() ?? {};
  let { UserID: senderID } = useSelector(get_user_info).user_info;
  let [newMessages, setNewMessages] = useState(null);
  let [isChatWithMe, setIsChatWithMe] = useState(null);
  let [recievedMessages, setRecievedMessages] = useState(null);
  let { convoDTLLoading, convoDTLFail, convoDTL } =
    useGetConversationDTL(recieverID);

  useEffect(() => {
    const setupSocketListeners = () => {
      socket?.current?.on("recieve_message", (data) => {
        if (
          data?.messageData?.conversationID ===
            convoDTL?.data?.ConversationID ||
          !convoDTL?.data?.ConversationID
        ) {
          setRecievedMessages(data?.messageData);
        }
      });

      socket?.current?.emit("chattingWith", {
        receiverID: +recieverID,
        senderID: +senderID,
      });

      socket?.current?.on("isChattingWithMe", (data) => {
        console.log(data);
        setIsChatWithMe(data);
      });

      socket?.current?.emit("updateSeenStatus", {
        receiverID: +recieverID,
        senderID: +senderID,
      });
    };

    if (socket?.current?.connected) {
      setupSocketListeners();
    } else {
      socket?.current?.once("connect", () => {
        setupSocketListeners();
      });
    }

    return () => {
      socket?.current?.off("recieve_message");
      socket?.current?.off("chattingWith");
      socket?.current?.off("isChattingWithMe");
      socket?.current?.off("updateSeenStatus");
    };
  }, [socket?.current, recieverID, senderID]);

  useEffect(() => {
    return () => {
      socket?.current?.emit("noChatting", {
        receiverID: +recieverID,
        senderID: +senderID,
      });
    };
  }, [socket?.current, recieverID, senderID]);

  if (convoDTLLoading) return <Loader />;
  if (convoDTLFail)
    return (
      <h1 className="text-white text-[18px] mt-[40px] px-[15px] text-center">
        Something went wrong try after some time <br />
        😔😔
      </h1>
    );

  return (
    <>
      <PersonalChatUserInfo recieverID={recieverID} />
      <MessageWrapper
        newMessages={newMessages}
        recievedMessages={recievedMessages}
        conversationID={convoDTL?.data?.ConversationID}
      />
      <SendMessage
        setNewMessages={setNewMessages}
        conversationID={convoDTL?.data?.ConversationID}
        recieverID={recieverID}
        socket={socket.current}
        isChatWithMe={isChatWithMe}
      />
    </>
  );
};
