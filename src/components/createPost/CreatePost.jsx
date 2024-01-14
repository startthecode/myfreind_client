import React, { useState } from "react";
import { Form } from "../../ui/PresentationalComponents/Form";
import Inputs from "../../ui/PresentationalComponents/Inputs";
import { TextArea } from "../../ui/PresentationalComponents/TextArea";
import { Button } from "../../ui/PresentationalComponents";
import { Icon } from "@iconify/react";
import { CommonNav } from "../../ui/LayoutComponents/CommonNav";
import { PostType } from "./PostType";
import { ContentPreview } from "./ContentPreview";
import { useFormDataObj } from "../../hooks/useFormDataObj";
import { useCreatePost } from "./useCreatePost";
import { Loader } from "../../ui/PresentationalComponents/Loader";
import { useParams } from "react-router-dom";

export const CreatePost = () => {
  const [activeTab, setActiveTab] = useState("reel");
  let { error, data, mutate: sharePost, isLoading } = useCreatePost();
  let val = useParams();
  console.log(val);
  function handleSubmit(e) {
    e.preventDefault();
    let formData = useFormDataObj(e.target, { folder_type: activeTab });
    // let newPost = sharePost(formData);
    // console.log(formData);
    console.log(val);
  }

  const formFinalAttributes = {
    className:
      "h-full fixed top-0 left-0 w-full bg-white px-[15px] flex flex-col  pb-[10%] pt-[1%] overflow-y-scroll",
    onSubmit: handleSubmit,
  };
  const headingClasses = {
    className: "text-[18px] font-medium ",
  };

  return (
    <Form {...formFinalAttributes}>
      <CommonNav column={4} leftArrow={true}>
        <h1 {...headingClasses}>New post</h1>
      </CommonNav>
      <ContentPreview />
      <div>
        <PostType setActiveTab={setActiveTab} activeTab={activeTab} />
        <TextArea placeholder="Write a caption" name="postcaption"></TextArea>
        {isLoading ? (
          <Loader className="!h-[60px] !w-[80px] " />
        ) : (
          <Button size="md" type="submit">
            Share
          </Button>
        )}
      </div>
    </Form>
  );
};
