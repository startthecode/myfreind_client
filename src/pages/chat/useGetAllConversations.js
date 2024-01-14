import { useQuery } from "react-query";
import {
  getAllConversations,
  getConversationDTL,
  getPersonalChats,
} from "../../services/chat_api";

export const useGetAllConversations = (requestReceiver) => {
  let {
    isLoading: conversationsLoading,
    isError: conversationsStatusFail,
    data: conversationsList,
    refetch:refetchAllConversations
  } = useQuery({
    queryFn: getAllConversations,
    queryKey: ["getAllConversations"],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  return {
    conversationsLoading,
    conversationsStatusFail,
    conversationsList,
    refetchAllConversations
  };
};

export const useGetPersonalChats = (participantid) => {
  let {
    isLoading: chatsLoading,
    isError: chatStatusFail,
    data: chatList,
  } = useQuery({
    queryFn: getPersonalChats,
    queryKey: ["personalchatsWith", participantid],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  return {
    chatsLoading,
    chatStatusFail,
    chatList,
  };
};

export const useGetConversationDTL = (userid) => {
  let {
    isLoading: convoDTLLoading,
    isError: convoDTLFail,
    data: convoDTL,
  } = useQuery({
    queryFn: getConversationDTL,
    queryKey: ["conversationDTL", userid],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  return {
    convoDTLLoading,
    convoDTLFail,
    convoDTL,
  };
};
