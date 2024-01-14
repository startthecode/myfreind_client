import { useMutation, useQuery, useQueryClient } from "react-query";
import { postFromFollowedUser } from "../services/post_api";

export const usePostFromFollowedUser = () => {
  let {
    data: allPosts,
    isLoading: postIsLoading,
    isError: postFetchFail,
    refetch,
  } = useQuery({
    queryFn: postFromFollowedUser,
    queryKey: "postFromFollowedUser",
    keepPreviousData: true,
    staleTime: 1000,
    refetchOnWindowFocus: false,
  });
  return {
    allPosts,
    postIsLoading,
    postFetchFail,
    refetch,
  };
};
