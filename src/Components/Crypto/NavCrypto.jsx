import React from "react";
import style from '../Crypto/Crypto.module.scss'
import { NavLink } from "react-router-dom";

const NavCrypto = () => {
  return (
    <div className={style.crypto}>
      <div>
        <NavLink to="/crypto/coins">Coins</NavLink>
        <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
        <NavLink to="/crypto/exchanges">Exchanges</NavLink>
      </div>
    </div>
  );
};

export default NavCrypto;