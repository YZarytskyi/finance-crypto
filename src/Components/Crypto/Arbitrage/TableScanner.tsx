import style from "./Arbitrage.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import sprite from "../../../assets/images/icons.svg";
import Table from "react-bootstrap/Table";
import TableArbitrageBody from "./TableBody";
import { fetchCurrencies } from "../../../Store/Reducers/arbitrageSlice";
import Preloader from "../../Common/Preloader";


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
      <svg className={style.refreshIcon} onClick={() => handleRefresh()}>
        <use href={sprite + "#refresh"} />
      </svg>

      {isLoadingCurrencies 
      ? <div className={style.tablePreloader}><Preloader /></div>
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

export default ScannerTable;
