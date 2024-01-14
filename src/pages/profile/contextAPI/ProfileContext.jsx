import { createContext, useEffect, useState } from "react";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { useGetUserProfile } from "../useGetUserProfile";
import PopUp from "../../../ui/PresentationalComponents/PopUp";

export let ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
  let [profile_data, setdata] = useState(false);
  let { data, isLoading, isError, refetch } = useGetUserProfile();
  useEffect(() => {
    console.log(data);
    setdata(data?.data[0]);
  }, [data]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <PopUp heading={isError.message}>
        <PopUp.OtherLinks text="Go back to home" link={"/"}></PopUp.OtherLinks>
      </PopUp>
    );
    console.log(profile_data)
  if (profile_data)
    return (
      <ProfileContext.Provider
        value={{ profile_data: profile_data, update_data: setdata }}
      >
        {children}
      </ProfileContext.Provider>
    );
};
