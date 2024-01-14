import { useContext, useEffect } from "react";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { useGetAllPosts } from "../../useGetAllPosts";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";
import { GridView } from "./profile-gridView/GridView";
import { ListView } from "./profile-listView/ListView";

export const User_latest_posts = () => {
  let { UserID } = useContext(OtherProfileContext)?.profile_data ?? {};
  let { data: allPosts, isLoading, isError, refetch } = useGetAllPosts(UserID);

  useEffect(() => {
    if (!allPosts) refetch(UserID);
    console.log("Refetching");
  }, [UserID]);

  if (isLoading) return <Loader />;
  if (allPosts)
    return (
      <>
        <GridView gridFor="others_latest_posts" post_list={allPosts?.data} />
        <ListView listFor="others_latest_posts" post_list={allPosts?.data} />
      </>
    );
};
