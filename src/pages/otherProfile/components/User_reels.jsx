import { useContext, useEffect, useState } from "react";
import { Loader } from "../../../ui/PresentationalComponents/Loader";
import { GridView } from "./profile-gridView/GridView";
import { ListView } from "./profile-listView/ListView";
import { useGetAllPosts } from "../../useGetAllPosts";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";

export const User_reels = () => {
  let { UserID } = useContext(OtherProfileContext)?.profile_data ?? {};
  let { data: reels, isLoading, isError, refetch } = useGetAllPosts(UserID);
  let reelsList = reels?.data?.filter((val) => val.PostType === "reel") ?? [];

  useEffect(() => {
    if (!reels) refetch(UserID);
    console.log("Refetching");
  }, [UserID]);

  if (isLoading) return <Loader />;
  if (reelsList.length === 0)
    return (
      <h3 className="text-[20px] text-primary_text_clr mt-[30px] text-center">
        No Reels uploaded yet 😔
      </h3>
    );
  return (
    <>
      <GridView gridFor="user_reels" post_list={reelsList} />
      <ListView listFor="user_reels" post_list={reelsList} />
    </>
  );
};
