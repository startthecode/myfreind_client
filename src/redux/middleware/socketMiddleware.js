
export const socketMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    // Handle socket-related actions
    case "CONNECT_SOCKET":
      // Connect logic
      break;
    case "DISCONNECT_SOCKET":
      // Disconnect logic
      break;
    case "EMIT_EVENT":
      // Emit event logic
      break;
    default:
      break;
  }

  return next(action);
};
