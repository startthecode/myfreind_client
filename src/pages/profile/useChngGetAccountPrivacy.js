import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  chngeAccountPrivacy,
  getAccountPrivacy,
} from "../../services/user_profile";
export const useChangeAccountPrivacy = () => {
  let queryCliet = useQueryClient();
  let {
    mutate: changePrivacyStatus,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: chngeAccountPrivacy,
    mutationKey: "updatePrivacyStatus",
    onSuccess: () => queryCliet.refetchQueries("getPrivacyStatus"),
  });

  return { changePrivacyStatus, isLoading, isError, isSuccess };
};
export const useGetAccountPrivacy = () => {
  let {
    data: AccountPrivacy,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getAccountPrivacy,
    queryKey: "getPrivacyStatus",
    refetchOnWindowFocus:false,
  });

  return { AccountPrivacy, isLoading, isError };
};
