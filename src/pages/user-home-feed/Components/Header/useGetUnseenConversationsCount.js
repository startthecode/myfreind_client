import { useQuery } from "react-query";
import { getUnseenConversationsCount } from "../../../../services/chat_api";

export const useGetUnseenConversationsCount = () => {
  let { data: count } = useQuery({
    queryFn: getUnseenConversationsCount,
    queryKey: "allPendingConversations",
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return { count };
};
