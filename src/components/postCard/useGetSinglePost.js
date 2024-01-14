import { useMutation, useQuery, useQueryClient } from "react-query";
import { getSinglePost } from "../../services/post_api";

let randonNummber = Math.floor(Math.random() * 101);
export const useGetSinglePost = (postid) => {
  let {
    data: postData,
    isLoading: postIsLoading,
    isError,
  } = useQuery({
    queryFn: getSinglePost,
    queryKey: ["getsinglepost", postid, randonNummber],
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: false,
    cacheTime: 0,
    staleTime: 0,
  });
  return { postData, postIsLoading, isError };
};
