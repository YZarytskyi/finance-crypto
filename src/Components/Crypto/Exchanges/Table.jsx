import React from 'react';
import Table from "react-bootstrap/Table";
import style from './Exchanges.module.scss'
import TableExchangesBody from './TableBody';

const TableExchanges = ({exchanges}) => {
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