import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Preloader } from 'Components/Common';
import { Footer } from 'Components';
import { Header } from 'Components';

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
