import { useQuery } from "react-query";
import { getAllPost } from "../services/post_api";

export const useGetAllPosts = (userid) => {
  let { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["getAllPosts",userid],
    queryFn: getAllPost,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch };
};
