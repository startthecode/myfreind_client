import { useQuery } from "react-query";
import { getPostCommentReplies, getPostComments } from "../../services/post_api";


export const useGetPostComments = (postID) => {
  let {
    data: allComments,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryFn: getPostComments,
    queryKey: ["getPostComments", postID],
    refetchOnWindowFocus: false,
  });
  return { allComments, isError, isFetching, refetch };
};

export const useGetPostCommentReplies = (commentID) => {
  let {
    data: allComments,
    isError,
    isFetching,
    refetch,
    remove
  } = useQuery({
    queryFn: getPostCommentReplies,
    queryKey: ["getPostComments", commentID],
    refetchOnWindowFocus: false,
    enabled:false,
  
  });
  return { allComments, isError, isFetching, refetch ,remove};
};




