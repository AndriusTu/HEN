import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
        <Header />
        <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between max-w-[1400px] mx-auto md:px-5 w-full mt-7">
          <Sidebar />
          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start md:mt-0 p-[19px] rounded-[25px] w-full h-[797px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
