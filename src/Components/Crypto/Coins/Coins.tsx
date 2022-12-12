import style from "./Coins.module.scss";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CoinsTableBodyItem from "./CoinsTableBodyItem";
import TablePagination from "../../Common/TablePagination";
import {
  fetchCoinsByQuery,
  fetchMarkets,
} from "../../../Store/Reducers/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import NavCrypto from "../NavCrypto";
import { CryptoSkeleton } from "../CryptoSkeleton";
import { Notify } from "notiflix";

const Coins = () => {
  const { isLoadingCrypto, markets } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const countCoins: number = 50;

  useEffect(() => {
    dispatch(fetchMarkets(page));
  }, [page]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.searchQuery?.value?.trim().toLowerCase();
    if (!inputValue) {
      dispatch(fetchMarkets(page));
      return
    }
    dispatch(fetchCoinsByQuery(inputValue));
  };

  return (
    <>
      <NavCrypto />
      <section className={`${style.table} ${style.tableCoins}`}>
        <h1 className="hidden">Cryptocurrencies</h1>
        <Table hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <form className={style.searchForm} onSubmit={(e) => onSubmit(e)}>
                  <div className={style.searchContainer}>
                    <input
                      type="text"
                      className={style.inputCoin}
                      placeholder="Coin"
                      name="searchQuery"
                    />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </form>
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
                {markets.map((coin) => (
                  <CoinsTableBodyItem coin={coin} key={coin.id} />
                ))}
              </>
            )}
          </tbody>
        </Table>
      </section>
      <div className={style.pagination}>
        <TablePagination page={page} setPage={setPage} count={countCoins} />
      </div>
    </>
  );
};

export default Coins;
