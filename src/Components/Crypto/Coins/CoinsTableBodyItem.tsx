import React from 'react';
import { NavLink } from 'react-router-dom';
import ChartCoins from './Chart';
import {
  removeFloatNull,
  setClassNamePlusOrMinus,
  setNumberFormat,
} from '../../../utils/utils';
import { Markets } from '../../../Types/Types';
import style from './Coins.module.scss';

interface CoinsTableBodyItemProps {
  coin: Markets;
}

const CoinsTableBodyItem = ({ coin }: CoinsTableBodyItemProps): JSX.Element => {
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>
        <NavLink to={`/crypto/coins/${coin.id}`} className={style.link}>
          <img src={coin.image} alt={coin.name} height={30} width={30} />
          <p>
            {coin.name}
            <span>{coin.symbol.toUpperCase()}</span>
          </p>
        </NavLink>
      </td>
      <td>{removeFloatNull(coin.current_price)} $</td>
      <td
        className={setClassNamePlusOrMinus(
          coin.price_change_percentage_1h_in_currency
        )}
      >
        {coin.price_change_percentage_1h_in_currency?.toFixed(2)} %
      </td>
      <td
        className={setClassNamePlusOrMinus(
          coin.price_change_percentage_24h_in_currency
        )}
      >
        {coin.price_change_percentage_24h_in_currency?.toFixed(2)} %
      </td>
      <td
        className={setClassNamePlusOrMinus(
          coin.price_change_percentage_7d_in_currency
        )}
      >
        {coin.price_change_percentage_7d_in_currency?.toFixed(2)} %
      </td>
      <td>{setNumberFormat(coin.total_volume)} $</td>
      <td>{setNumberFormat(coin.market_cap)} $</td>
      <td>
        <ChartCoins data={coin.sparkline_in_7d.price} />
      </td>
    </tr>
  );
};

export default React.memo(CoinsTableBodyItem);
