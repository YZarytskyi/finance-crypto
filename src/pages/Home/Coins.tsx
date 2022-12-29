import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchMarketsHome } from "../../Store/Reducers/cryptoSlice";
import ChartHome from "./CoinsChart";
import CoinsSelect from "./CoinsSelect";
import { CoinsBlockSkeleton } from "./HomeSkeleton";
import { setClassNamePlusOrMinus } from "../../utils/utils";
import { Markets } from "../../types/Types";
import style from "./Home.module.scss";

const Coins = () => {
  enum Hours {
    H24 = "24",
    H72 = "72",
    H168 = "168",
  }
  const { marketsHome, isLoadingCrypto } = useAppSelector(
    (state) => state.crypto
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMarketsHome());
  }, []);


  const ucFirst = (name: string): string => {
    return name[0].toUpperCase() + name.slice(1);
  };

  const price = (coin: Markets) => {
      let price = coin.current_price
      if (price < 1) {
        price = Number(price.toFixed(4))
      } else if (price < 100) {
        price = Number(price.toFixed(2))
      } else if (price < 10000) {
        price = Number(price.toFixed(1))
      } else {
        price = Number(price.toFixed(0))
      }
      return `${price} $`
  }

  return (
    <>
      {isLoadingCrypto ? (
        <CoinsBlockSkeleton />
      ) : (
        <section className={style.coins}>
          <ul className={style.coinsList}>

            {marketsHome.map((coin) => (
              <li className={style.item} key={coin.id}>
                <NavLink
                  to={`coins/${coin.id}`}
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
                      className={setClassNamePlusOrMinus(
                        coin.price_change_percentage_24h
                      )}
                    >
                      {coin.price_change_percentage_24h.toFixed(1)}%
                    </p>
                    <p className={style.price}>
                      {price(coin)}
                    </p>
                  </div>
                  <NavLink to={`${coin.id}`}>
                    <div className={style.chart}>
                      <ChartHome
                        sparkline={coin.sparkline_in_7d.price}
                        coinId={coin.id}
                      />
                    </div>
                  </NavLink>
                </div>
              </li>
            ))}

          </ul>
        </section>
      )}
    </>
  );
};

export default Coins;
