import { useContext, useEffect, useState } from "react";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { GridView } from "./profile-gridView/GridView";
import { ListView } from "./profile-listView/ListView";
import { useGetAllPosts } from "../../useGetAllPosts";
import { ProfileContext } from "../contextAPI/ProfileContext";

export const User_latest_posts = () => {
  let { UserID } = useContext(ProfileContext)?.profile_data;
  let { data: allPosts, isLoading, isError, refetch } = useGetAllPosts(UserID);

  useEffect(() => {
    if (!allPosts) refetch(UserID);
    console.log("Refetching");
  }, [UserID]);

  if (isLoading) return <Loader />;
  if (allPosts)
    return (
      <>
        <GridView gridFor="latest_posts" post_list={allPosts?.data} />
        <ListView listFor="latest_posts" post_list={allPosts?.data} />
      </>
    );
};
