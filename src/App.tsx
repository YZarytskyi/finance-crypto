import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Crypto from "./Components/Crypto/Crypto";
import Home from "./Components/Home/Home";
import Articles from "./Components/ArticlesPage/ArticlesPage";
import Article from "./Components/ArticlesPage/Article";
import Contacts from "./Components/Contacts/Contacts";
import SelectedCoin from "./Components/Crypto/Coins/SelectedCoin";
import Arbitrage from "./Components/Crypto/Arbitrage/Arbitrage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Exchanges from "./Components/Crypto/Exchanges/Exchanges";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto/coins" element={<Crypto />} />
            <Route path="/crypto/arbitrage" element={<Arbitrage />} />
            <Route path="/crypto/exchanges" element={<Exchanges />} />
            <Route path="/crypto/coins/:coinId" element={<SelectedCoin />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<Article />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
