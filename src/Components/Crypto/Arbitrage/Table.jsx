import * as React from "react";
import Table from "react-bootstrap/Table";
import style from "./Arbitrage.module.scss";
import TableArbitrageBody from "./TableBody";


const TableArbitrage = ({result, setPair1, setPair2, setPair3, dispatch}) => {
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