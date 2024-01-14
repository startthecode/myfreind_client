import { useMutation, useQuery, useQueryClient } from "react-query";
import { acceptFriendRequest, deleteFriendRequest } from "../services/follow_api";


export const useAcceptRequest = () => {
  let {
    mutate: acceptRequest,
    isLoading:acceptingRequest,
    isError:acceptingRequestFail,
    isSuccess: succefullyAccepted,
  } = useMutation({
    mutationFn: acceptFriendRequest,
    mutationKey: "acceptFriendRequest",
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return { acceptRequest, acceptingRequest, acceptingRequestFail, succefullyAccepted};
};



export const useDeleteRequest = () => {
  let {
    mutate: deleteRequest,
    isLoading:deleteingRequest,
    isError:deleteingRequestFail,
    isSuccess: succefullydeleted,
  } = useMutation({
    mutationFn: deleteFriendRequest,
    mutationKey: "deleteFriendRequest",
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return { deleteRequest, deleteingRequest, deleteingRequestFail, succefullydeleted };
};

