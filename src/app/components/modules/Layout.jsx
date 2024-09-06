import React from 'react';
import Header from '../constants/header';
import Footer from '../constants/footer';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className=''>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;