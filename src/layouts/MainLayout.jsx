import { Outlet } from 'react-router-dom';
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
