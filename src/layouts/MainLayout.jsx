import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/ReactToastify.css';
import Navbar from '../components/Navbar';

const mainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
  
    </>
  )
}

export default mainLayout;
