import style from "./Exchanges.module.scss";
import { useEffect, useState } from "react";
import NavCrypto from "../NavCrypto";
import Table from "react-bootstrap/Table";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import TablePagination from "../../Common/TablePagination";
import { CryptoSkeleton } from "../CryptoSkeleton";
import SearchForm from "../../Common/SearchForm";
import TableExchangesBodyItem from "./TableExchangesBodyItem";
import { fetchExchanges } from "../../../Store/Reducers/exchangeSlice";

const Exchanges = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const { isLoadingExchanges, exchanges } = useAppSelector(
    (state) => state.exchange
  );
  const countExchanges: number = 30;

  useEffect(() => {
    dispatch(fetchExchanges(page));
  }, [page]);

  return (
    <>
      <NavCrypto />
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
                {exchanges.map((exchange) => (
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
        <TablePagination page={page} setPage={setPage} count={countExchanges} />
      </div>
    </>
  );
};

export default Exchanges;
