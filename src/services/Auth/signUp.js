import axios from "axios";

export async function signUp(credentials) {
  try {
    let updateUserInfo = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_BASE_URL}signup`,
      data: credentials,
      withCredentials: true,
    });

    // Assuming you want the response data
    let updatedUser = updateUserInfo.data;
    console.log(updatedUser);
    return updatedUser;
  } catch (error) {
    // Handle the error appropriately
    throw error?.response?.data?.error;
  }

  // console.log(data);
}
