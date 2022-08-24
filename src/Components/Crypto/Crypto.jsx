import React from 'react';
import { NavLink } from "react-router-dom";
import style from "./Crypto.module.scss";


const Crypto = () => {
  return(
    <div className={style.crypto}>
      <NavLink to="/crypto/coins">Coins</NavLink>
      <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
    </div>
  );
};

export default Crypto;