import style from "./Home.module.scss";
import ChartHome from "./ChartHome";
import Select from "../Common/Select";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

const CoinsBlock = () => {

  const markets = useAppSelector((state) => state.crypto.markets);
  const dispatch = useAppDispatch();

  enum Hours {
    H24 = "24",
    H72 = "72",
    H168 = "168",
  }

  const ucFirst = (name: string) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  if (markets.length !== 0) {
    return (
      <>
        {markets.map((coin) => {
          if (
            coin.symbol === "btc" ||
            coin.symbol === "eth" ||
            coin.symbol === "xrp" ||
            coin.symbol === "sol" ||
            coin.symbol === "ada" ||
            coin.symbol === "dot"
          ) {
            return (
              <div className={style.item} key={coin.id}>
                <NavLink
                  to={`/crypto/coins/${coin.id}`}
                  className={style.cryptoLeftSide}
                >
                  <div>
                    <img src={coin.image} alt={coin.name} />
                  </div>
                  <div>{ucFirst(coin.id)}</div>
                  <div>
                    {coin.symbol.toUpperCase()}
                  </div>
                </NavLink>
                <div className={style.cryptoRightSide}>
                  <div>
                    <div>
                      <Select
                        H24={Hours.H24}
                        H72={Hours.H72}
                        H168={Hours.H168}
                        coinId={coin.id}
                      />
                    </div>
                    <div className={style.cryptoPercentagePrice}>
                      <div
                        className={
                          coin.price_change_percentage_24h > 0
                            ? style.percentagePlus
                            : style.percentageMinus
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(1)}%
                      </div>
                      <div className={style.price}>
                        {coin.current_price < 1 &&
                          coin.current_price.toFixed(4)}
                        {coin.current_price >= 1 &&
                          coin.current_price < 100 &&
                          coin.current_price.toFixed(2)}
                        {coin.current_price >= 100 &&
                          coin.current_price < 10000 &&
                          coin.current_price.toFixed(1)}
                        {coin.current_price >= 10000 && coin.current_price.toFixed(0)}
                        {` $`}
                      </div>
                    </div>
                  </div>
                  <div className={style.chart}>
                    <ChartHome
                      sparkline={coin.sparkline_in_7d.price}
                      coinId={coin.id}
                    />
                  </div>
                </div>
              </div>
            );
          } else return null
        })}
      </>
    );
  }
  return null
};

export default CoinsBlock;
