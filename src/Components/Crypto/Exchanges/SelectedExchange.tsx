import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import {
  fetchExchangeById,
  removeSelectedExchange,
} from '../../../Store/Reducers/exchangeSlice';
import NavCrypto from '../NavCrypto';
import { Preloader } from '../../Common';
import { setNumberFormat } from '../../../utils/utils';
import style from './SelectedExchange.module.scss';

const SelectedExchange = () => {
  const { exchangeId } = useParams();
  const selectedExchange = useAppSelector(
    state => state.exchange.selectedExchange
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    exchangeId && dispatch(fetchExchangeById(exchangeId));
    return () => {
      dispatch(removeSelectedExchange());
    };
  }, [exchangeId]);

  if (!selectedExchange) {
    return <Preloader />;
  }

  return (
    <>
      <NavCrypto component='Exchanges'/>
      <section className={style.exchange}>
        <img
          src={selectedExchange.image}
          alt={selectedExchange.name}
          className={style.logo}
        />
        <p className={style.name}>{selectedExchange.name}</p>
        <ul className={style.list}>
          <li>
            <p className={style.textMain}>
              {selectedExchange.country || 'Unknown'}
            </p>
            <p className={style.textSecondary}>Country</p>
          </li>
          <li>
            <p className={style.textMain}>
              {setNumberFormat(selectedExchange.trade_volume_24h_btc) ||
                'Unknown'}{' '}
              BTC
            </p>
            <p className={style.textSecondary}>Trade volume 24h</p>
          </li>
          <li>
            <p className={style.textMain}>
              {setNumberFormat(
                selectedExchange.trade_volume_24h_btc_normalized
              ) || 'Unknown'}{' '}
              BTC
            </p>
            <p className={style.textSecondary}>Trade volume 24h normalized</p>
          </li>
          <li>
            <p className={style.textMain}>
              {selectedExchange.year_established || 'Unknown'}
            </p>
            <p className={style.textSecondary}>Established Year</p>
          </li>
          <li>
            <a
              href={selectedExchange.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={style.siteLink}
            >
              {selectedExchange.name}
            </a>
            <p className={style.textSecondary}>Official Web-site</p>
          </li>
        </ul>
        {selectedExchange.description && (
          <p className={style.description}>{selectedExchange.description}</p>
        )}
        <p className={style.description}>
          If you would like to see more details you can go to{' '}
          <a
            href={selectedExchange.name}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={style.siteLink}
          >
            {selectedExchange.name}
          </a>{' '}
          official web-site
        </p>
      </section>
    </>
  );
};

export default SelectedExchange;
