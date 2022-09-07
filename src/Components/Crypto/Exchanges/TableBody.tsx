import { parseNumber } from "../Coins/TableBody";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useAppSelector } from "../../../Store/hooks";


const TableExchangesBody = () => {
  
  const exchanges = useAppSelector(state => state.crypto.exchanges)

  return (
    <>
    {exchanges.map((item) => (
    <tr key={item.id}>
      <td>{item.trust_score_rank}</td>
      <td>
        <div>
          {item.id === "kraken" 
          ? <>
              <div>
                <a href="https://www.kraken.com/en-us" target="_blank" rel="noreferrer">
                  <img src={item.image} alt={item.name} />
                </a>
              </div>
              <div>
                <a href="https://www.kraken.com/en-us" target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </div>
            </>
          : <>
              <div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.image} alt={item.name} />
                </a>
              </div>
              <div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </div>
            </>
          }
        </div>
      </td>
      <td>
        <div>
          <ProgressBar now={item.trust_score} min={1} max={10} />
          {item.trust_score}
        </div>
      </td>
      <td>{parseNumber(item.trade_volume_24h_btc)} BTC</td>
      <td>{item.year_established || "Unknown"}</td>
      <td>{item.country || "Unknown"}</td>
    </tr>
  ))}
  </>
  )
};

export default TableExchangesBody;
