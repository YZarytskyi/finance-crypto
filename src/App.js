import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Crypto from "./Components/Crypto/Crypto";
import Home from "./Components/Home/Home";
import Finance from "./Components/Finance/Finance";
import Articles from "./Components/ArticlesPage/ArticlesPage";
import Article from "./Components/ArticlesPage/Article";
import Contacts from "./Components/Contacts/Contacts";
import Coin from "./Components/Crypto/Coins/Coin";
import Coins from "./Components/Crypto/Coins/Coins";
import Arbitrage from "./Components/Crypto/Arbitrage/Arbitrage";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/crypto/arbitrage" element={<Arbitrage />} />
          <Route path="/crypto/coins" element={<Coins />} />
          <Route path="/crypto/coins/:coinId" element={<Coin />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
