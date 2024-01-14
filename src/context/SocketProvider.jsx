import React, { useState } from "react";
import { createContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "../redux/store";
import { socketService } from "../services/sockets/socketService";

export let SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  let [randomNumber, setRandomNumber] = useState();
  let { UserID, UserName, UserDP } =
    useSelector(get_user_info)?.user_info ?? {};

  let socket = useRef();
  useEffect(() => {
    if (UserID) {
      let user = { userID: UserID, userName: UserName, userDp: UserDP };
      socket.current = socketService();
      socket?.current?.on("connect", () => {
        socket?.current?.emit("new_user_add", user);
        console.log("connected");
      });

      return () => {
        socket?.current?.disconnect();
      };
    }
  }, [UserID]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
