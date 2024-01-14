import { io } from "socket.io-client";

export const socketService = () => {
  return io(import.meta.env.VITE_SCOKET_URL);
};
