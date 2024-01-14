import { PostCard } from "../../../components/postCard/PostCard";
import { usePostFromFollowedUser } from "../../../reactQuerys/usePostFromFollowedUser";
import { Loader } from "../../../ui/PresentationalComponents/Loader";

export const HomeFeeds = () => {
  let { allPosts, postIsLoading, postFetchFail, refetch } =
    usePostFromFollowedUser();
    if(postFetchFail) return <h3 className="text-center text-[14px] mt-40">unable load Posts 😔</h3>
    if(postIsLoading) return <Loader className="mt-40"/>
  return <div className="mb-[80px]">

{allPosts?.data?.map((post) => (
              <PostCard key={post?.PostID} post={post} />
            ))}

  </div>;
};
