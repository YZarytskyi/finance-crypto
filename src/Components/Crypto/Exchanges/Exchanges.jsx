import React, { useEffect } from 'react';
import NavCrypto from "../NavCrypto";
import TableExchanges from './Table';
import {useDispatch, useSelector} from 'react-redux';
import {fetchExchanges} from '../../../Store/Reducers/cryptoSlice'

const Exchanges = () => {

  const dispatch = useDispatch()
  const exchanges = useSelector(state => state.crypto.exchanges)

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