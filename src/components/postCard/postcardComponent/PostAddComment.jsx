import { ThumbnailCircle } from "../../../ui/PresentationalComponents";
import { Row } from "../../../ui/PresentationalComponents/Row";

export const PostAddComment = () => {
  return (
    <Row vPosition="start" hposition="center" paddingX={true}>
      <ThumbnailCircle size="xxsm">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwBB6EpvkBGkaYHYPokDwyq6KuBl9qAvtAIEj5g_eaugebOM5X"
          className="w-full h-full object-cover object-center"
        />
      </ThumbnailCircle>
      <p className="text-[14px] text-tertiary_text_clr ml-4">
        Add a comment...
      </p>
    </Row>
  );
};
