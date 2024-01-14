import { useMutation, useQuery, useQueryClient } from "react-query";
import { sendMessage } from "../../services/chat_api";

export const useSendMessage = () => {
  //   let queryClient = useQueryClient();
  let {
    mutate: sendTheMessage,
    isLoading: messageSending,
    isError: messageSendfail,
    isSuccess: succefullySend,
    data:sendedMessage
  } = useMutation({
    mutationFn: sendMessage,
    mutationKey: "sendMessage",
    refetchOnWindowFocus: false,
  });
  return {
    sendTheMessage,
    messageSending,
    messageSendfail,
    succefullySend,
    sendedMessage
  };
};
