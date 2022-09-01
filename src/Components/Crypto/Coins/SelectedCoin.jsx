import React, { useEffect, useState } from "react";
import style from "./SelectedCoin.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChartSelectedCoin from "./SelectedCoinChart";
import {
  fetchCoinDescription,
  fetchMarketChart,
  fetchMarkets,
  removeCoinDescription,
  removeMarketChart,
} from "../../../Store/Reducers/cryptoSlice";
import ProgressBar from "react-bootstrap/ProgressBar";
import { parseNumber, setClassName } from "./TableBody";



const SelectedCoin = () => {
  const coinId = useParams();
  const coin = useSelector((state) =>
    state.crypto.markets.find((item) => item.id === coinId.coinId)
  );
  const coinDescription = useSelector((state) => state.crypto.coinDescription);
  const coinDescWithoutTags = coinDescription
    .replace(/<a\s+href=\"(.*?)\">.*?<\/a>/g, "")
  const dispatch = useDispatch();
  const marketChart = useSelector((state) => state.crypto.marketChart.prices);
  const [days, setDays] = useState(30);

  useEffect(() => {
    dispatch(fetchMarketChart([coinId.coinId, days]));
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
    dispatch(fetchCoinDescription(coinId.coinId));
    return () => {
      dispatch(removeCoinDescription());
    };
  }, []);

  if (coin) {
    return (
      <div className={style.coin}>
        <div className={style.descriptionChart}>
          <div className={style.description}>
            <div className={style.rank}>Rank #{coin.market_cap_rank}</div>
            <div className={style.imgName}>
              <div>
                <img src={coin.image} width={55} height={55} alt={coin.name} />
              </div>
              <div>
                <div>{`${coin.name} (${coin.symbol.toUpperCase()})`}</div>
              </div>
            </div>
            <div className={style.pricePercentage}>
              <div>{coin.current_price}</div>
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
                  <div>Market Capitalization:</div>
                  <div>{parseNumber(coin.market_cap)} $</div>
                </div>
              )}
              {coin.total_volume && (
                <div>
                  <div>Trading Volume 24h:</div>
                  <div>{parseNumber(coin.total_volume)} $</div>
                </div>
              )}
              {coin.fully_diluted_valuation && (
                <div>
                  <div>Fully diluted valuation:</div>
                  <div>{parseNumber(coin.fully_diluted_valuation)} $</div>
                </div>
              )}
              {coin.circulating_supply && (
                <div>
                  <div>Circulating Supply:</div>
                  <div>{parseNumber(coin.circulating_supply)} $</div>
                </div>
              )}
              {coin.total_supply && (
                <div>
                  <div>Total Supply:</div>
                  <div>{parseNumber(coin.total_supply)} $</div>
                </div>
              )}
              {coin.max_supply && (
                <div>
                  <div>Max Supply:</div>
                  <div>{parseNumber(coin.max_supply)} $</div>
                </div>
              )}
            </div>
          </div>

          <div className={style.chartContainer}>
            <div className={style.chart}>
              <ChartSelectedCoin markets={marketChart} setDays={setDays} />
            </div>
          </div>
        </div>
        <div className={style.commonInfo}>
          <div className={style.coinInfo}>{coinDescWithoutTags}</div>
        </div>
      </div>
    );
  }
};

export default SelectedCoin;
