import { useMutation } from "react-query";
import { signIn } from "../../services/Auth/signIn";

export const useSignIn = () => {
  let {
    mutate: verifyCredentils,
    isLoading,
    isError,
    error,
    data,
  } = useMutation({
    mutationKey: "signin",
    mutationFn: signIn,
  });
  return { verifyCredentils, isLoading, isError, data, error };
};
