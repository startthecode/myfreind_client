import axios from "axios";

export let sendMessage = async (messageData) => {
  try {
    let sendingMessage = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}chat/sendMessage`,
      withCredentials: true,
      data: messageData,
    });
    return sendingMessage;
  } catch (e) {
    return e.message;
  }
};

export let getAllConversations = async () => {
  try {
    let gettingConversations = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}chat/all`,
      withCredentials: true,
    });
    return gettingConversations;
  } catch (e) {
    return e.message;
  }
};

export let getConversationDTL = async (userid) => {
  try {
    let gettingConversationDTL = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}chat/conversation-dtl/${
        userid?.queryKey[1]
      }`,
      withCredentials: true,
    });
    return gettingConversationDTL;
  } catch (e) {
    return e.message;
  }
};

export let getPersonalChats = async (participantid) => {
  try {
    let allPresonalChats = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}chat/personal/${
        participantid?.queryKey[1]
      }`,
      withCredentials: true,
    });
    return allPresonalChats;
  } catch (e) {
    return e.message;
  }
};

export let getUnseenConversationsCount = async () => {
  try {
    let count = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}chat/unseen-count`,
      withCredentials: true,
    });
    return count;
  } catch (e) {
    return e.message;
  }
};
