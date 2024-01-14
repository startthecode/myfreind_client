import { useQuery } from "react-query";
import { getOthersProfile } from "../../services/user_profile";

export const useGetOthersProfile = (username) => {
  let {
    data: profileData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user_profile_data", username],
    queryFn: getOthersProfile,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  return { profileData, isLoading, isError };
};
