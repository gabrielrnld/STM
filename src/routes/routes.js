import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import DetailApartement from "../components/PengelonaanApartement/DetailApartement";
import ListApartement from "../components/PengelonaanApartement/ListApartement";

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
        path: "apartment/:id",
        element: <DetailApartement />,
      },
    ],
  },
]);

export default routes;
