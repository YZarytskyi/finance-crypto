import { useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import { cryptoApi } from '../../api/cryptoApi';
import { useLocalStorageState } from '../../hooks/useStorage';
import { Markets } from '../../types/Types';
import { CryptoSkeleton } from '../Crypto/CryptoSkeleton';
import CoinsTableBody from '../Crypto/Coins/CoinsTableBody';
import { TablePagination } from '../../Components/Common';
import { Link } from 'react-router-dom';
import sprite from 'assets/images/icons.svg';
import style from './Portfolio.module.scss';

const SELECTED_COINS_KEY = 'selected-coins';

const Portfolio = () => {
  const [selectedCoins, setSelectedCoins] = useLocalStorageState<string[]>(
    SELECTED_COINS_KEY,
    []
  );

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<Markets[] | null>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);

  const countCoins: number = portfolio?.length || 0;

  useEffect(() => {
    const getPortfolioData = async () => {
      const data = await cryptoApi.getMarkets(page, selectedCoins);
      setPortfolio(data);
    };
    getPortfolioData();
  }, [page]);

  const setNewSelectedCoins = (newArr: string[]) => {
    setSelectedCoins(newArr);
  };

  return (
    <>
      <section className={`${style.table} ${style.tableCoins}`}>
        <h1 className={style.tableHeader} ref={headingRef}>
          My Portfolio
        </h1>
        {!selectedCoins.length ? (
          <div>
            <p className={style.textNotFound}>There are not any coins in Portfolio</p>
            <p className={style.textLink}>You can see available coins and add to Portfolio in <Link to='/crypto/coins'>Coins</Link></p>
          </div>
        ) : (
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
              {loading ? (
                <CryptoSkeleton />
              ) : (
                <>
                  {portfolio?.map(coin => (
                    <CoinsTableBody
                      key={coin.id}
                      coin={coin}
                      selectedCoins={selectedCoins}
                      setNewSelectedCoins={setNewSelectedCoins}
                    />
                  ))}
                </>
              )}
            </tbody>
          </Table>
        )}
      </section>
      {selectedCoins.length > 15 && (
        <div className={style.pagination}>
          <TablePagination
            page={page}
            setPage={setPage}
            count={countCoins}
            ref={headingRef}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
