import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';
import { Preloader } from './Components/Common';
import { COOKIE_TOKEN_NAME, getCookie } from './utils/cookie';
import { useAppDispatch } from './hooks/redux-hooks';
import { initializedSuccess } from './Store/Reducers/appSlice';
import { setIsAuth } from './Store/Reducers/authSlice';
import { notifyInit } from './utils/notify';
import './App.scss';
import Crypto from 'pages/Crypto/Crypto';

const Home = React.lazy(() => import('pages/Home/Home'));
const Coins = React.lazy(() => import('pages/Crypto/Coins/Coins'));
const Exchanges = React.lazy(
  () => import('pages/Crypto/Exchanges/Exchanges')
);
const SelectedExchange = React.lazy(
  () => import('pages/Crypto/Exchanges/SelectedExchange/SelectedExchange')
);
const Arbitrage = React.lazy(
  () => import('pages/Crypto/Arbitrage/Arbitrage')
);
const Converter = React.lazy(
  () => import('pages/Crypto/Converter/Converter')
);
const SelectedCoin = React.lazy(
  () => import('pages/Crypto/Coins/SelectedCoin/SelectedCoin')
);
const Articles = React.lazy(() => import('pages/Articles/Articles'));
const Article = React.lazy(() => import('pages/Articles/Article'));
const Contacts = React.lazy(() => import('pages/Contacts/Contacts'));
const Portfolio = React.lazy(() => import('pages/Portfolio/Portfolio'));


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = getCookie(COOKIE_TOKEN_NAME);
    dispatch(setIsAuth(Boolean(user)));
    dispatch(initializedSuccess());
    notifyInit();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="crypto" element={<Crypto />}>
              <Route index element={<Navigate to='/crypto/coins' />} />
              <Route path="coins" element={<Coins />} />
              <Route path="coins/:coinId" element={<SelectedCoin />} />
              <Route path="exchanges" element={<Exchanges />} />
              <Route
                path="exchanges/:exchangeId"
                element={<SelectedExchange />}
              />
              <Route path="arbitrage" element={<Arbitrage />} />
              <Route path="converter" element={<Converter />} />
            </Route>
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:articleId" element={<Article />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
