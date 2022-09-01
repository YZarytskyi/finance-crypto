import React from "react";
import style from "./Coins.module.scss";
import { NavLink } from "react-router-dom";
import ChartCoins from "./Chart";
import { useSelector } from "react-redux";

export const parseNumber = (number) => new Intl.NumberFormat("ua-UA").format(number);
export const parseValue = (value) => {
  const regExp = new RegExp(/\.?0*$/);
  return value < 1000 ? String(value).replace(regExp, "") : parseNumber(value);
};

export const setClassName = (value) => {
  return value > 0 ? style.percentagePlus : style.percentageMinus;
};



const TableCoinsBody = () => {
  const markets = useSelector((state) => state.crypto.markets);

  return markets.map((coin) => (
    <tr key={coin.id}>
      <td>{coin.market_cap_rank}</td>
      <td>
        <NavLink to={`/crypto/coins/${coin.id}`}>
          <img src={coin.image} alt={coin.name} height={30} width={30} />
          <div>{coin.name}</div>
          <div>{coin.symbol.toUpperCase()}</div>
        </NavLink>
      </td>
      <td>{parseValue(coin.current_price)} $</td>
      <td className={setClassName(coin.price_change_percentage_1h_in_currency)}>
        {coin.price_change_percentage_1h_in_currency?.toFixed(2)} %
      </td>
      <td className={setClassName(coin.price_change_percentage_24h_in_currency)}>
        {coin.price_change_percentage_24h_in_currency?.toFixed(2)} %
      </td>
      <td className={setClassName(coin.price_change_percentage_7d_in_currency)}>
        {coin.price_change_percentage_7d_in_currency?.toFixed(2)} %
      </td>
      <td>{parseNumber(coin.total_volume)} $</td>
      <td>{parseNumber(coin.market_cap)} $</td>
      <td>
        <ChartCoins data={coin.sparkline_in_7d.price} />
      </td>
    </tr>
  ));
};

export default TableCoinsBody;
