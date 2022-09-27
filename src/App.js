import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import { useState } from "react";
import { Provider } from "react-redux";
import { appStore } from "./reducer/store";
import { TransactionDummy } from "./components/transactions/transactionDummy";
import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Headers";
import { Container } from "react-bootstrap";

function App() {
  const [token, setToken] = useState();
  // console.log(token);
  if (token && token !== "undefined") {
    return (
      <>
        <Headers />
        <Provider store={appStore}>
          <TransactionDummy token={token} />
        </Provider>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Container fluid>
          <Headers />
          <Provider store={appStore}>
            <Login setToken={setToken} />;
          </Provider>
          <Footer />
        </Container>
      </>
    );
  }
}
export default App;
