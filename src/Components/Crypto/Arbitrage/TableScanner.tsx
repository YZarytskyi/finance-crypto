import style from "./Arbitrage.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { fetchCurrencies } from "../../../Store/Reducers/cryptoSlice";
import { FiRefreshCcw } from "react-icons/fi";
import Table from "react-bootstrap/Table";
import TableArbitrageBody from "./TableBody";


const ScannerTable = () => {

  const { isLoadingCrypto } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    dispatch(fetchCurrencies());
  };

  return (
    <>
      <FiRefreshCcw
        className={style.refreshIcon}
        onClick={() => handleRefresh()}
      />    
      {isLoadingCrypto 
      ? <p className={style.fallback}>Loading...</p>
      : <div className={`${style.table} ${style.tableArbitrage}`}>
      <Table
        hover
        size="sm"
        variant="dark"
      >
        <thead className={style.arbitrageHead}>
          <tr>
            <th>Pair&nbsp;1</th>
            <th>Price&nbsp;1</th>
            <th>Pair&nbsp;2</th>
            <th>Price&nbsp;2</th>
            <th>Pair&nbsp;3</th>
            <th>Price&nbsp;3</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <TableArbitrageBody />
        </tbody>
      </Table>
      </div>
      }
    </>
  );
};

export default React.memo(ScannerTable);
