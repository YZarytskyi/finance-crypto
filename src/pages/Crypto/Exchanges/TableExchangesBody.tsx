import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Exchanges } from 'types/Types';
import { setNumberFormat } from 'utils/utils';
import style from './Exchanges.module.scss';

interface TableExchangesBodyItemProps {
  exchange: Exchanges;
  openModalAuth?: () => void;
}


const TableExchangesBody = ({
  exchange,
  openModalAuth,
}: TableExchangesBodyItemProps): JSX.Element => {
  return (
    <tr key={exchange.id}>
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
