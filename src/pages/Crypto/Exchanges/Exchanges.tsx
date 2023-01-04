import { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { TablePagination } from 'Components/Common';
import { CryptoSkeleton } from '../CryptoSkeleton';
import TableExchangesBody from './TableExchangesBody';
import { fetchExchanges } from 'Store/Reducers/exchangeSlice';
import { ModalAuth } from 'Components/Auth/ModalAuth';
import { useLocalStorageState } from '../../../hooks/useStorage';
import sprite from 'assets/images/icons.svg';
import style from './Exchanges.module.scss';

const EXCHANGES_COUNT: 10 = 10;
const SELECTED_EXCHANGES_KEY = 'selected-exchanges';

const Exchanges = () => {
  const [selectedExchanges, setSelectedExchanges] = useLocalStorageState<
    string[]
  >(SELECTED_EXCHANGES_KEY, []);

  const { isLoadingExchanges, exchanges } = useAppSelector(
    state => state.exchange
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    dispatch(fetchExchanges(page));
  }, [page]);

  const setNewSelectedExchanges = (newArr: string[]) => {
    setSelectedExchanges(newArr);
  };

  const openModalAuth = () => {
    setModalAuthShow(true);
  };

  return (
    <>
      <section className={`${style.table} ${style.tableExchanges}`}>
        <h1 className={style.tableHeader} ref={headingRef}>
          Exchanges
        </h1>
        <Table hover variant="dark">
          <thead>
            <tr>
              <th>
                <svg className={style.starHead}>
                  <use href={sprite + '#star'}></use>
                </svg>
              </th>
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
                  <TableExchangesBody
                    key={exchange.id}
                    exchange={exchange}
                    selectedExchanges={selectedExchanges}
                    setNewSelectedExchanges={setNewSelectedExchanges}
                    openModalAuth={openModalAuth}
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
          ref={headingRef}
        />
      </div>
      <ModalAuth
        modalAuthShow={modalAuthShow}
        setModalAuthShow={setModalAuthShow}
        isLogin
      />
    </>
  );
};

export default Exchanges;
