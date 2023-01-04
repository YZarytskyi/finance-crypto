import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  removeFloatNull,
  setClassNamePlusOrMinus,
  setNumberFormat,
} from 'utils/utils';
import { Markets } from 'types/Types';
import { useAppSelector } from 'hooks/redux-hooks';
import sprite from 'assets/images/icons.svg';
import style from './Coins.module.scss';
import { Preloader } from 'Components/Common';

interface CoinsTableBodyItemProps {
  coin: Markets;
  selectedCoins: string[];
  openModalAuth: () => void;
  setNewSelectedCoins: (newArr: string[]) => void;
}

const CoinsTableBody = ({
  coin,
  selectedCoins,
  openModalAuth,
  setNewSelectedCoins,
}: CoinsTableBodyItemProps): JSX.Element => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isLoadedImg, setIsLoadedImg] = useState<boolean>(false);

  useEffect(() => {
    if (!isAuth) {
      setIsSelected(false);
      return;
    }

    const isSavedSelected = selectedCoins.find((el: string) => el === coin.id);
    if (isSavedSelected) {
      setIsSelected(true);
    }
  }, [isAuth]);

  const onClickToggleSelect: React.MouseEventHandler<SVGElement> = e => {
    if (!isAuth) {
      openModalAuth();
      return;
    }

    setIsSelected(prev => !prev);
    if (selectedCoins.includes(coin.id)) {
      setNewSelectedCoins(selectedCoins.filter(id => id !== coin.id));
      return;
    }
    setNewSelectedCoins([coin.id, ...selectedCoins]);
  };

  const onLoadCoinChart = () => {
    setIsLoadedImg(true);
  };

  const coinNumber = coin.image.match(/\d+/);

  return (
    <tr>
      <td>
        <svg
          className={`${style.star} ${isSelected ? style.starActive : ''}`}
          onClick={onClickToggleSelect}
        >
          <use href={sprite + '#star'}></use>
        </svg>
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <NavLink to={`/crypto/coins/${coin.id}`} className={style.link}>
          <img
            src={coin.image}
            alt={coin.name}
            height={30}
            width={30}
            onLoad={onLoadCoinChart}
          />
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
        {isLoadedImg ? (
          <img
            src={`https://www.coingecko.com/coins/${coinNumber}/sparkline`}
            alt={`${coin.name} 7d chart`}
            className={style.chartImg}
          />
        ) : (
          <Preloader className={'small'}/>
        )}
      </td>
    </tr>
  );
};

export default React.memo(CoinsTableBody);
