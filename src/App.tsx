import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";
import Article from "./Components/ArticlesPage/Article";
import Contacts from "./Components/Contacts/Contacts";
import SelectedCoin from "./Components/Crypto/Coins/SelectedCoin";
import Arbitrage from "./Components/Crypto/Arbitrage/Arbitrage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Exchanges from "./Components/Crypto/Exchanges/Exchanges";
import Coins from "./Components/Crypto/Coins/Coins";
import Header from "./Components/Header/Header";
import Converter from "./Components/Crypto/Converter/Converter";


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
        </main>
    </ThemeProvider>
  );
};

export default App;
