import React, { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useFormDataObj } from "../../hooks/useFormDataObj";
import { useCreatePost } from "./useCreatePost";
import { CommonNav } from "../../ui/LayoutComponents/CommonNav";
import { ContentPreview } from "./ContentPreview";
import { Form } from "../../ui/PresentationalComponents/Form";
import { Loader } from "../../ui/PresentationalComponents/Loader";
import PopUp from "../../ui/PresentationalComponents/PopUp";
import { PostFields } from "./PostFields";
import { PostType } from "./PostType";
import { StoryHiglightDtl } from "./StoryHiglightDtl";
import { Button } from "../../ui/PresentationalComponents/Button";
import { useGetSinglePost } from "../../components/postCard/useGetSinglePost";
import { useUpdatePost } from "../../components/postCard/useUpdatePost";

export const CreatePost = () => {
  let { post_type: creationType } = useParams();
  let { postid: postToBeupdated } = useParams();
  const [postType, setPostType] = useState(creationType);
  const [error, setError] = useState(false);
  const {
    error: createPostError,
    data,
    mutate: sharePost,
    isLoading,
  } = useCreatePost();

  const { updateThePost, isSuccess, postIsUpdating, postUpdateFail } =
    useUpdatePost();
  const { postData, postIsLoading, isError } = creationType
    ? {}
    : useGetSinglePost(postToBeupdated);

  const formFinalAttributes = {
    className:
      "h-full fixed top-0 left-0 w-full bg-white px-[15px] flex flex-col pb-[10%] pt-[1%] overflow-y-scroll",
    onSubmit: handleSubmit,
  };

  const headingClasses = {
    className: "text-[18px] font-medium",
  };

  useEffect(() => {
    if (!error) {
      setError(createPostError);
    }
  }, [createPostError]);

  function handleSubmit(e) {
    e.preventDefault();
    if (postToBeupdated) {
      const formData = useFormDataObj(e.target, {
        postid: postData?.data?.PostID,
        folder_type: postData?.data?.PostType,
      });
      console.log(formData);
      return updateThePost(formData);
    }

    const formData = useFormDataObj(e.target, { folder_type: postType });
    sharePost(formData);
  }
  if (postIsLoading) return <Loader className="mt-[40vh]" />;
  if (data) return <Navigate to="/" replace={true} />;
  if (isSuccess) return <Navigate to="/my-profile" replace={true} />;
  if (isError) return <Navigate to="/" replace={true} />;
  if (error || postUpdateFail) {
    return (
      <PopUp heading={createPostError.message}>
        <PopUp.OtherButtons text="Try Again" onClick={() => setError(false)} />
      </PopUp>
    );
  }

  return (
    <>
      <Form {...formFinalAttributes}>
        <CommonNav column={4} leftArrow={true}>
          <h1 {...headingClasses}>
            {postToBeupdated ? "Update post" : "New post"}
          </h1>
        </CommonNav>

        <ContentPreview postType={postType} postToBeUpdated={postData?.data} />

        <div>
          {!postToBeupdated && (
            <PostType post_type={postType} setpost_type={setPostType} />
          )}
          <StoryHiglightDtl post_type={postType} />
          <PostFields post_type={postType} postToBeUpdated={postData?.data} />
          {isLoading || postIsUpdating ? (
            <Loader className="!h-[60px] !w-[80px]" />
          ) : (
            <Button size="md" type="submit">
              {postToBeupdated ? "Update" : "Share"}
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};
