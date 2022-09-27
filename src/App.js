import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Headers from './components/layout/Headers';

function App() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
