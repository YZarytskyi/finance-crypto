import React, { useEffect } from "react";
import style from "../Crypto.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChartSelectedCoin from "../../Common/ChartSelectedCoin";
import {
  fetchCoinDescription,
  fetchMarkets,
  removeCoinDescription,
} from "../../../Store/Reducers/cryptoSlice";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Coin = () => {
  const coinId = useParams();
  const coin = useSelector((state) =>
    state.crypto.markets.find((item) => item.id === coinId.coinId)
  );
  const coinDescription = useSelector((state) => state.crypto.coinDescription);
  const coinDescWithoutTags = (coinDescription.replace(/<a\s+href=\"(.*?)\">.*?<\/a>/g ,'').replace()) 
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coin) {
      dispatch(fetchMarkets());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCoinDescription(coinId.coinId));
    return () => {
      dispatch(removeCoinDescription());
    }
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
              <div
                className={
                  coin.price_change_percentage_24h > 0
                    ? style.percentagePlus
                    : style.percentageMinus
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
            <div className={style.progressBar}>
              <ProgressBar now={coin.current_price} min={coin.low_24h} max={coin.high_24h} />
            </div>
            <div className={style.lowHigh}>
              <div>{coin.low_24h > coin.current_price ? coin.current_price : coin.low_24h} $</div>
              <div>24h</div>
              <div>{coin.high_24h < coin.current_price ? coin.current_price : coin.high_24h} $</div>
            </div>
            {coin.market_cap && (
              <div className={style.marketCapInfo}>
                <div>Market Capitalization:</div>
                <div>{coin.market_cap} $</div>
              </div>
            )}
            {coin.total_volume && (
              <div className={style.marketCapInfo}>
                <div>Trading Volume 24h:</div>
                <div>{coin.total_volume} $</div>
              </div>
            )}
            {coin.fully_diluted_valuation && (
              <div className={style.marketCapInfo}>
                <div>Fully diluted valuation:</div>
                <div>{coin.fully_diluted_valuation} $</div>
              </div>
            )}
            {coin.circulating_supply && (
              <div className={style.marketCapInfo}>
                <div>Circulating Supply:</div>
                <div>{coin.circulating_supply} $</div>
              </div>
            )}
            {coin.total_supply && (
              <div className={style.marketCapInfo}>
                <div>Total Supply:</div>
                <div>{coin.total_supply} $</div>
              </div>
            )}
            {coin.max_supply && (
              <div className={style.marketCapInfo}>
                <div>Max Supply:</div>
                <div>{coin.max_supply} $</div>
              </div>
            )}
          </div>

          <div className={style.chartContainer}>
            <div>7d</div>
            <div className={style.chart}>
              <ChartSelectedCoin markets={coin.sparkline_in_7d.price} />
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

export default Coin;
