import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
