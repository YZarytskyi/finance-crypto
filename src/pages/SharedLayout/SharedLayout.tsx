import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Preloader } from '../../Components/Common';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';

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
