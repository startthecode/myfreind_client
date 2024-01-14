import React, { useContext } from "react";
import { ListViewContext } from "../../contexts/ListViewContext";

export const GridBlocks = ({ post }) => {
  let { open, close, listView } = useContext(ListViewContext);

  let { post_thumnail, post_type, id } = post;
  return (
    <div className="basis-4/12 px-[1px] py-[1px]" id={id} key={id}>
      <img
        src={post_thumnail}
        id=""
        alt=""
        className="h-[150px] w-full object-cover"
        onClick={() => open(id, 'type')}
      />
    </div>
  );
};
