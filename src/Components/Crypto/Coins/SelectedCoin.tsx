import style from "./SelectedCoin.module.scss";
import s from "../NavCrypto.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectedCoinMarketChart from "./SelectedCoinChart";
import {
  fetchCoinDescription,
  fetchSelectedCoinMarketChart,
  fetchMarkets,
  removeCoinDescription,
  removeMarketChart,
} from "../../../Store/Reducers/cryptoSlice";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import NavCrypto from "../NavCrypto";
import { setNumberFormat } from "../../../utils/utils";


const SelectedCoin = () => {
  const { coinId } = useParams();
  const { markets, coinDescription } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();

  const [days, setDays] = useState<number | "max">(30);

  useEffect(() => {
    dispatch(fetchSelectedCoinMarketChart([coinId, days]));
    return () => {
      dispatch(removeMarketChart());
    };
  }, [days]);

  useEffect(() => {
    if (!coin) {
      dispatch(fetchMarkets());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCoinDescription(coinId));
    return () => {
      dispatch(removeCoinDescription());
    };
  }, []);

  const setClassName = (value: number) => {
    return (value > 0) ? style.percentagePlus : style.percentageMinus;
  };

  const coin = markets.find((item) => item.id === coinId);
  const coinDescWithoutTags =
    coinDescription &&
    coinDescription.replace(/<a\s+href="(.*?)">.*?<\/a>/g, "");

  if (coin) {
    return (
      <>
      <NavCrypto />
      <section className={style.coin}>
        <div className={style.descriptionChart}>
          <div className={style.description}>
            <p className={style.rank}>Rank #{coin.market_cap_rank}</p>
            <div className={style.imgName}>
              <img src={coin.image} width={55} height={55} alt={coin.name} />
              <p>{`${coin.name} (${coin.symbol.toUpperCase()})`}</p>
            </div>
            <div className={style.pricePercentage}>
              <div>{coin.current_price} $</div>
              <div className={setClassName(coin.price_change_percentage_24h)}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
            <div className={style.progressBar}>
              <ProgressBar
                now={coin.current_price}
                min={coin.low_24h}
                max={coin.high_24h}
              />
            </div>
            <div className={style.lowHigh}>
              <div>
                {coin.low_24h > coin.current_price
                  ? coin.current_price
                  : coin.low_24h}{" "}
                $
              </div>
              <div>24h</div>
              <div>
                {coin.high_24h < coin.current_price
                  ? coin.current_price
                  : coin.high_24h}{" "}
                $
              </div>
            </div>

            <div className={style.marketCapInfo}>
              {coin.market_cap && (
                <div>
                  <p>Market Capitalization:</p>
                  <div>{setNumberFormat(coin.market_cap)} $</div>
                </div>
              )}
              {coin.total_volume && (
                <div>
                  <p>Trading Volume 24h:</p>
                  <div>{setNumberFormat(coin.total_volume)} $</div>
                </div>
              )}
              {coin.fully_diluted_valuation && (
                <div>
                  <p>Fully diluted valuation:</p>
                  <div>{setNumberFormat(coin.fully_diluted_valuation)} $</div>
                </div>
              )}
              {coin.circulating_supply && (
                <div>
                  <p>Circulating Supply:</p>
                  <div>
                    {setNumberFormat(+coin.circulating_supply.toFixed(0))} $
                  </div>
                </div>
              )}
              {coin.total_supply && (
                <div>
                  <p>Total Supply:</p>
                  <div>{setNumberFormat(+coin.total_supply.toFixed(0))} $</div>
                </div>
              )}
              {coin.max_supply && (
                <div>
                  <p>Max Supply:</p>
                  <div>{setNumberFormat(coin.max_supply)} $</div>
                </div>
              )}
            </div>
          </div>

          <div className={style.chartContainer}>
            <SelectedCoinMarketChart setDays={setDays} />
          </div>
        </div>
        <p className={style.coinInfo}>{coinDescWithoutTags}</p>
      </section>
      </>
    );
  }
  return null;
};

export default SelectedCoin;
