import useKernelAuth from 'hooks/useKernelAuth';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout() {
  const { userAuthStatus, bootloaderLoaded, isKernelLoaded, login } =
    useKernelAuth();
  return (
    <React.Fragment>
      <Nav auth={{ userAuthStatus, bootloaderLoaded, isKernelLoaded, login }} />
      <Container>
        <Outlet />
      </Container>
      <Footer />{' '}
    </React.Fragment>
  );
}
