import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/auth/LoginForm";
import { useState } from "react";
import { Provider } from "react-redux";
import { appStore } from "./reducer/store";
import { TransactionDummy } from "./components/transactions/transactionDummy";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <Provider store={appStore}>
        <Login setToken={setToken} />;
      </Provider>
    );
  }

  return (
    <>
      <Provider store={appStore}>
        <TransactionDummy token={token} />
      </Provider>
    </>
  );
}

export default App;
