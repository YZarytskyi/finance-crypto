import style from "./Arbitrage.module.scss";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { FiRefreshCcw } from "react-icons/fi";
import Table from "react-bootstrap/Table";
import TableArbitrageBody from "./TableBody";
import { fetchCurrencies } from "../../../Store/Reducers/arbitrageSlice";


const ScannerTable = () => {

  const isLoadingCurrencies = useAppSelector((state) => state.arbitrage.isLoadingCurrencies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  const handleRefresh = () => {
    dispatch(fetchCurrencies());
  };

  return (
    <>
      <FiRefreshCcw
        className={style.refreshIcon}
        onClick={() => handleRefresh()}
      />    
      {isLoadingCurrencies 
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
