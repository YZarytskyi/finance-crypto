import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { TablePagination } from 'Components/Common';
import { fetchExchanges } from 'Store/Reducers/exchangeSlice';
import { ModalAuth } from 'Components/Auth/ModalAuth';
import { TableExchangesHead } from './TableExchangesHead';
import style from './Exchanges.module.scss';

const EXCHANGES_COUNT: 10 = 10;

const Exchanges = () => {
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

  const openModalAuth = () => {
    setModalAuthShow(true);
  };

  return (
    <>
      <section className={`${style.table} ${style.tableExchanges}`}>
        <h1 className={style.tableHeader} ref={headingRef}>
          Exchanges
        </h1>
        <TableExchangesHead
          isLoading={isLoadingExchanges}
          exchanges={exchanges}
          openModalAuth={openModalAuth}
        />
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
