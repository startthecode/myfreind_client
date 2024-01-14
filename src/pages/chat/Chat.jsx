import { useEffect } from "react";

import { Outlet, useParams } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { ChatList } from "./components/chatList/ChatList";

export const Chat = () => {
  let { userid } = useParams() ?? {};
  useEffect(() => {
    document.body.classList.add("bg-gradient-to-r");
    document.body.classList.add("from-[#8073da]");
    document.body.classList.add("to-[#897de3]");
    document.body.classList.add("bg-secondary_clr");

    return () => {
      document.body.classList.remove("bg-gradient-to-r");
      document.body.classList.remove("from-[#8073da]");
      document.body.classList.remove("to-[#897de3]");
      document.body.classList.remove("bg-secondary_clr");
  
    };
  }, []);

  return (
    <div className=" group white bg-gradient-to-r from-[#8073da] to-[#897de3]">
      <Header />
      {!userid && <ChatList />}
      <Outlet />
    </div>
  );
};
