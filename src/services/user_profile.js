import axios from "axios";

export let updateUserProfile = async (userDtl) => {
  try {
    let updatingProfile = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/update`,
      withCredentials: true,
      data: userDtl,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    let isUpdated = updatingProfile;
    if (isUpdated.status === 204) throw new Error("Nothing is updated");
    return isUpdated;
  } catch (err) {
    throw err.message;
  }
};

export let chngeAccountPrivacy = async (accountStatus) => {
  try {
    let updatingProfile = await axios({
      method: "PUT",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/update/privacystatus`,
      withCredentials: true,
      data: accountStatus,
    });

    let isUpdated = updatingProfile;
    if (isUpdated.status === 204) throw new Error("Nothing is updated");
    return isUpdated;
  } catch (err) {
    throw err.message;
  }
};

export let getAccountPrivacy = async (accountStatus) => {
  try {
    let updatingProfile = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/privacystatus`,
      withCredentials: true,
    });

    let isUpdated = updatingProfile;
    if (isUpdated.status === 204) throw new Error("Nothing is updated");
    return isUpdated;
  } catch (err) {
    throw err.message;
  }
};

export let getUserIntro = async () => {
  try {
    let updatingProfile = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/intro`,
      withCredentials: true,
    });

    let isUpdated = updatingProfile;
    if (isUpdated.status === 204) throw new Error("Nothing is updated");
    return isUpdated;
  } catch (err) {
    throw err.message;
  }
};

export let getUserProfile = async () => {
  try {
    let getUserProfile = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/alldata`,
      withCredentials: true,
    });

    return getUserProfile;
  } catch (err) {
    throw err.message;
  }
};

export let getUserOverview = async (newval) => {
  const [, userid] = newval.queryKey;

  try {
    let userOverview = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/useroverview`,
      withCredentials: true,
      params: {
        userid: userid,
      },
    });
    return userOverview;
  } catch (err) {
    return err.message;
  }
};

// Friends profile or others profile

export let getOthersProfile = async (username) => {
  try {
    let getOthersProfile = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/others/${
        username.queryKey[1]
      }`,
      withCredentials: true,
    });

    return getOthersProfile;
  } catch (err) {
    throw err.message;
  }
};

// search for users
export let searchUsers = async (username) => {
  try {
    let getOthersProfile = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_BASE_URL}profile/search/${
        username.queryKey[1]
      }`,
      withCredentials: true,
    });

    return getOthersProfile;
  } catch (err) {
    throw err.message;
  }
};
