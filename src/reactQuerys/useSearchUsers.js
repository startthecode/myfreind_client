import { useMutation, useQuery, useQueryClient } from "react-query";
import { postFromFollowedUser } from "../services/post_api";
import { searchUsers } from "../services/user_profile";

export const useSearchUsers = (username) => {
  let {
    data: searchedUsers,
    isLoading: usersLoading,
    isError: userFetchFail,
    refetch,
  } = useQuery({
    queryFn: searchUsers,
    queryKey: ["searchUsers", username],
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
  });
  return {
    searchedUsers,
    usersLoading,
    userFetchFail,
    refetch,
  };
};
