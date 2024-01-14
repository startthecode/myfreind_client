import { Provider, useSelector } from "react-redux";
import { AllRoutes } from "./routes/AllRoutes";
import { store as user_info } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { SocketProvider } from "./context/SocketProvider";


let queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={user_info}>
          <SocketProvider>
              <AllRoutes />
          </SocketProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
