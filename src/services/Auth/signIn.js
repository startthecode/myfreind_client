import axios from "axios";
import { async } from "regenerator-runtime";

export async function signIn(credentials) {
  try {
    let verifyCredentials = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_BASE_URL}signin`,
      withCredentials: true,
      data: credentials,
    });
    let verification = verifyCredentials;
    return verification;
  } catch (err) {
    throw err?.response?.data?.error;
  }
}
