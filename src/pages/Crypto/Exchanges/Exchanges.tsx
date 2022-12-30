import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { TablePagination } from 'components/Common';
import { CryptoSkeleton } from '../CryptoSkeleton';
import TableExchangesBodyItem from './TableExchangesBodyItem';
import { fetchExchanges } from 'Store/Reducers/exchangeSlice';
import style from './Exchanges.module.scss';

const EXCHANGES_COUNT: 10 = 10;

const Exchanges = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const { isLoadingExchanges, exchanges } = useAppSelector(
    state => state.exchange
  );

  useEffect(() => {
    dispatch(fetchExchanges(page));
  }, [page]);

  return (
    <>
      <section className={`${style.table} ${style.tableExchanges}`}>
        <Table hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>
                Exchange
                {/* <SearchForm
                  page={page}
                  fetch={fetchExchanges}
                  component="exchanges"
                /> */}
              </th>
              <th>Trust Score</th>
              <th>Total&nbsp;Volume 24h</th>
              <th>Year Established</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingExchanges ? (
              <CryptoSkeleton />
            ) : (
              <>
                {exchanges.map(exchange => (
                  <TableExchangesBodyItem
                    exchange={exchange}
                    key={exchange.id}
                  />
                ))}
              </>
            )}
          </tbody>
        </Table>
      </section>
      <div className={style.pagination}>
        <TablePagination
          page={page}
          setPage={setPage}
          count={EXCHANGES_COUNT}
        />
      </div>
    </>
  );
};

export default Exchanges;
