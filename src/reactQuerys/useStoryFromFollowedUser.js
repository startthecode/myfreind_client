import { useMutation, useQuery, useQueryClient } from "react-query";
import { storyFromFollowedUser } from "../services/story_api";

export const useStoryFromFollowedUser = () => {
  let {
    data: stories,
    isLoading: storiesLoading,
    isError: storiesFetchFail,
  } = useQuery({
    queryFn: storyFromFollowedUser,
    queryKey: ["storyFromFollowedUser"],
    refetchOnWindowFocus: false,
    enabled: true,
    retry: false,
    keepPreviousData: false,
  });
  return {
    stories,
    storiesLoading,
    storiesFetchFail,
  };
};
