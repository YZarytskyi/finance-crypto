import { Table } from "react-bootstrap";
import { Exchanges } from "../../../types/Types";
import TableExchangesBody from "./TableExchangesBody";
import { CryptoSkeleton } from "../CryptoSkeleton";


interface TableExchangesHeadProps {
  isLoading?: boolean;
  exchanges: Array<Exchanges>;
  openModalAuth?: () => void;
}

export const TableExchangesHead = ({isLoading, exchanges, openModalAuth} : TableExchangesHeadProps) => {
  return(
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
      {isLoading ? (
        <CryptoSkeleton />
      ) : (
        <>
          {exchanges.map(exchange => (
            <TableExchangesBody
              key={exchange.id}
              exchange={exchange}
              openModalAuth={openModalAuth}
            />
          ))}
        </>
      )}
    </tbody>
  </Table>
  );
};