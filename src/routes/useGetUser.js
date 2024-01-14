import { useQuery } from "react-query";
import { signingStatus } from "../services/Auth/usersigninStatus";
import { useDispatch } from "react-redux";

export function useGetUser() {
  let dispatch = useDispatch();
  let { data, error, isLoading, refetch } = useQuery(
    ["useGetUser"],
    signingStatus,
    {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: false,
    }
  );
  return { data, error, isLoading, refetch };
}
