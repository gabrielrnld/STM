
import { Outlet } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { appStore } from './reducer/store';
// import { TransactionDummy } from './components/transactions/transactionDummy';
import Footer from './components/layout/Footer';
import Headers from './components/layout/Headers';
import { Container } from 'react-bootstrap';
import ListApartement from './components/PengelonaanApartement/ListApartement';

function App() {
  // const [token, setToken] = useState();


  useEffect(() => {
    setToken(localStorage.getItem('authorization'));
  }, [setToken]);

  if (token && token !== 'undefined') {
    return (
      <div>
        <Headers />
        <Provider store={appStore}>
          <Outlet token={token} />
          {/* <TransactionDummy token={token} /> */}
          {/* <ListApartement /> */}
        </Provider>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Headers />
        <Provider store={appStore}>
          <Outlet setToken={setToken} />
          {/* <Login setToken={setToken} /> */}
        </Provider>
        <Footer />
      </div>
    );
  }
}
export default App;
