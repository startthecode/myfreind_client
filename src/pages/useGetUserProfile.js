import { useQuery } from "react-query";
import { getUserProfile } from "../services/user_profile";

export const useGetUserProfile = () => {
  let { data, isLoading, isError, refetch } = useQuery({
    queryKey: "user_profile_data",
    queryFn: getUserProfile,
    keepPreviousData: true,
    refetchOnWindowFocus: false

  });
  return { data, isLoading, isError, refetch };
};
