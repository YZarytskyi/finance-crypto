import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPrice } from '../../../Redux/Reducers/cryptoReducer';
import Result from './Result';

const Scanner = ({ dispatch, currencies }) => {

  const price = useSelector(state => state.crypto.price)

  useEffect(() => {
    dispatch(fetchPrice(currencies));
  }, [currencies])
  
  return(
    <Result price={price} />
  )

};

export default Scanner;