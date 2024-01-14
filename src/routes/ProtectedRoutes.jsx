import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get_user_info } from "../redux/store";
import { Loader } from "../ui/PresentationalComponents/Loader";
import PopUp from "../ui/PresentationalComponents/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { useGetUser } from "./useGetUser";
import {
  remove_user_info,
  update_user_error,
  update_user_info,
} from "../redux/user_Info_Slice";
import { useGetUserIntro } from "./useGetUserIntro";

export const ProtectedRoutes = ({ children }) => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated, isUserCreated } = useSelector(get_user_info);
  const { data, error, isLoading, refetch } = useGetUser();
  const { UserIntro, introError, introFetching, introRefetch } =
    useGetUserIntro();

  useEffect(() => {
    if (data && !isAuthenticated && !error && !introError && UserIntro) {
      dispatch(
        update_user_info({
          user_info: { ...data?.data, ...UserIntro?.data[0] },
          isAuthenticated: true,
        })
      );
    }
    if (isUserCreated && (!data || error)) {
      dispatch(remove_user_info());
      refetch();
    }

    if (data && !UserIntro && !error && !introError) introRefetch();
  }, [data, dispatch, error, UserIntro]);

  useEffect(() => {
    if (error) navigate("/signin");
  }, [data, error]);

  if (isLoading) return <Loader />;
  if (error) return <PopUp heading={error}></PopUp>;
  if (isAuthenticated) return children;
};
