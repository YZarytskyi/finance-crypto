import React from "react";
import style from "./Coins.module.scss";
import { NavLink } from "react-router-dom";
import ChartCoins from "./Chart";
import { useAppSelector } from "../../../Store/hooks";
import { removeFloatNull, setNumberFormat } from "../../../utils/utils";


const CoinsTableBody = () => {
  const markets = useAppSelector((state) => state.crypto.markets);

  const setClassName = (value: number) => {
    return (value > 0) ? style.percentagePlus : style.percentageMinus;
  };

  return (
    <>
    {markets.map((coin) => (
      <tr key={coin.id}>
        <td>{coin.market_cap_rank}</td>
        <td>
          <NavLink to={`/crypto/coins/${coin.id}`} className={style.link}>
            <img src={coin.image} alt={coin.name} height={30} width={30} />
            <p>{coin.name}</p>
            <p>{coin.symbol.toUpperCase()}</p>
          </NavLink>
        </td>
        <td>{removeFloatNull(coin.current_price)} $</td>
        <td className={setClassName(coin.price_change_percentage_1h_in_currency)}>
          {coin.price_change_percentage_1h_in_currency?.toFixed(2)} %
        </td>
        <td className={setClassName(coin.price_change_percentage_24h_in_currency)}>
          {coin.price_change_percentage_24h_in_currency?.toFixed(2)} %
        </td>
        <td className={setClassName(coin.price_change_percentage_7d_in_currency)}>
          {coin.price_change_percentage_7d_in_currency?.toFixed(2)} %
        </td>
        <td>{setNumberFormat(coin.total_volume)} $</td>
        <td>{setNumberFormat(coin.market_cap)} $</td>
        <td>
          <ChartCoins data={coin.sparkline_in_7d.price} />
        </td>
      </tr>
    ))}
    </>
  )
};

export default React.memo(CoinsTableBody);
