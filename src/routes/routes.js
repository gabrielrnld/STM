import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/home/Home';
import Login from '../components/login/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default routes;
