import style from './Exchanges.module.scss'
import { useEffect, useState } from 'react';
import NavCrypto from "../NavCrypto";
import Table from "react-bootstrap/Table";
import TableExchangesBody from './TableBody';
import {fetchExchanges} from '../../../Store/Reducers/cryptoSlice'
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import TablePagination from '../../Common/TablePagination';
import { CryptoSkeleton } from '../../Common/CryptoSkeleton';


const Exchanges = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const isLoading = useAppSelector(state => state.crypto.isLoadingCrypto)
  const countExchanges: number = 30;

  useEffect(() => {
    dispatch(fetchExchanges(page))
  }, [page])

  return(
    <>
      <NavCrypto />
      {isLoading
      ? <CryptoSkeleton />
      : <section className={`${style.table} ${style.tableExchanges}`}>
      <Table
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Exchange</th>
            <th>Trust Score</th>
            <th>Total&nbsp;Volume 24h</th>
            <th>Year Established</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <TableExchangesBody />
        </tbody>
      </Table>
      </section>
      }
      <div className={style.pagination}>
        <TablePagination page={page} setPage={setPage} count={countExchanges} />
      </div>
    </>
  );
};

export default Exchanges;