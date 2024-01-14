import { useMutation } from "react-query";
import { followUser, unfollowUser } from "../../services/follow_api";

export const useFollowUser = () => {
  let {
    mutate: followTheUser,
    isLoading,
    isError,
    isSuccess:succefullyFollow
  } = useMutation({
    mutationFn: followUser,
    mutationKey: "followUser",
    refetchOnWindowFocus: false,
  });
  return { followTheUser, isLoading, isError,succefullyFollow };
};


export const useUnFollowUser = () => {
  let {
    mutate: unFollowTheUser,
    isLoading,
    isError,
    isSuccess:succefullyUnFollow
  } = useMutation({
    mutationFn: unfollowUser,
    mutationKey: "unFollowUser",
    refetchOnWindowFocus: false,
  });
  return { unFollowTheUser, isLoading, isError,succefullyUnFollow };
};
