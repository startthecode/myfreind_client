import axios from "axios";

export async function signingStatus() {
  try {
    let status = await axios({
      method: "get",
      url: `${import.meta.env.VITE_API_BASE_URL}isAuthenticated`,
      withCredentials: true,
    });

    let user = status;

    return user;
  } catch (error) {
    return Promise.reject(error?.response?.data);
  }
}
