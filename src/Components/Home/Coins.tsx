import style from "./Home.module.scss";
import ChartHome from "./CoinsChart";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { CoinsBlockSkeleton } from "./HomeSkeleton";
import { useEffect } from "react";
import { fetchMarkets } from "../../Store/Reducers/cryptoSlice";
import CoinsSelect from "./CoinsSelect";

const Coins = () => {
  const { markets, isLoadingCrypto } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);

  enum Hours {
    H24 = "24",
    H72 = "72",
    H168 = "168",
  }

  const ucFirst = (name: string): string => {
    return name[0].toUpperCase() + name.slice(1);
  };

  return (
    <>
      {isLoadingCrypto ? (
        <CoinsBlockSkeleton />
      ) : (
        <section className={style.coins}>
          <ul className={style.coinsList}>
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
                  <li className={style.item} key={coin.id}>
                    <NavLink
                      to={`/crypto/coins/${coin.id}`}
                      className={style.cryptoLeftSide}
                    >
                      <img src={coin.image} alt={coin.name} />
                      <p>{ucFirst(coin.id)}</p>
                      <p>{coin.symbol.toUpperCase()}</p>
                    </NavLink>
                    <div className={style.cryptoRightSide}>
                      <div className={style.cryptoRightTop}>
                        <CoinsSelect
                          H24={Hours.H24}
                          H72={Hours.H72}
                          H168={Hours.H168}
                          coinId={coin.id}
                        />
                        <p
                          className={
                            coin.price_change_percentage_24h > 0
                              ? style.percentagePlus
                              : style.percentageMinus
                          }
                        >
                          {coin.price_change_percentage_24h.toFixed(1)}%
                        </p>
                        <p className={style.price}>
                          {coin.current_price < 1 &&
                            coin.current_price.toFixed(4)}
                          {coin.current_price >= 1 &&
                            coin.current_price < 100 &&
                            coin.current_price.toFixed(2)}
                          {coin.current_price >= 100 &&
                            coin.current_price < 10000 &&
                            coin.current_price.toFixed(1)}
                          {coin.current_price >= 10000 &&
                            coin.current_price.toFixed(0)}
                          {` $`}
                        </p>
                      </div>
                      <NavLink to={`/crypto/coins/${coin.id}`}>
                        <div className={style.chart}>
                          <ChartHome
                            sparkline={coin.sparkline_in_7d.price}
                            coinId={coin.id}
                          />
                        </div>
                      </NavLink>
                    </div>
                  </li>
                );
              } else return null;
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Coins;
