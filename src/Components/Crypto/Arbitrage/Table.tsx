import style from "./Arbitrage.module.scss";
import Table from "react-bootstrap/Table";
import TableArbitrageBody from "./TableBody";
import { AppDispatch } from "../../../Store/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";


interface TableArbitrageProps {
  result:  {
    pair1: string;
    price1: string;
    pair2: string;
    price2: string;
    pair3: string;
    price3: string;
    result: string;
  }[];
  setPair1: ActionCreatorWithPayload<string, string>;
  setPair2: ActionCreatorWithPayload<string, string>;
  setPair3: ActionCreatorWithPayload<string, string>;
  dispatch: AppDispatch;
}

const TableArbitrage: React.FC<TableArbitrageProps> = ({result, setPair1, setPair2, setPair3, dispatch}) => {
  return (
    <div className={`${style.table} ${style.tableArbitrage}`}>
      <Table
        hover
        size="sm"
        variant="dark"
      >
        <thead className={style.arbitrageHead}>
          <tr>
            <th>Pair 1</th>
            <th>Price 1</th>
            <th>Pair 2</th>
            <th>Price 2</th>
            <th>Pair 3</th>
            <th>Price 3</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <TableArbitrageBody result={result}
            setPair1={setPair1}
            setPair2={setPair2}
            setPair3={setPair3}
            dispatch={dispatch}
           />
        </tbody>
      </Table>
    </div>
  );
};

export default TableArbitrage;