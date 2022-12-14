import ProgressBar from "react-bootstrap/ProgressBar";
import { Exchanges } from "../../../Types/Types";
import { setNumberFormat } from "../../../utils/utils";

interface TableExchangesBodyItemProps {
  exchange: Exchanges
}

const TableExchangesBodyItem: React.FC<TableExchangesBodyItemProps> = ({exchange}) => {
  return (
        <tr key={exchange.id}>
          <td>{exchange.trust_score_rank}</td>
          <td>
            <div>
              {exchange.id === "kraken" ? (
                <>
                  <a
                    href="https://www.kraken.com/en-us"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src={exchange.image} alt={exchange.name} />
                  </a>
                  <a
                    href="https://www.kraken.com/en-us"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {exchange.name}
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src={exchange.image} alt={exchange.name} />
                  </a>
                  <a
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {exchange.name}
                  </a>
                </>
              )}
            </div>
          </td>
          <td>
            <div>
              <ProgressBar now={exchange.trust_score} min={1} max={10} />
              {exchange.trust_score}
            </div>
          </td>
          <td>{setNumberFormat(exchange.trade_volume_24h_btc)}&nbsp;BTC</td>
          <td>{exchange.year_established || "Unknown"}</td>
          <td>{exchange.country || "Unknown"}</td>
        </tr>


  );
};

export default TableExchangesBodyItem;
