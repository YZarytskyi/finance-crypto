import style from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import sprite from "../../assets/images/icons.svg";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import {
  ActiveCoinsSkeleton,
  MarketCapSkeleton,
  VolumeSkeleton,
} from "./HomeSkeleton";
import { useEffect } from "react";
import { fetchGlobalData } from "../../Store/Reducers/cryptoSlice";
import { setNumberFormat } from "../../utils/utils";


export const CryptoCarouselData = () => {
  const globalData = useAppSelector((state) => state.crypto.globalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Object.keys(globalData).length) {
      dispatch(fetchGlobalData());
    }
  }, []);

  return (
    <>
      <div className={`${style.image} ${style.imageCrypto}`}>
        <img src={slider2} alt="Second slide" />
      </div>
      <Carousel.Caption className={style.caption}>
        <ul className={`${style.carouselInfo} ${style.cryptoData}`}>
          <li>
            <NavLink to="/crypto/coins" className={style.cryptoLink}>
              <div>
                {globalData.total_market_cap?.usd
                  ? setNumberFormat(
                      Number(globalData.total_market_cap?.usd.toFixed(0))
                    ) + " $ "
                  : ""}
                <span
                  className={
                    globalData.market_cap_change_percentage_24h_usd &&
                    globalData.market_cap_change_percentage_24h_usd > 0
                      ? style.percentagePlus
                      : style.percentageMinus
                  }
                >
                  {globalData.market_cap_change_percentage_24h_usd ? (
                    globalData.market_cap_change_percentage_24h_usd?.toFixed(
                      2
                    ) + "%"
                  ) : (
                    <MarketCapSkeleton />
                  )}
                </span>
              </div>
              <p>Market Capitalization</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/coins" className={style.cryptoLink}>
              <div>
                {globalData.total_volume?.usd ? (
                  setNumberFormat(Number(globalData.total_volume.usd?.toFixed(0))) +
                  " $"
                ) : (
                  <VolumeSkeleton />
                )}
              </div>
              <p>Trading Volume 24h</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/coins" className={style.cryptoLink}>
              <div>
                {globalData.active_cryptocurrencies ? (
                  setNumberFormat(globalData.active_cryptocurrencies)
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
  const filterArticles = articles.filter(
    (article) => article.title.length > 30 && article.title.length <= 50
  );

  return (
    <>
      <div className={style.image}>
        <img src={slider1} alt="Second slide" />
      </div>

      <Carousel.Caption className={style.caption}>
        <ul className={style.carouselInfo + " " + style.articlesData}>
          {filterArticles.slice(0, 3).map((article) => (
            <li key={article.id}>
              <NavLink
                to={`/articles/${article.id}`}
                className={style.articlesLink}
              >
                <p>{article.title}</p>
                <p>
                <svg className={style.iconTime}>
                  <use href={sprite + "#time"} />
                </svg>
                  {article.publishedAt.slice(0, 10)}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/articles" className={style.footer}>
          <h1>ECONOMIC ANALYSIS</h1>
          <p>CHECK OUT NEW ARTICLES</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};
