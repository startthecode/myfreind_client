import { useQuery } from "react-query";
import { getFreindRequestCount } from "../../../../services/follow_api";

export const useGetFreindRequestCount = () => {
  let { data: count } = useQuery({
    queryFn: getFreindRequestCount,
    queryKey: "allPendingRequests",
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
  return { count };
};
