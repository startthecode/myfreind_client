import { Row } from "../../../../ui/PresentationalComponents/Row";
import { Comment } from "./Comment";
import { LikeDislike } from "./LikeDislike";
import { Save } from "./Save";
import { Share } from "./Share";

export const PostActions = () => {
  return (
    <Row paddingX={true} vPosition="between">
      <LikeDislike />
      <Comment />
      <Share />
      <Row vPosition="start"></Row>
      <Save />
    </Row>
  );
};
