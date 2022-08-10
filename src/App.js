import "./App.css";
import { Route, Routes } from "react-router-dom";
import Arbitrage from "./Components/Crypto/Arbitrage/Arbitrage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Arbitrage />}/>
          <Route path="/crypto" element={<Arbitrage />} />
        </Routes>
    </div>
  );
}

export default App;
