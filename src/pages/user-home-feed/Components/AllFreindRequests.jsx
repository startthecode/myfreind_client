import { useEffect, useState } from "react";
import { useGetAllFreindRequest } from "../../../reactQuerys/useGetAllRequests";
import { FreindRequest } from "../../../ui/PresentationalComponents/FreindRequest";
import {
  useAcceptRequest,
  useDeleteRequest,
} from "../../../reactQuerys/useAcceptDeleteRequest";

let peraAttributes = {
  className: "text-center text-black text-[16px]",
};

export const AllFreindRequests = () => {
  let {
    allFriendRequests,
    freindRequestsLoading,
    freindRequestsFail,
    refetch,
  } = useGetAllFreindRequest();
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
    if (succefullydeleted || succefullyAccepted) {
      refetch();
    }
  }, [succefullydeleted, succefullyAccepted]);

  if (freindRequestsFail || allFriendRequests?.data?.length === 0)
    return <p {...peraAttributes}>No Requests</p>;
  return (
    <div>
      <p {...peraAttributes}>Follow Requests</p>

      {allFriendRequests?.data?.map(({ requestSenders: val }) => (
        <div
          className="px-[15px] mt-[10px]"
          key={val?.UserID}
          id={`incomingRequest_id_${val?.UserID}`}
        >
          <FreindRequest
            relative
            acceptRequest={{
              loader: acceptingRequest,
              callBack: () => acceptRequest({ requestSender: val?.UserID }),
            }}
            deleteRequest={{
              loader: deleteingRequest,
              callBack: () => deleteRequest({ requestSender: val?.UserID }),
            }}
            friendRequestData={{
              userName: val?.Username,
              userDp: val?.userProfile?.UserDp,
            }}
          />
        </div>
      ))}
    </div>
  );
};
