import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import sprite from "../../assets/images/icons.svg";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import {
  ActiveCoinsSkeleton,
  CarouselArticleSkeleton,
  MarketCapSkeleton,
  VolumeSkeleton,
} from "./HomeSkeleton";
import { fetchGlobalData } from "../../Store/Reducers/cryptoSlice";
import { setClassNamePlusOrMinus, setNumberFormat } from "../../utils/utils";
import style from "./Home.module.scss";

export const CryptoCarouselData = () => {
  const globalData = useAppSelector((state) => state.crypto.globalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isGlobalData = Object.keys(globalData).length;
    if (!isGlobalData) {
      dispatch(fetchGlobalData());
    }
  }, []);

  const {
    total_market_cap,
    market_cap_change_percentage_24h_usd,
    total_volume,
    active_cryptocurrencies,
  } = globalData;

  const marketCap =
    setNumberFormat(Number(total_market_cap?.usd.toFixed(0))) + " $ ";
  const marketCapChange =
    market_cap_change_percentage_24h_usd?.toFixed(2) + "%";

  const totalVolume =
    setNumberFormat(Number(total_volume?.usd?.toFixed(0))) + " $";

  return (
    <>
      <div className={`${style.image} ${style.imageCrypto}`}>
        <img src={slider2} alt="Second slide" />
      </div>
      <Carousel.Caption className={style.caption}>
        <ul className={`${style.carouselInfo} ${style.cryptoData}`}>
          <li>
            <NavLink to="/crypto/coins" className={style.cryptoLink}>
              {market_cap_change_percentage_24h_usd ? (
                <div>
                  {marketCap}
                  <span
                    className={setClassNamePlusOrMinus(
                      market_cap_change_percentage_24h_usd
                    )}
                  >
                    {marketCapChange}
                  </span>
                </div>
              ) : (
                <MarketCapSkeleton />
              )}
              <p>Market Capitalization</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/coins" className={style.cryptoLink}>
              <div>{total_volume?.usd ? totalVolume : <VolumeSkeleton />}</div>
              <p>Trading Volume 24h</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/coins" className={style.cryptoLink}>
              <div>
                {active_cryptocurrencies ? (
                  setNumberFormat(active_cryptocurrencies)
                ) : (
                  <ActiveCoinsSkeleton />
                )}
              </div>
              <p>Active Cryptocurrencies</p>
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/crypto/coins"
          className={style.footer + " " + style.footerCrypto}
        >
          <h1>CRYPTOCURRENCIES MARKETS</h1>
          <p>CHECK OUT LIVE DATA</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};

export const ArticlesCarouselData = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const filterArticles = articles
    .filter(
      (article) =>
        article.headline.main.length > 30 && article.headline.main.length <= 50
    )
    .slice(0, 3);

  return (
    <>
      <div className={style.image}>
        <img src={slider1} alt="Second slide" />
      </div>

      <Carousel.Caption className={style.caption}>
        <ul className={`${style.carouselInfo} ${style.articlesData}`}>

          {filterArticles.length ? (
            filterArticles.map((article) => (
              <li key={article.id}>
                <NavLink
                  to={`/articles/${article.id}`}
                  className={style.articlesLink}
                >
                  <p>{article.headline.main}</p>
                  <p>
                    <svg className={style.iconTime}>
                      <use href={sprite + "#time"} />
                    </svg>
                    {article.pub_date.slice(0, 10)}
                  </p>
                </NavLink>
              </li>
            ))
          ) : (
            <CarouselArticleSkeleton />
          )}

        </ul>
        <NavLink to="/articles" className={style.footer}>
          <h1>ECONOMIC ANALYSIS</h1>
          <p>CHECK OUT NEW ARTICLES</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};
