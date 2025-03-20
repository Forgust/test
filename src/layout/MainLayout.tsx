import React, { FC } from 'react';
import { Header } from '../components/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';

export const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
