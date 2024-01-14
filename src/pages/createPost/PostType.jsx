import React from "react";

export const PostType = ({setpost_type,post_type}) => {
  const headingClasses = {
    className: "text-[16px] mr-4 mb-3 ",
  };
  const ulClasses = {
    className: "flex mb-8 items-center ",
  };

  

  return (
    <>
      <h2 {...headingClasses}>Post as</h2>
      <ul {...ulClasses}>
        <li
          className={`text-[14px] text-black px-[18px] capitalize mr-5 py-2 rounded-[20px] bg-tertiary_clr ${
            post_type === "reel" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setpost_type("reel")}
        >
          reel
        </li>
        <li
          className={`text-[14px] text-black px-[18px] capitalize mr-5 py-2 rounded-[20px] bg-tertiary_clr ${
            post_type === "image" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setpost_type("image")}
        >
          Image
        </li>
        <li
          className={`text-[14px] text-black px-[18px] capitalize mr-5 py-2 rounded-[20px] bg-tertiary_clr ${
            post_type === "video" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setpost_type("video")}
        >
          Video
        </li>

        <li
          className={`text-[14px] text-black px-[18px] capitalize mr-5 py-2 rounded-[20px] bg-tertiary_clr ${
            post_type === "story" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setpost_type("story")}
        >
          Story
        </li>
      </ul>
    </>
  );
};

