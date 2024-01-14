import { useMutation, useQueryClient } from "react-query";
import { signUp } from "../../services/Auth/signUp";

export function useSignup() {
  const queryClient = useQueryClient();
  let {
    mutate: createuser,
    isLoading: userIsCreating,
    data: userIsCreated,
    isError,
    error,
  } = useMutation({
    mutationKey: ["Create new user"],
    mutationFn: signUp,
    // onSuccess: () => {
    //   queryClient.invalidateQueries("useGetUser");
    // },
  });

  return { createuser, userIsCreating, userIsCreated, isError, error };
}
