import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectedCoinMarketChart from "./SelectedCoinChart";
import {
  fetchSelectedCoinMarketChart,
  removeSelectedCoin,
  removeMarketChart,
  fetchCoinsById,
} from "../../../Store/Reducers/cryptoSlice";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import NavCrypto from "../NavCrypto";
import { setNumberFormat } from "../../../utils/utils";
import Preloader from "../../Common/Preloader";
import style from "./SelectedCoin.module.scss";

const SelectedCoin = () => {
  const { coinId } = useParams();
  const selectedCoin = useAppSelector((state) => state.crypto.selectedCoin);
  const dispatch = useAppDispatch();

  const [days, setDays] = useState<number | "max">(30);

  useEffect(() => {
    dispatch(fetchSelectedCoinMarketChart([coinId, days]));
    return () => {
      dispatch(removeMarketChart());
    };
  }, [days]);

  useEffect(() => {
    coinId && dispatch(fetchCoinsById(coinId));
    return () => {
      dispatch(removeSelectedCoin());
    };
  }, [coinId]);

  const setClassName = (value: number) => {
    return value > 0 ? style.percentagePlus : style.percentageMinus;
  };
  

  const coinDescWithoutTags = selectedCoin?.description.replace(
    /<a\s+href="(.*?)">.*?<\/a>,?/g,
    ""
  );

  if (!selectedCoin) {
    return <Preloader />;
  }

  return (
    <>
      <NavCrypto />
      <section className={style.coin}>
        <div className={style.descriptionChart}>
          <div className={style.description}>
            <p className={style.rank}>Rank #{selectedCoin.market_cap_rank}</p>
            <div className={style.imgName}>
              <img
                src={selectedCoin.image}
                width={55}
                height={55}
                alt={selectedCoin.name}
              />
              <p>{`${
                selectedCoin.name
              } (${selectedCoin.symbol.toUpperCase()})`}</p>
            </div>
            <div className={style.pricePercentage}>
              <div>{selectedCoin.current_price} $</div>
              <div
                className={setClassName(
                  selectedCoin?.price_change_percentage_24h
                )}
              >
                {selectedCoin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
            <div className={style.progressBar}>
              <ProgressBar
                now={selectedCoin.current_price}
                min={selectedCoin.low_24h}
                max={selectedCoin.high_24h}
              />
            </div>
            <div className={style.lowHigh}>
              <div>
                {selectedCoin.low_24h > selectedCoin.current_price
                  ? selectedCoin.current_price
                  : selectedCoin.low_24h}{" "}
                $
              </div>
              <div>24h</div>
              <div>
                {selectedCoin.high_24h < selectedCoin.current_price
                  ? selectedCoin.current_price
                  : selectedCoin.high_24h}{" "}
                $
              </div>
            </div>

            <div className={style.marketCapInfo}>
              {selectedCoin.market_cap && (
                <div>
                  <p>Market Capitalization:</p>
                  <div>{setNumberFormat(selectedCoin.market_cap)} $</div>
                </div>
              )}
              {selectedCoin.total_volume && (
                <div>
                  <p>Trading Volume 24h:</p>
                  <div>{setNumberFormat(selectedCoin.total_volume)} $</div>
                </div>
              )}
              {selectedCoin.fully_diluted_valuation && (
                <div>
                  <p>Fully diluted valuation:</p>
                  <div>
                    {setNumberFormat(selectedCoin.fully_diluted_valuation)} $
                  </div>
                </div>
              )}
              {selectedCoin.circulating_supply && (
                <div>
                  <p>Circulating Supply:</p>
                  <div>
                    {setNumberFormat(
                      +selectedCoin.circulating_supply.toFixed(0)
                    )}{" "}
                    $
                  </div>
                </div>
              )}
              {selectedCoin.total_supply && (
                <div>
                  <p>Total Supply:</p>
                  <div>
                    {setNumberFormat(+selectedCoin.total_supply.toFixed(0))} $
                  </div>
                </div>
              )}
              {selectedCoin.max_supply && (
                <div>
                  <p>Max Supply:</p>
                  <div>{setNumberFormat(selectedCoin.max_supply)} $</div>
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
};

export default SelectedCoin;
