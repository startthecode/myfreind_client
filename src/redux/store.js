import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userInfo } from "./user_Info_Slice";

export let store = configureStore({
  reducer: { user_info: userInfo },
});

export let get_user_info = (state) => state.user_info;
