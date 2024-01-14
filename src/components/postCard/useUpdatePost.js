import { useMutation, useQuery, useQueryClient } from "react-query";
import { updatePost } from "../../services/post_api";


export const useUpdatePost = () => {
    let queryClient = useQueryClient();
  let {mutate:updateThePost,isSuccess,isLoading:postIsUpdating,isError:postUpdateFail} = useMutation({
    mutationFn:updatePost,
    mutationKey:'updatePost',
    onSuccess:() => queryClient.refetchQueries('getAllPosts')
  })
  return {updateThePost,isSuccess,postIsUpdating,postUpdateFail}
}

