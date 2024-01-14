import { useQuery } from "react-query";
import { userTemporaryStory } from "../services/story_api";

export const useUserTemporaryStory = (userid = 123, autofetchFalse) => {
  let { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["userTemporaryStory", userid],
    queryFn: userTemporaryStory,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    ...(autofetchFalse && { enabled: false }),
  });
  return { data, isLoading, isError, refetch };
};
