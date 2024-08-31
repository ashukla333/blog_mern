import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='!h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;