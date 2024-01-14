import { createContext, useEffect, useState } from "react";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { useGetOthersProfile } from "../useGetOthersProfile";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { get_user_info } from "../../../redux/store";

export let OtherProfileContext = createContext();
export const OtherProfileProvider = ({ children }) => {
  let query = useParams();
  let { username } = query;
  let { UserID: senderUserID,UserName } = useSelector(get_user_info).user_info;
  if(UserName === username) return <Navigate to='/my-profile' />
  let { profileData, isLoading, isError } = useGetOthersProfile(username);
  let [profile_data, setdata] = useState(false);

  useEffect(() => {
    setdata(profileData?.data);
  }, [profileData]);
  
  if (isLoading) return <Loader />;
  if (isError) <Navigate to={"/"} />;

  return (
    <OtherProfileContext.Provider
      value={{ profile_data: profile_data, update_data: setdata }}
    >
      {children}
    </OtherProfileContext.Provider>
  );
};
