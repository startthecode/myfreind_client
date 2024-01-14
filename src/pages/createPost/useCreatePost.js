import { useMutation, useQuery } from "react-query";
import { createPost } from "../../services/post_api";

export let useCreatePost = () => {
  let {
    error,
    data,
    mutate: sharePost,
    isLoading,
  } = useMutation({
    mutationFn: createPost,
    mutationKey: "createPost",
  });
  return { error, data, mutate: sharePost, isLoading };
};
