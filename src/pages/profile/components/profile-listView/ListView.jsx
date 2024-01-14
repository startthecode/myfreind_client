import { useContext, useEffect } from "react";
import { ListHeader } from "./ListHeader";
import { ListViewContext } from "../compoentent_contextsApi/ListViewContext";
import { scrollIntoView } from "../../../../hooks/scrollIntoView";
import { PostCard } from "../../../../components/postCard/PostCard";
import SlideUpMenu from "../../../../ui/PresentationalComponents/SlideUpMenu";

export const ListView = ({ listFor = true, post_list }) => {
  let { listView } = useContext(ListViewContext);

  useEffect(() => {
    if (listView.id) {
      scrollIntoView(listView.id, listView.listFor);
    }
  }, [listView?.id]);

  let viewClasses = {
    className: `bg-white fixed top-0 ${
      listView.listFor === listFor ? "left-[0]" : "left-[-100%]"
    } w-full z-[10] h-screen max-h-screen overflow-y-auto duration-500 pb-[70px] scroll-smooth`,
    id: listFor,
  };

  return (
    <div {...viewClasses}>
      {listView.listFor == listFor && (
        <>
          <ListHeader />
          <div>
            {post_list.map((post) => (
              <PostCard key={post.PostID} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
