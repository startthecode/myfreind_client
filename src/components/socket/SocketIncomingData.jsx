import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/SocketProvider";
import { FreindRequest } from "../../ui/PresentationalComponents/FreindRequest";
import {
  useAcceptRequest,
  useDeleteRequest,
} from "../../reactQuerys/useAcceptDeleteRequest";
import { Button } from "../../ui/PresentationalComponents";
import { IncomingMessage } from "../../ui/PresentationalComponents/IncomingMessage";

const SocketIncomingData = () => {
  let [freindRequest, setFreindRequest] = useState(false);
  let [newmessage, setNewmessage] = useState(false);

  let {
    acceptRequest,
    acceptingRequest,
    acceptingRequestFail,
    succefullyAccepted,
  } = useAcceptRequest();
  let {
    deleteRequest,
    deleteingRequest,
    deleteingRequestFail,
    succefullydeleted,
  } = useDeleteRequest();
  let socket = useContext(SocketContext);
  useEffect(() => {
    function setupSocketListeners() {
      //incoming requests
      socket?.current?.on("recieve_friendRequest", (data) => {
        setFreindRequest(data);
      });

      //incoming messages
      socket?.current?.on("recieve_message", (data) => {
        setNewmessage(data)
        console.log(data);
      });
    }

    if (socket?.current?.connected) {
      setupSocketListeners();
    } else {
      socket?.current?.once("connect", () => {
        setupSocketListeners();
      });
    }
  }, []);

  useEffect(() => {
    if (succefullydeleted || succefullyAccepted) setFreindRequest(false);
  }, [succefullyAccepted, succefullydeleted]);

  if (freindRequest)
    return (
      <FreindRequest
        acceptRequest={{
          loader: acceptingRequest,
          callBack: () =>
            acceptRequest({ requestSender: freindRequest.userID }),
        }}
        deleteRequest={{
          loader: deleteingRequest,
          callBack: () =>
            deleteRequest({ requestSender: freindRequest.userID }),
        }}
        friendRequestData={freindRequest}
      />
    );
    if (newmessage)
  return (
 <IncomingMessage newmessage={newmessage} callBack={()=>setNewmessage(false)} link={`/chat/${newmessage?.messageData?.SenderID}`}/>
  );

  return null;
};

export default SocketIncomingData;
