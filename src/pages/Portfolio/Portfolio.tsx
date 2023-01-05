import { useEffect, useRef, useState } from 'react';
import { cryptoApi } from '../../api/cryptoApi';
import { useLocalStorageState } from '../../hooks/useStorage';
import { Markets } from '../../types/Types';
import { CoinTableHead } from '../Crypto/Coins/CoinTableHead';
import { TablePagination } from '../../Components/Common';
import { Link, Navigate } from 'react-router-dom';
import style from './Portfolio.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';

const SELECTED_COINS_KEY = 'selected-coins';

const Portfolio = () => {
  const [selectedCoins, setSelectedCoins] = useLocalStorageState<string[]>(
    SELECTED_COINS_KEY,
    []
  );

  const isAuth = useAppSelector(state => state.auth.isAuth)
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<Markets[]>([]);

  const headingRef = useRef<HTMLHeadingElement>(null);

  const countPages: number = Math.ceil(selectedCoins.length / 15);

  useEffect(() => {
    setIsLoading(true)
    const getPortfolioData = async () => {
      const data = await cryptoApi.getMarkets(page, selectedCoins);
      setPortfolio(data);
    };
    getPortfolioData();
    setIsLoading(false)
  }, [page]);

  const setNewSelectedCoins = (newArr: string[]) => {
    setSelectedCoins(newArr);
  };

  if (!isAuth) {
    return <Navigate to='/' />
  }

  return (
    <>
      <section className={`${style.table} ${style.tableCoins}`}>
        <h1 className={style.tableHeader} ref={headingRef}>
          My Portfolio
        </h1>
        {!selectedCoins.length ? (
          <div>
            <p className={style.textNotFound}>
              There are not any coins in Portfolio
            </p>
            <p className={style.textLink}>
              You can see available coins and add to Portfolio in{' '}
              <Link to="/crypto/coins">Coins</Link>
            </p>
          </div>
        ) : (
          <CoinTableHead
            isLoading={isLoading}
            markets={portfolio}
            selectedCoins={selectedCoins}
            setNewSelectedCoins={setNewSelectedCoins}
          />
        )}
      </section>
      {selectedCoins.length > 15 && (
        <div className={style.pagination}>
          <TablePagination
            page={page}
            setPage={setPage}
            count={countPages}
            ref={headingRef}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
