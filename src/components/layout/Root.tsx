import React from 'react';
import MainHeader from '../ui/MainHeader';
import { Outlet } from 'react-router-dom';
import MainSidebar from '../ui/MainSidebar';

// interface RootProps {
//   children?: React.ReactNode;
// }
const Root = () => {
  return (
    <>
      <MainHeader />
      <MainSidebar />
      <Outlet />
    </>
  );
};

export default Root;
