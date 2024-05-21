import Header from '@/components/reusables/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* -----ADD FOOTER -------- */}
    </>
  );
};

export default MainLayout;
