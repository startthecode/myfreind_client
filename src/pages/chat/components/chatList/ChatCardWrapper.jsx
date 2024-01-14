import { Loader } from "../../../../ui/PresentationalComponents/Loader";
import { useGetAllConversations } from "../../useGetAllConversations";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../../context/SocketProvider";
import { ChatCard } from "./ChatCard";

export const ChatCardWrapper = () => {
  let [liveseenstatus, setLiveseenstatus] = useState([]);
  let [liveseenUsers, setLiveseenUsers] = useState([]);
  let [liseMessages, setLiveMessages] = useState([]);

  let socket = useContext(SocketContext);
  let {
    conversationsLoading,
    conversationsStatusFail,
    conversationsList,
    refetchAllConversations,
  } = useGetAllConversations();
  let { participants: coversationData } = conversationsList?.data ?? {};
  let displayCondition = coversationData && coversationData?.length;
  useEffect(() => {
    function setupSocketListeners() {
      // seen status
      socket?.current?.on("getSeenStatus", (data) => {
        console.log(data?.seenSender, 2);
        setLiveseenstatus(data?.seenSender);
      });

      //incoming messages
      socket?.current?.on("recieve_message", (data) => {
        refetchAllConversations();
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
      socket?.current?.off("getSeenStatus");

      //incoming messages
      socket?.current?.off("recieve_message");
    };
  }, []);

  useEffect(() => {
    setLiveseenUsers(liveseenUsers.concat([liveseenstatus]));
  }, [liveseenstatus]);

  if (conversationsStatusFail) {
    return <div>Error loading conversations.</div>;
  }

  return (
    <div className="bg-white  w-full absolute left-0 right-0 pt-5 rounded-t-[30px] shadow-[0_0_10px_#00000069] slideUp z-[2] h-[calc(100vh-58px)]">
      {conversationsLoading && <Loader />}
      {displayCondition
        ? coversationData
            ?.sort(
              (val, val2) =>
                new Date(val2?.Participant?.updatedAt) -
                new Date(val?.Participant?.updatedAt)
            )
            .map((val, index) => {
              let data = {
                conversationID: val?.ConversationID,
                participationId: val?.Participant?.ParticipantID,
                userID: val?.user[0]?.UserID,
                profileDp: val?.user[0]?.userProfile?.UserDP,
                name: val?.user[0]?.userProfile?.FullName,
                userName: val?.user[0]?.UserName,
                lastMessage: val?.Participant?.LastMessage,
                unSeenCount: val?.Participant?.UnseenMessageCount,
                seen: val?.Participant?.Seen,
                liveSeen: liveseenUsers?.includes(val?.user[0]?.UserID),
                updatedAt: val?.Participant?.updatedAt,
              };
              console.log(val)
              return (
                <ChatCard
                  key={index}
                  conversationID={data?.conversationID}
                  participationId={data?.participationId}
                  userID={data?.userID}
                  userName={data?.userName}
                  name={data?.name}
                  profileDp={data?.profileDp}
                  lastMessage={data?.lastMessage}
                  unSeenCount={data?.unSeenCount}
                  seen={data?.seen}
                  liveSeen={data?.liveSeen}
                  updatedAt={data?.updatedAt}
                />
              );
            })
        : !conversationsLoading && (
            <div className="text-center flex flex-col items-center mt-[40px]">
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f979/512.gif"
                alt="🥹"
                width="60"
                height="60"
              />
              <p className="text-[15px] text-center px-[15px] mt-[20px] text-primary_text_clr">
                It seems you haven't started any conversations yet. Start a new
                conversation by connecting with friends or colleagues.{" "}
              </p>
            </div>
          )}
    </div>
  );
};
