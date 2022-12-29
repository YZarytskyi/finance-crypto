import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Preloader } from '../../components/Common';
import { Footer } from '../../components';
import { Header } from '../../components';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
