import { useQuery } from "react-query";
import { getUserOverview } from "../services/user_profile";

export const useGetUserOverview = (userid = 123) => {
  let { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["useroverview", userid],
    queryFn: getUserOverview,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, isError, refetch };
};
