import ProgressBar from "react-bootstrap/ProgressBar";
import { useAppSelector } from "../../../Store/hooks";
import { setNumberFormat } from "../../../utils/utils";

const TableExchangesBody = () => {
  const exchanges = useAppSelector((state) => state.crypto.exchanges);

  return (
    <>
      {exchanges.map((item) => (
        <tr key={item.id}>
          <td>{item.trust_score_rank}</td>
          <td>
            <div>
              {item.id === "kraken" ? (
                <>
                  <a
                    href="https://www.kraken.com/en-us"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src={item.image} alt={item.name} />
                  </a>
                  <a
                    href="https://www.kraken.com/en-us"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {item.name}
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src={item.image} alt={item.name} />
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {item.name}
                  </a>
                </>
              )}
            </div>
          </td>
          <td>
            <div>
              <ProgressBar now={item.trust_score} min={1} max={10} />
              {item.trust_score}
            </div>
          </td>
          <td>{setNumberFormat(item.trade_volume_24h_btc)}&nbsp;BTC</td>
          <td>{item.year_established || "Unknown"}</td>
          <td>{item.country || "Unknown"}</td>
        </tr>
      ))}
    </>
  );
};

export default TableExchangesBody;
