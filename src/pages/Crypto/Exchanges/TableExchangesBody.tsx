import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Exchanges } from 'types/Types';
import { setNumberFormat } from 'utils/utils';
import { useAppSelector } from 'hooks/redux-hooks';
import { useEffect, useState } from 'react';
import style from './Exchanges.module.scss';
import sprite from 'assets/images/icons.svg';

interface TableExchangesBodyItemProps {
  exchange: Exchanges;
  selectedExchanges: string[];
  setNewSelectedExchanges: (newArr: string[]) => void;
  openModalAuth: () => void;
}


const TableExchangesBody = ({
  exchange,
  selectedExchanges,
  setNewSelectedExchanges,
  openModalAuth,
}: TableExchangesBodyItemProps): JSX.Element => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (!isAuth) {
      setIsSelected(false);
      return
    }

    const isSavedSelected = selectedExchanges.find((el: string) => el === exchange.id);
    if (isSavedSelected) {
      setIsSelected(true);
    }
  }, [isAuth])

  const onClickToggleSelect: React.MouseEventHandler<SVGElement> = e => {
    if (!isAuth) {
      openModalAuth();
      return
    }
    setIsSelected(prev => !prev);
    if (selectedExchanges.includes(exchange.id)) {
      setNewSelectedExchanges(selectedExchanges.filter(id => id !== exchange.id));
      return;
    }
    setNewSelectedExchanges([exchange.id, ...selectedExchanges]);
  };

  return (
    <tr key={exchange.id}>
      <td>
        <svg
          className={`${style.star} ${isSelected ? style.starActive : ''}`}
          onClick={onClickToggleSelect}
        >
          <use href={sprite + '#star'}></use>
        </svg>
      </td>
      <td>{exchange.trust_score_rank}</td>
      <td>
        <Link to={`${exchange.id}`} className={style.exchangeLink}>
          <img src={exchange.image} alt={exchange.name} />
          {exchange.name}
        </Link>
      </td>
      <td>
        <div>
          <ProgressBar now={exchange.trust_score} min={1} max={10} />
          {exchange.trust_score}
        </div>
      </td>
      <td>{setNumberFormat(exchange.trade_volume_24h_btc)}&nbsp;BTC</td>
      <td>{exchange.year_established || 'Unknown'}</td>
      <td>{exchange.country || 'Unknown'}</td>
    </tr>
  );
};

export default TableExchangesBody;
