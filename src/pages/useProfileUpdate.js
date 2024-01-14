import { useMutation, useQueryClient } from "react-query";
import { updateUserProfile } from "../services/user_profile";

export function useProfileUpdate() {
  let queryClient = useQueryClient();
  let {
    mutate: updateUser,
    isLoading,
    error,
    data,
    isSuccess,
  } = useMutation({
    mutationKey: "profileUpdate",
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.refetchQueries("useGetUser");
    },
  });

  return { updateUser, isLoading, error, data };
}
