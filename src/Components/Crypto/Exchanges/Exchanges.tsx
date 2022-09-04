import { useEffect } from 'react';
import NavCrypto from "../NavCrypto";
import TableExchanges from './Table';
import {fetchExchanges} from '../../../Store/Reducers/cryptoSlice'
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';

const Exchanges = () => {

  const dispatch = useAppDispatch()
  const exchanges = useAppSelector(state => state.crypto.exchanges)

  useEffect(() => {
    if (exchanges.length === 0) {
      dispatch(fetchExchanges())
    }
  }, [])

  return(
    <>
      <NavCrypto />
      <TableExchanges exchanges={exchanges} />
    </>
  );
};

export default Exchanges;