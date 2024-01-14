import { useContext, useEffect, useState } from "react";
import { OtherProfileContext } from "../contextAPI/OtherProfileProvider";
import { FreindRequest } from "../../../ui/PresentationalComponents/FreindRequest";
import {
  useAcceptRequest,
  useDeleteRequest,
} from "../../../reactQuerys/useAcceptDeleteRequest";

export const InroNotification = () => {
  let { isRequestingME, UserID, userProfile, UserName } =
    useContext(OtherProfileContext)?.profile_data ?? {};
  let user = {
    userID: UserID,
    userName: UserName,
    userDp: userProfile?.UserDP,
  };
  let [freindRequest, setFreindRequest] = useState(true);

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

  useEffect(() => {
    if (succefullydeleted || succefullyAccepted) setFreindRequest(false);
  }, [succefullyAccepted, succefullydeleted]);

  if (isRequestingME && freindRequest)
    return (
      <FreindRequest
        acceptRequest={{
          loader: acceptingRequest,
          callBack: () => acceptRequest({ requestSender: UserID }),
        }}
        deleteRequest={{
          loader: deleteingRequest,
          callBack: () => deleteRequest({ requestSender: UserID }),
        }}
        friendRequestData={user}
      />
    );
};
