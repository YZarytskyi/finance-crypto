import style from "./Coins.module.scss";
import Table from "react-bootstrap/Table";
import TableCoinsBody from "./TableBody";

const TableCoins = () => {
  return (
    <div className={style.table}>
      <Table
        hover
        size="sm"
        variant="dark"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>Total Volume</th>
            <th>Market Capitalization</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          <TableCoinsBody />
        </tbody>
      </Table>
    </div>
  );
};

export default TableCoins;