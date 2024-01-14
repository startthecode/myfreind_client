import { Icon } from "@iconify/react";
import { Form } from "../../../../ui/PresentationalComponents/Form";
import Inputs from "../../../../ui/PresentationalComponents/Inputs";
import { useSendMessage } from "../../useSendMessage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../../redux/store";
import staring from "../../../../images/staring.gif";
import { createThrottle } from "../../../../hooks/useThrottleling";
export const SendMessage = ({
  conversationID,
  recieverID,
  setNewMessages,
  socket,
  isChatWithMe,
}) => {
  let [imTyping, setImTyping] = useState(false);
  let { UserID: senderID } = useSelector(get_user_info).user_info;
  const throttledOnChange = createThrottle(handleThrottledChange, 2000);
  let {
    sendTheMessage,
    messageSending,
    messageSendfail,
    succefullySend,
    sendedMessage,
  } = useSendMessage();

  let addNewCommentForm = {
    className: "fixed bottom-0 left-0 bg-white w-full px-[15px] py-[10px]",
    disabled: messageSending ? true : false,
  };
  let addNewInputFinalAttribute = {
    type: "text",
    placeholder: "Add comment",
    name: "newMessage",
    classname: "bg-white !rounded-[30px]  py-4 tet-black ",
    onChange: typingStatus,
  };
  let addNewCommentBtn = {
    className:
      "bg-secondary_clr w-[40px] flex justify-center rounded-[25px] py-3",
  };
  let formAttributes = {
    className: "flex items-center",
    onSubmit: handleSubmit,
  };

  function handleSubmit(event) {
    event.preventDefault();
    let message = event.target.newMessage.value;
    if (conversationID || sendedMessage?.data?.conversationID) {
      sendTheMessage({
        receiver: recieverID,
        message: message,
        conversationid: conversationID || sendedMessage?.data?.conversationID,
        ...(!isChatWithMe && { UnseenMessageCount: true }),
      });
    }
    if (!conversationID && !sendedMessage?.data?.conversationID) {
      console.log("im running");
      sendTheMessage({
        receiver: recieverID,
        message: message,
        UnseenMessageCount: true,
      });
    }
    event.target.newMessage.value = "";
    setImTyping(false);
  }

  function handleThrottledChange(input) {
    setImTyping(false);
    socket.emit("isTyping", {
      receiverID: recieverID,
      senderID: senderID,
      istyping: false,
    });
  }

  function typingStatus(event) {
    if (!imTyping) {
      setImTyping(true);
      socket.emit("isTyping", {
        receiverID: recieverID,
        senderID: senderID,
        istyping: true,
      });
    }
    throttledOnChange();
  }

  useEffect(() => {
    if (sendedMessage) {
      setNewMessages({ ...sendedMessage?.data, created_at: new Date() });
      socket.emit("newMessage", {
        receiverID: recieverID,
        senderID: senderID,
        messageData: { ...sendedMessage?.data, created_at: new Date() },
      });
    }
    // return () => setNewMessages([]);
  }, [sendedMessage]);

  if (messageSendfail)
    return (
      <h1  className=" text-primary_text_clr mt-[40px] text-center fixed bottom-5 z-50 w-full">
        Unable to send message right now kindly refresh or try after some time
      </h1>
    );

  return (
    <div {...addNewCommentForm}>
      <Form {...formAttributes}>
        <img
          src={staring}
          width="30px"
          className={`absolute ${
            isChatWithMe ? "top-[-22px]" : "top-[100px]"
          } text-white left-[20px] duration-500`}
          alt=""
        />

        <Inputs {...addNewInputFinalAttribute} required />

        <button {...addNewCommentBtn}>
          <Icon icon="ion:paper-plane" color="white" height={20} />
        </button>
      </Form>
    </div>
  );
};
