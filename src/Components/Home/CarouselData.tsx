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
      <img src={slider2} alt="Second slide" />
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

      <Carousel.Caption>
        <NavLink to="/crypto/coins">
          <h1>CRYPTOCURRENCIES MARKETS</h1>
          <p>CHECK OUT LIVE DATA</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};

export const ArticlesCarouselData = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <>
      <img src={slider1} alt="Second slide" />
      <div className={`${style.carouselInfo} ${style.articlesData}`}>
        {articles.slice(8, 11).map((article) => (
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
      <Carousel.Caption>
        <NavLink to="/articles">
          <h1>ECONOMIC ANALYSIS</h1>
          <p>CHECK OUT NEW ARTICLES</p>
        </NavLink>
      </Carousel.Caption>
    </>
  );
};
