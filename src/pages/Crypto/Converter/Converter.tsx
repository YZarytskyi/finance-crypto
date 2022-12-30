import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import {
  fetchCoinsList,
  fetchPrice,
  removePrice,
} from 'Store/Reducers/converterSlice';
import { Spinner } from 'components/Common';
import { LastUpdateTimer } from './LastUpdateTimer';
import { numberToFixed2 } from 'utils/utils';
import style from './Converter.module.scss';

export interface IAutocomplete {
  firstLetter: string;
  pair: string;
}

const Converter = () => {
  const { coinsList, price, isLoadingConverter } = useAppSelector(
    state => state.converter
  );
  const dispatch = useAppDispatch();

  const [coin, setCoin] = useState<IAutocomplete>({
    firstLetter: 'B',
    pair: 'BTCUSDT',
  });
  const [value, setValue] = useState<number | ''>(1);
  const [convertedValue, setConvertedValue] = useState<number | ''>('');

  useEffect(() => {
    if (!coinsList.length) {
      dispatch(fetchCoinsList());
    }
  }, []);

  useEffect(() => {
    setValue(1);
    setConvertedValue('');
    dispatch(fetchPrice(coin.pair));

    return () => {
      dispatch(removePrice());
    };
  }, [coin.pair]);

  useEffect(() => {
    if (!value) {
      setValue(1);
    }
    setConvertedValue(price && value ? price * value : '');
    return () => setConvertedValue('');
  }, [price]);

  const onChangeCoin = (
    event: React.SyntheticEvent,
    newCoin: IAutocomplete | null
  ): void => {
    if (newCoin) {
      setCoin({ firstLetter: newCoin.firstLetter, pair: newCoin.pair });
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value) {
      setValue(Number(e.currentTarget.value));
      setConvertedValue(
        numberToFixed2(Number(e.currentTarget.value) * (price || 0))
      );
    } else {
      setValue('');
      setConvertedValue('');
    }
  };

  const onChangeConvertedValue: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setConvertedValue(Number(e.currentTarget.value) || '');
    if (e.currentTarget.value) {
      setValue(
        numberToFixed2(Number(e.currentTarget.value) / (price as number))
      );
    } else {
      setValue('');
    }
  };

  const options = coinsList.map(pair => {
    const firstLetter = pair[0].toUpperCase();
    return {
      firstLetter: firstLetter,
      pair,
    };
  });

  return (
    <section>
      <div className={style.hero}>
        <h1 className={style.heroInside}>Cryptocurrency Converter</h1>
      </div>
      <div className={style.converter}>
        <div className={style.converterInside}>
          <Autocomplete
            id="coinsList"
            className={style.autocomplete}
            value={coin}
            onChange={onChangeCoin}
            options={options.sort((a, b) =>
              a.firstLetter.localeCompare(b.firstLetter)
            )}
            groupBy={coin => coin.firstLetter}
            getOptionLabel={coin => coin.pair.replace(/USDT/, '')}
            renderInput={params => <TextField {...params} label="Coin" />}
          />

          <input
            type="number"
            className={style.converterInput}
            value={value}
            disabled={!price}
            onChange={onChangeValue}
          />

          <p className={style.converterText}>Convert to USDT</p>

          <div className={style.converterInputWrapper}>
            <input
              type="number"
              className={style.converterInput}
              value={convertedValue}
              disabled={!price}
              onChange={onChangeConvertedValue}
            />
            {isLoadingConverter && <Spinner className={'spinnerConverter'} />}
          </div>
          <LastUpdateTimer coin={coin} />
        </div>
      </div>
    </section>
  );
};

export default Converter;
