import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { appStore } from "./reducer/store";
import { TransactionDummy } from "./components/transactions/transactionDummy";
import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Headers";
import { Container } from "react-bootstrap";
import ListApartement from "./components/PengelonaanApartement/ListApartement";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("authorization"));
  }, []);

  if (token && token !== "undefined") {
    return (
      <Container fluid>
        <Headers />
        <Provider store={appStore}>
          {/* <TransactionDummy token={token} /> */}
          <ListApartement />
        </Provider>
        <Footer />
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <Headers />
        <Provider store={appStore}>
          <Login setToken={setToken} />;
        </Provider>
        <Footer />
      </Container>
    );
  }
}
export default App;
