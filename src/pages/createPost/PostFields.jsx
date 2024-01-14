import React from "react";
import { TextArea } from "../../ui/PresentationalComponents/TextArea";

export const PostFields = ({ post_type, postToBeUpdated = false }) => {
  return (
    <div>
      {post_type !== "story" && (
        <TextArea
          placeholder="Write a caption"
          name="postcaption"
          defaultValue={
            postToBeUpdated?.PostCaption ? postToBeUpdated?.PostCaption : ""
          }
          required
        />
      )}
    </div>
  );
};
