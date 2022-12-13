import style from "./Coins.module.scss";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CoinsTableBodyItem from "./CoinsTableBodyItem";
import TablePagination from "../../Common/TablePagination";
import { fetchMarkets } from "../../../Store/Reducers/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import NavCrypto from "../NavCrypto";
import { CryptoSkeleton } from "../CryptoSkeleton";
import SearchForm from "../../Common/SearchForm";

const Coins = () => {
  const { isLoadingCrypto, markets } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const countCoins: number = 50;

  useEffect(() => {
    dispatch(fetchMarkets(page));
  }, [page]);

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
