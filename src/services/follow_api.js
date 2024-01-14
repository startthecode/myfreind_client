import axios from "axios";

export let followUser = async (dataToBeAdded) => {
  try {
    let newFollower = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/follow`,
      data: dataToBeAdded,
      withCredentials: true,
    });
    return newFollower;
  } catch (e) {
    throw e;
  }
};

export let unfollowUser = async (dataToBeAdded) => {
  try {
    let newFollower = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/unfollow`,
      data: dataToBeAdded,
      withCredentials: true,
    });
    return newFollower;
  } catch (e) {
    throw e;
  }
};

export let sendFriendRequest = async (requestReceiver) => {
  try {
    let sendRequest = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/sendrequest`,
      withCredentials: true,
      data: requestReceiver,
    });

    return sendRequest;
  } catch (err) {
    throw err.message;
  }
};

export let unSendFriendRequest = async (requestReceiver) => {
  try {
    let unSendRequest = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/unsendrequest`,
      withCredentials: true,
      data: requestReceiver,
    });

    return unSendRequest;
  } catch (err) {
    throw err.message;
  }
};

export let acceptFriendRequest = async (requestSender) => {
  try {
    let acceptRequest = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/acceptrequest`,
      withCredentials: true,
      data: requestSender,
    });

    return acceptRequest;
  } catch (err) {
    throw err.message;
  }
};

export let deleteFriendRequest = async (requestSender) => {
  try {
    let deleteRequest = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/deletetrequest`,
      withCredentials: true,
      data: requestSender,
    });

    return deleteRequest;
  } catch (err) {
    throw err.message;
  }
};

export let friendRequestStatus = async (requestReceiver) => {
  console.log(requestReceiver.queryKey[1]);
  try {
    let requestStatus = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/requestStatus/${requestReceiver.queryKey[1]}`,
      withCredentials: true,
    });

    return requestStatus;
  } catch (err) {
    throw err.message;
  }
};

export let getAllFreindRequest = async (requestReceiver) => {
  try {
    let allRequests = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/getallrequests`,
      withCredentials: true,
    });
    return allRequests;
  } catch (err) {
    throw err.message;
  }
};

export let getFreindRequestCount = async () => {
  try {
    let allRequests = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}follow-action/request-count`,
      withCredentials: true,
    });
    return allRequests;
  } catch (err) {
    throw err.message;
  }
};
