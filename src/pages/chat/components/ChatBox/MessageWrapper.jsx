import { useEffect, useState } from "react";
import { MessageCard } from "./MessageCard";
import { useLocation, useParams, Navigate } from "react-router-dom";
import { useGetPersonalChats } from "../../useGetAllConversations";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";
import { Loader } from "../../../../ui/PresentationalComponents/Loader";

export const MessageWrapper = ({
  newMessages,
  conversationID,
  recievedMessages,
}) => {
  let [messageList, setMessageList] = useState([]);

  let { UserID: myUserID } = useSelector(get_user_info)?.user_info ?? {};
  let { chatsLoading, chatStatusFail, chatList } =
    useGetPersonalChats(conversationID);
  let personalChats = chatList?.data;

  useEffect(() => {
    if (newMessages) {
      setMessageList([...messageList, newMessages]);
    }
  }, [newMessages]);

  useEffect(() => {
    if (recievedMessages) {
      setMessageList([...messageList, recievedMessages]);
    }
  }, [recievedMessages]);

  useEffect(() => {
    let element = document.querySelector(".messageWrapper");
    element?.scrollTo(0, element.scrollHeight);
  }, [newMessages, messageList, recievedMessages, chatList]);

  if (chatsLoading) return <Loader />;
  if (chatStatusFail)
    return (
      <h1 className="mt-[50px] text-white text-[18px]">Somethung went wrong</h1>
    );

  return (
    <div className="bg-white  w-full pt-10 rounded-t-[30px] shadow-[0_0_10px_#00000069] slideUp z-[2] h-[calc(100vh-126px)] overflow-auto pb-[75px] px-[15px] messageWrapper">
      {personalChats?.map((val, index) =>
        val?.SenderID === myUserID ? (
          <MessageCard
            sended="true"
            key={index}
            text={val?.content}
            timestamp={val?.created_at}
          />
        ) : (
          <MessageCard
            key={index}
            received="true"
            text={val?.content}
            timestamp={val?.created_at}
          />
        )
      )}

      {messageList?.map((val, index) =>
        val?.SenderID === myUserID ? (
          <MessageCard
            sended="true"
            key={index}
            text={val?.content}
            timestamp={val?.created_at}
          />
        ) : (
          <MessageCard
            key={index}
            received="true"
            text={val?.content}
            timestamp={val?.created_at}
          />
        )
      )}
    </div>
  );
};
