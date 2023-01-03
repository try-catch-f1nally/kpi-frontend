import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout: FC = () => {
  return (
    <>
      <Header/>
      <main className="flex-grow-1 my-1">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
