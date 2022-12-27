import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Components/Header/Header';
import { Preloader } from './Components/Common';
import { COOKIE_TOKEN_NAME, getCookie } from './utils/cookie';
import { useAppDispatch } from './Store/hooks';
import { initializedSuccess } from './Store/Reducers/appSlice';
import { setIsAuth } from './Store/Reducers/authSlice';
import { notifyInit } from './utils/notify';
import './App.scss';

const Home = React.lazy(() => import('./Components/Home/Home'));
const Coins = React.lazy(() => import('./Components/Crypto/Coins/Coins'));
const Exchanges = React.lazy(
  () => import('./Components/Crypto/Exchanges/Exchanges')
);
const SelectedExchange = React.lazy(
  () => import('./Components/Crypto/Exchanges/SelectedExchange')
);
const Arbitrage = React.lazy(
  () => import('./Components/Crypto/Arbitrage/Arbitrage')
);
const Converter = React.lazy(
  () => import('./Components/Crypto/Converter/Converter')
);
const SelectedCoin = React.lazy(
  () => import('./Components/Crypto/Coins/SelectedCoin')
);
const ArticlesPage = React.lazy(
  () => import('./Components/ArticlesPage/ArticlesPage')
);
const Article = React.lazy(() => import('./Components/ArticlesPage/Article'));
const Contacts = React.lazy(() => import('./Components/Contacts/Contacts'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));

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
      <Header />
      <main>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/coins/:coinId" element={<SelectedCoin />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route
              path="/exchanges/:exchangeId"
              element={<SelectedExchange />}
            />
            <Route path="/arbitrage" element={<Arbitrage />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:articleId" element={<Article />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
};
