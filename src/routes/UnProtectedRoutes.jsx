import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { get_user_info } from "../redux/store";
import { Loader } from "../ui/PresentationalComponents/Loader";
import { useGetUser } from "./useGetUser";
let loaderClasses = {
  className:
    "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ",
};
export const UnProtectedRoutes = ({ children }) => {
  let navigate = useNavigate();
  const { isAuthenticated, isUserCreated } = useSelector(get_user_info);

  const { data, error, isLoading, refetch } = useGetUser();

  useEffect(() => {
    if (isUserCreated) refetch();
    if (data) navigate("/");
  }, [navigate, data, isUserCreated]);

  if (isLoading) return <Loader {...loaderClasses} />;

  if (!data) return <Outlet />;
};
