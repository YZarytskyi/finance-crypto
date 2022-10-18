import "./App.scss";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Components/Header/Header";
import PreloaderMain from "./Components/Common/PreloaderMain";
// import Home from "./Components/Home/Home";
// import Coins from "./Components/Crypto/Coins/Coins";
// import Exchanges from "./Components/Crypto/Exchanges/Exchanges";
// import Arbitrage from "./Components/Crypto/Arbitrage/Arbitrage";
// import Converter from "./Components/Crypto/Converter/Converter";
// import SelectedCoin from "./Components/Crypto/Coins/SelectedCoin";
// import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";
// import Article from "./Components/ArticlesPage/Article";
// import Contacts from "./Components/Contacts/Contacts";

const Home = React.lazy(() => import("./Components/Home/Home"));
const Coins = React.lazy(() => import("./Components/Crypto/Coins/Coins"));
const Exchanges = React.lazy(
  () => import("./Components/Crypto/Exchanges/Exchanges")
);
const Arbitrage = React.lazy(
  () => import("./Components/Crypto/Arbitrage/Arbitrage")
);
const Converter = React.lazy(
  () => import("./Components/Crypto/Converter/Converter")
);
const SelectedCoin = React.lazy(
  () => import("./Components/Crypto/Coins/SelectedCoin")
);
const ArticlesPage = React.lazy(
  () => import("./Components/ArticlesPage/ArticlesPage")
);
const Article = React.lazy(() => import("./Components/ArticlesPage/Article"));
const Contacts = React.lazy(() => import("./Components/Contacts/Contacts"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Header />
        <main>
          <Suspense fallback={<PreloaderMain />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crypto/coins" element={<Coins />} />
              <Route path="/crypto/exchanges" element={<Exchanges />} />
              <Route path="/crypto/arbitrage" element={<Arbitrage />} />
              <Route path="/crypto/converter" element={<Converter />} />
              <Route path="/crypto/coins/:coinId" element={<SelectedCoin />} />
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

export default App;
