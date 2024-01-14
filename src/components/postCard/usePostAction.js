import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addComment,
  addCommentReply,
  deleteComment,
  deletePost,
  likeThePost,
  unlikeThePost,
} from "../../services/post_api";

export const useLikePost = () => {
  let {
    mutate: addLike,
    data,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: likeThePost,
    mutationKey: "likingPost",
    keepPreviousData: false,
  });
  return {
    addLike,
    data,
    isError,
    isLoading,
  };
};

export const useUnLikePost = () => {
  let {
    mutate: unlike,
    data: unlikeSuccess,
    isError: unlikeError,
    isLoading: unlikeLoading,
  } = useMutation({
    mutationFn: unlikeThePost,
    mutationKey: "unlikingPost",
    keepPreviousData: false,
  });
  return {
    unlike,
    unlikeSuccess,
    unlikeError,
    unlikeLoading,
  };
};

export const useAddComment = () => {
  let {
    isSuccess,
    mutate: addNewComment,
    isLoading,
    isError,
    data: newComment,
  } = useMutation({
    mutationKey: ["addComment"],
    mutationFn: addComment,
  });

  return { isSuccess, addNewComment, isLoading, isError, newComment };
};

export const useDeleteComment = () => {
  let {
    isSuccess: isDeleted,
    mutate: deleteMyComment,
    isLoading: isDeleting,
    isError: isDeletingErr,
  } = useMutation({
    mutationKey: ["deletingComment"],
    mutationFn: deleteComment,
  });

  return { isDeleted, deleteMyComment, isDeleting, isDeletingErr };
};

export const useAddCommentReply = () => {
  let {
    isSuccess: isReplySuccess,
    mutate: addReply,
    isLoading: isReplyLoading,
    isError: isReplyError,
    data: newreply,
  } = useMutation({
    mutationKey: ["addCommentReply"],
    mutationFn: addCommentReply,
  });

  return { isReplySuccess, addReply, isReplyLoading, isReplyError, newreply };
};

export const useDeletePost = (postID) => {
  const queryClient = useQueryClient();
  let {
    data: deletedPost,
    isLoading,
    isError,
    mutate: deleteThePost,
  } = useMutation({
    mutationFn: deletePost,
    mutationKey: ["deletePost", postID],
    onSuccess: () => {
      queryClient.refetchQueries("getAllPosts");
    },
  });

  return { deletedPost, isLoading, isError, deleteThePost };
};
