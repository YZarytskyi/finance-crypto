import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import CoinsTableBody from './CoinsTableBody';
import { TablePagination } from 'components/Common';
import { fetchMarkets } from 'Store/Reducers/cryptoSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { CryptoSkeleton } from '../CryptoSkeleton';
import { ModalAuth } from '../../../components/Auth/ModalAuth';
import sprite from 'assets/images/icons.svg';
import style from './Coins.module.scss';
import { useLocalStorageState } from '../../../hooks/useStorage';

const SELECTED_COINS_KEY = 'selected-coins';

const Coins = () => {
  const [selectedCoins, setSelectedCoins] = useLocalStorageState<string[]>(
    SELECTED_COINS_KEY,
    []
  );

  const { isLoadingCrypto, markets } = useAppSelector(state => state.crypto);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const countCoins: number = 50;

  useEffect(() => {
    dispatch(fetchMarkets(page));
  }, [page]);

  const setNewSelectedCoins = (newArr: string[]) => {
    setSelectedCoins(newArr)
  }

  const openModalAuth = () => {
    setModalAuthShow(true);
  };

  return (
    <>
      <section className={`${style.table} ${style.tableCoins}`}>
        <h1 className="hidden">Cryptocurrencies</h1>
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
                Coin
                {/* <SearchForm
                  page={page}
                  fetch={fetchMarkets}
                  component="coins"
                /> */}
              </th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>Total Volume</th>
              <th>Market Capitalization</th>
              <th>Last&nbsp;7&nbsp;days</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingCrypto ? (
              <CryptoSkeleton />
            ) : (
              <>
                {markets.map(coin => (
                  <CoinsTableBody
                    key={coin.id}
                    coin={coin}
                    selectedCoins={selectedCoins}
                    openModalAuth={openModalAuth}
                    setNewSelectedCoins={setNewSelectedCoins}
                  />
                ))}
              </>
            )}
          </tbody>
        </Table>
      </section>
      <div className={style.pagination}>
        <TablePagination page={page} setPage={setPage} count={countCoins} />
      </div>
      <ModalAuth
        modalAuthShow={modalAuthShow}
        setModalAuthShow={setModalAuthShow}
        isLogin
      />
    </>
  );
};

export default Coins;
