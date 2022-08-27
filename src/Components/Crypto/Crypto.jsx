import React from 'react';
import { NavLink } from "react-router-dom";
import style from "./Crypto.module.scss";
import TableCoins from './Coins/TableCoins';
import { useSelector } from 'react-redux/es/exports';


const Crypto = () => {

  const markets = useSelector(state => state.crypto.markets)

  return(
    <div className={style.crypto}>
      <div>
        <NavLink to="/crypto/coins">Coins</NavLink>
        <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
      </div>
      <div>
        <div>
          {markets.length !== 0 && <TableCoins markets={markets}/>}
        </div>
      </div>
    </div>
  );
};

export default Crypto;