import { Outlet } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/LoginForm";
import { useState } from "react";
import { Provider } from "react-redux";
import { appStore } from "./reducer/store";
import { TransactionDummy } from "./components/transactions/transactionDummy";
import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Headers";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return (
  //     <Provider store={appStore}>
  //       <Login setToken={setToken} />;
  //     </Provider>
  //   );
  // }

  return (
    <>
      <Headers />
      <Provider store={appStore}>
        <Outlet />
      </Provider>
      <Footer />
    </>
  );
}

export default App;
