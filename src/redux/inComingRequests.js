import { createSlice } from "@reduxjs/toolkit";


const inComingRequestsSlice = createSlice({
  name: "socket",
  initialState: { socket: null },
  reducers: {
    // setIncomingRequestsSocket: (state, action) => {
    //   state.socket = action.payload.data;
    // },
  },
});

export let inComingRequests = inComingRequestsSlice.reducer;
// export let { setIncomingRequestsSocket } = inComingRequestsSlice.actions;
