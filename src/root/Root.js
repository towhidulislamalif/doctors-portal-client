import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../pages/shared/Footer';
import Navigation from '../pages/shared/Navigation';

function Root() {
  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
}

export default Root;
