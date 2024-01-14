import { createSlice } from "@reduxjs/toolkit";

let userInfoSlice = createSlice({
  name: "User Info",
  initialState: {
    user_info: {},
    isAuthenticated: false,
    isCreating: false,
    error: false,
    isUserCreated: false,
    isSessionExpired: false,
  },

  reducers: {
    update_user_info(currentState, passedArguments) {
      return {
        user_info: passedArguments.payload.user_info,
        isAuthenticated: passedArguments.payload.isAuthenticated,
      };
    },

    update_user_creating(currentState, passedArguments) {
      return {
        ...currentState,
        isCreating: passedArguments.payload,
      };
    },

    update_user_created(currentState, passedArguments) {
      return {
        ...currentState,
        isUserCreated: passedArguments.payload,
      };
    },

    update_user_session(currentState, passedArguments) {
      return {
        ...currentState,
        isSessionExpired: passedArguments.payload,
      };
    },

    update_user_error(currentState, passedArguments) {
      return {
        ...currentState,
        error: passedArguments.payload,
      };
    },

    remove_user_info(currentState,passedArguments) {
      return {
        user_info: {},
        isAuthenticated: false,
      };
    },
  },
});

export let {
  update_user_info,
  remove_user_info,
  update_user_creating,
  update_user_created,
  update_user_session,
  update_user_error,
} = userInfoSlice.actions;

export let userInfo = userInfoSlice.reducer;