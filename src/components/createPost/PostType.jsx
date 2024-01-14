import React from "react";

export const PostType = ({setActiveTab,activeTab}) => {
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
            activeTab === "reel" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setActiveTab("reel")}
        >
          reel
        </li>
        <li
          className={`text-[14px] text-black px-[18px] capitalize mr-5 py-2 rounded-[20px] bg-tertiary_clr ${
            activeTab === "Image" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setActiveTab("Image")}
        >
          Image
        </li>
        <li
          className={`text-[14px] text-black px-[18px] capitalize mr-5 py-2 rounded-[20px] bg-tertiary_clr ${
            activeTab === "Video" ? "text-white" : "bg-opacity-20"
          }`}
          onClick={() => setActiveTab("Video")}
        >
          Video
        </li>
      </ul>
    </>
  );
};

