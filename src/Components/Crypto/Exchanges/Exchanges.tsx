import style from './Exchanges.module.scss'
import { useEffect, useState } from 'react';
import NavCrypto from "../NavCrypto";
import TableExchanges from './Table';
import {fetchExchanges} from '../../../Store/Reducers/cryptoSlice'
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import TablePagination from '../../Common/TablePagination';
import { CryptoSkeleton } from '../../Common/CryptoSkeleton';


const Exchanges = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const isLoading = useAppSelector(state => state.crypto.isLoadingCrypto)

  useEffect(() => {
    dispatch(fetchExchanges(page))
  }, [page])

  return(
    <>
      <NavCrypto />
      {isLoading
      ? <CryptoSkeleton />
      : <TableExchanges />
      }
      <div className={style.pagination}>
        <TablePagination page={page} setPage={setPage}/>
      </div>
    </>
  );
};

export default Exchanges;