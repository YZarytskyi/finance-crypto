import Table from 'react-bootstrap/Table';
import CoinsTableBody from './CoinsTableBody';
import { CryptoSkeleton } from '../CryptoSkeleton';
import { Markets } from '../../../types/Types';
import sprite from 'assets/images/icons.svg';
import style from './Coins.module.scss';

interface CoinTableHeadProps {
  isLoading?: boolean;
  markets: Array<Markets>;
  selectedCoins: string[];
  openModalAuth?: () => void;
  setNewSelectedCoins: (newArr: string[]) => void;
}

const CoinTableHead = ({
  isLoading,
  markets,
  selectedCoins,
  openModalAuth,
  setNewSelectedCoins,
}: CoinTableHeadProps) => {
  return (
    <Table hover variant="dark">
      <thead>
        <tr>
          <th>
            <svg className={style.starHead}>
              <use href={sprite + '#star'}></use>
            </svg>
          </th>
          <th>#</th>
          <th>
            Coin
            {/* <SearchForm
                  page={page}
                  fetch={fetchMarkets}
                  component="coins"
                /> */}
          </th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>Total Volume</th>
          <th>Market Capitalization</th>
          <th>Last&nbsp;7&nbsp;days</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <CryptoSkeleton />
        ) : (
          <>
            {markets.map(coin => (
              <CoinsTableBody
                key={coin.id}
                coin={coin}
                selectedCoins={selectedCoins}
                openModalAuth={openModalAuth}
                setNewSelectedCoins={setNewSelectedCoins}
              />
            ))}
          </>
        )}
      </tbody>
    </Table>
  );
};

export { CoinTableHead };
