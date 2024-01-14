import { Icon } from "@iconify/react";
import { ThumbnailCircle } from "../../../../ui/PresentationalComponents";
import { Row } from "../../../../ui/PresentationalComponents/Row";
import { useContext } from "react";
import { EachPostProvider } from "../../PostCard";
import { EditPost } from "../postActions/EditPost";

const userProfileClasses = {
  className: "w-full h-full object-cover object-center",
};

const userUsername = {
  className: "text-[16px] ml-4",
};

export const PostHeader = () => {
  let { post } = useContext(EachPostProvider);

  return (
    <Row vPosition="between" paddingX={true} hposition="center">
      <Row vPosition="start">
        <ThumbnailCircle size="xsm">
          <img
            {...userProfileClasses}
            src={`${import.meta.env.VITE_IMAGE_URL}/${
              post?.User?.userProfile?.UserDP
            }`}
          />
        </ThumbnailCircle>
        <h5 {...userUsername}>{post?.User?.UserName}</h5>
      </Row>
      <EditPost post={post} />
    </Row>
  );
};
