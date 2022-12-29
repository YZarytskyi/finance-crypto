import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { removeFloatNull } from '../../../utils/utils';
import {
  fetchArbitrageResult,
  removePairs,
  setPair1,
  setPair2,
  setPair3,
} from '../../../Store/Reducers/arbitrageSlice';
import sprite from '../../../assets/images/icons.svg';
import style from './Arbitrage.module.scss';

export const CheckResult = () => {
  const { currencies, arbitrageResult, pair1, pair2, pair3, isLoadingPairs } =
    useAppSelector(state => state.arbitrage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(removePairs());
    };
  }, []);

  let pair1Currencies: string[] = [];
  let pair2Currencies: string[] = [];
  let pair3Currencies: string[] = [];
  let filterPair1: string = '';

  if (currencies.length) {
    const allCurrencies = currencies.map(item => item.symbol);
    pair1Currencies = allCurrencies.filter(x => x.includes('USDT'));
    filterPair1 = pair1 ? pair1.replace(/USDT/, '') : '';
    pair2Currencies = allCurrencies.filter(
      x => x.includes(filterPair1) && !x.includes('USDT')
    );
    const regexp = new RegExp(filterPair1);
    const filterPair2 = pair2 ? pair2.replace(regexp, '') : '';
    pair3Currencies = allCurrencies.filter(
      x => x.includes(`${filterPair2}USDT`) || x.includes(`USDT${filterPair2}`)
    );
  }

  const handlePair1 = (
    e: React.SyntheticEvent,
    newValue: string | null
  ): void => {
    newValue && dispatch(setPair1(newValue));
  };
  const handlePair2 = (
    e: React.SyntheticEvent,
    newValue: string | null
  ): void => {
    newValue && dispatch(setPair2(newValue));
  };
  const handlePair3 = (
    e: React.SyntheticEvent,
    newValue: string | null
  ): void => {
    newValue && dispatch(setPair3(newValue));
  };
  const handlePairs = () => {
    if (pair1 && pair2 && pair3) {
      const pairs = { pair1, pair2, pair3 };
      dispatch(fetchArbitrageResult(pairs));
    }
  };

  return (
    <>
      <section className={style.checkResult}>
        <ul className={style.checkResultList}>
          <li>
            <p className={style.pairPrice}>
              {arbitrageResult.price1
                ? removeFloatNull(arbitrageResult.price1)
                : 'Price'}
            </p>
            <Autocomplete
              id="pair-1"
              value={pair1}
              onChange={handlePair1}
              sx={{ width: 200 }}
              disablePortal
              options={pair1Currencies}
              renderInput={params => <TextField {...params} label="Pair 1" />}
            />
          </li>
          <li>
            <p className={style.pairPrice}>
              {arbitrageResult.price2
                ? removeFloatNull(arbitrageResult.price2)
                : 'Price'}
            </p>
            <Autocomplete
              id="pair-2"
              value={pair2}
              onChange={handlePair2}
              sx={{ width: 200 }}
              disablePortal
              options={pair2Currencies}
              renderInput={params => <TextField {...params} label="Pair 2" />}
            />
          </li>
          <li>
            <p className={style.pairPrice}>
              {arbitrageResult.price3
                ? removeFloatNull(arbitrageResult.price3)
                : 'Price'}
            </p>
            <Autocomplete
              id="pair-3"
              value={pair3}
              onChange={handlePair3}
              sx={{ width: 200 }}
              disablePortal
              options={pair3Currencies}
              renderInput={params => <TextField {...params} label="Pair 3" />}
            />
          </li>
        </ul>
        <LoadingButton
          className={style.checkBtn}
          loading={isLoadingPairs}
          endIcon={
            <svg className={style.arrowRight}>
              <use href={sprite + '#arrow_right'} />
            </svg>
          }
          loadingPosition="end"
          variant="outlined"
          onClick={handlePairs}
        >
          Check
        </LoadingButton>
        <p className={style.result}>
          Result {arbitrageResult.result ? `${arbitrageResult.result} %` : ''}
        </p>
      </section>
    </>
  );
};
