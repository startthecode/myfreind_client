import { useQuery } from "react-query";
import { getUserIntro } from "../services/user_profile";

export const useGetUserIntro = () => {
  let {
    data: UserIntro,
    isError: introError,
    isFetching: introFetching,
    refetch:introRefetch
  } = useQuery({
    queryFn: getUserIntro,
    queryKey: "getUserIntro",
    refetchOnWindowFocus: false
  });

  return { UserIntro, introError, introFetching,introRefetch };
};
