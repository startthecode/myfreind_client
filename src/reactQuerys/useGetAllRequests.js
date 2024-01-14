import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAllFreindRequest } from "../services/follow_api";

export const useGetAllFreindRequest = () => {
  let {
    data: allFriendRequests,
    isLoading: freindRequestsLoading,
    isError: freindRequestsFail,
    refetch
  } = useQuery({
    queryFn: getAllFreindRequest,
    queryKey: "getAllfriendRequest",
    keepPreviousData: true,
    // staleTime: 1000,
    refetchOnWindowFocus: false,
  });
  return {
    allFriendRequests,
    freindRequestsLoading,
    freindRequestsFail,
    refetch
  };
};
