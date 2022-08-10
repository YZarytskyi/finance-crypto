import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cryptoApi } from '../../../API/api';
import { setPrice } from '../../../Redux/Reducers/cryptoReducer';
import Result from './Result';

const Scanner = ({ dispatch, currencies }) => {

  const price = useSelector(state => state.crypto.price)

  const fetchPrice = async () => {
    let response = await cryptoApi.getPrice()
    const allPrices = currencies.length !==0 ? currencies.map(x => {
        const filterPrice = response.find(y => y.symbol === x.symbol)
        return filterPrice
      }) : ''
    dispatch(setPrice(allPrices))
  }

  useEffect(() => {
    fetchPrice();
  }, [currencies])
  
  return(
    <Result price={price} />
  )

};

export default Scanner;