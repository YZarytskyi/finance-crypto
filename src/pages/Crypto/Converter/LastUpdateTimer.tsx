import { useEffect, useState } from 'react';
import { IAutocomplete } from './Converter';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import {
  fetchPrice,
  removePrice,
} from 'Store/Reducers/converterSlice';
import sprite from 'assets/images/icons.svg';
import style from './Converter.module.scss';

interface LastUpdateTimerProps {
  coin: IAutocomplete;
}

const SECOND = 1000;
const MINUTE = 60000;

export const LastUpdateTimer = ({ coin }: LastUpdateTimerProps) => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(state => state.converter.price);
  const [updateCount, setUpdateCount] = useState<number>(0);
  const [timeInterval, setTimeInterval] = useState<1000 | 60000>(SECOND);

  useEffect(() => {
    let timer: any = null;

    clearInterval(timer);
    if (!price) {
      return;
    }
    timer = setTimeout(() => {
      setUpdateCount(prev => prev + 1);
      if (updateCount === 59) {
        setUpdateCount(1);
        setTimeInterval(MINUTE);
      }
    }, timeInterval);

    return () => clearInterval(timer);
  }, [updateCount, price]);

  useEffect(() => {
    setUpdateCount(0);
    setTimeInterval(SECOND);
  }, [coin]);

  function handleUpdate() {
    dispatch(removePrice());
    dispatch(fetchPrice(coin.pair));
    setUpdateCount(0);
    setTimeInterval(SECOND);
  }

  return (
    <div className={style.lastUpdateContainer}>
      <p className={style.lastUpdateText}>
        Last price update:{' '}
        <span>
          {updateCount}
          {timeInterval === SECOND ? 's' : 'm'}
        </span>{' '}
        ago
      </p>
      <svg className={style.refreshIcon} role="button" onClick={handleUpdate}>
        <use href={sprite + '#refresh'} />
      </svg>
    </div>
  );
};
