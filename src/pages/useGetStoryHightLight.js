import { useQuery } from "react-query";
import { getStoryHighlights } from "../services/story_api";

export const useGetStoryHightLight = (userId) => {
  let { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["getstoryhightlights", userId],
    queryFn: getStoryHighlights,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data, isFetching, isError, refetch };
};
