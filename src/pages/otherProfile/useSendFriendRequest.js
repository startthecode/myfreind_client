import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  friendRequestStatus,
  sendFriendRequest,
  unSendFriendRequest,
} from "../../services/follow_api";

export const useSendFriendRequest = () => {
  let queryClient = useQueryClient();
  let {
    mutate: sendRequest,
    isLoading,
    isError,
    isSuccess: succefullySend,
  } = useMutation({
    mutationFn: sendFriendRequest,
    mutationKey: "sendFriendRequest",
    onSuccess: () => queryClient.refetchQueries("FriendRequestStatus"),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  return { sendRequest, isLoading, isError, succefullySend };
};

export const useUnSendFriendRequest = () => {
  let queryClient = useQueryClient();
  let {
    mutate: unSendRequest,
    isLoading: isUnsending,
    isError: isUnsendError,
    isSuccess: succefullyUnsent,
  } = useMutation({
    mutationFn: unSendFriendRequest,
    mutationKey: "unSendFriendRequest",
    onSuccess: () => queryClient.refetchQueries("FriendRequestStatus"),
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return { unSendRequest, isUnsending, isUnsendError, succefullyUnsent };
};

export const useFriendRequestStatus = (requestReceiver) => {
  let {
    isLoading: checkingRequestStatus,
    isError: requestStatusFail,
    data: requestStatus,
  } = useQuery({
    queryFn: friendRequestStatus,
    queryKey: ["FriendRequestStatus", requestReceiver],
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return {
    checkingRequestStatus,
    requestStatusFail,
    requestStatus,
  };
};
