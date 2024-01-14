import axios from "axios";
import { useDispatch } from "react-redux";
import { update_user_session } from "../redux/user_Info_Slice";

export let axiosWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export function chk() {
  let dispatch = useDispatch();
  axiosWithAuth.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let { response } = error;
      // let dispatch = useDispatch();
      if (response.data === "user not found" && response.status === 401) {
        dispatch(update_user_session(true));
        console.log("working");
      }
      return Promise.reject(error);
    }
  );
}
