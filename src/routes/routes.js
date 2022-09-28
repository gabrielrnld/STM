import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import { Transaksi } from "../components/layout/Transaksi/Transaksi";
import Login from "../components/login/Login";
import ListApartement from "../components/PengelonaanApartement/ListApartement";
import DetailApartement from "../components/PengelonaanApartement/DetailApartement";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "list-apartments",
        element: <ListApartement />,
      },
      {
        path: "transaksi",
        element: <Transaksi />,
      },
    ],
  },
]);

export default routes;
