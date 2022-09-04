import style from './Exchanges.module.scss'
import Table from "react-bootstrap/Table";
import TableExchangesBody from './TableBody';
import { Exchanges } from '../../../Types/Types';


interface TableExchangesProps { exchanges: Array<Exchanges> }
const TableExchanges: React.FC<TableExchangesProps> = ({exchanges}) => {
  return(
    <div className={`${style.table} ${style.tableExchanges}`}>
    <Table
      hover
      size="sm"
      variant="dark"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Exchange</th>
          <th>Trust Score</th>
          <th>Total Volume 24h</th>
          <th>Year Established</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <TableExchangesBody exchanges={exchanges}/>
      </tbody>
    </Table>
  </div>
  );
};

export default TableExchanges;