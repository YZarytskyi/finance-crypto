import { parseNumber } from "../Crypto/Coins/TableBody";
import style from "./CarouselData.module.scss";
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpeg";
import { useAppSelector } from "../../Store/hooks";
import { ActiveCoinsSkeleton, MarketCapSkeleton, VolumeSkeleton } from "../Common/HomeSkeleton";

export const CryptoCarouselData = () => {
  const globalData = useAppSelector((state) => state.crypto.globalData);
  return (
    <>
      <div className={`${style.image} ${style.imageCrypto}`}>
        <img src={slider2} alt="Second slide" />
      </div>
      <Carousel.Caption className={style.caption}>
        <div className={`${style.carouselInfo} ${style.cryptoData}`}>
          <NavLink to="/crypto/coins">
            <div>
              <div>
                {globalData.total_market_cap?.usd 
                ? parseNumber(Number(globalData.total_market_cap?.usd.toFixed(0))) + " $"
                : ""}
              </div>
              <div
                className={
                  globalData.market_cap_change_percentage_24h_usd &&
                  globalData.market_cap_change_percentage_24h_usd > 0
                    ? style.percentagePlus
                    : style.percentageMinus
                }
              >
                {globalData.market_cap_change_percentage_24h_usd 
                ? globalData.market_cap_change_percentage_24h_usd?.toFixed(2) + "%"
                : <MarketCapSkeleton />}
              </div>
            </div>
            <div>Market Capitalization</div>
          </NavLink>
          <NavLink to="/crypto/coins">
            <div>
              {globalData.total_volume?.usd 
              ? parseNumber(Number(globalData.total_volume.usd?.toFixed(0))) + " $"
              : <VolumeSkeleton />}
            </div>
            <div>Trading Volume 24h</div>
          </NavLink>
          <NavLink to="/crypto/coins">
            <div>
              {globalData.active_cryptocurrencies
              ? parseNumber(globalData.active_cryptocurrencies)
              : <ActiveCoinsSkeleton />}
            </div>
            <div>Active Cryptocurrencies</div>
          </NavLink>
        </div>
        <NavLink to="/crypto/coins" className={`${style.footer} ${style.footerCrypto}`}>
          <h1>CRYPTOCURRENCIES MARKETS</h1>
          <p>CHECK OUT LIVE DATA</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};

export const ArticlesCarouselData = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const filterArticles = articles.filter(article => article.title.length > 30 && article.title.length <= 50)
  return (
    <>
      <div className={style.image}>
        <img src={slider1} alt="Second slide" />
      </div>

      <Carousel.Caption className={style.caption}>
        <div className={`${style.carouselInfo} ${style.articlesData}`}>
          {filterArticles.slice(0, 3).map((article) => (
            <NavLink to={`/articles/${article.id}`} key={article.id}>
              <div>{article.title}</div>
              <div>
                <div>
                  <BiTimeFive />
                </div>
                <div>{article.publishedAt.slice(0, 10)}</div>
              </div>
            </NavLink>
          ))}
        </div>
        <NavLink to="/articles" className={style.footer}>
          <h1>ECONOMIC ANALYSIS</h1>
          <p>CHECK OUT NEW ARTICLES</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};
