import { parseNumber } from "../Crypto/Coins/TableBody";
import style from "./CarouselData.module.scss"
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { GlobalData } from "../../Types/Types";
import { Articles } from "../../Store/Reducers/articlesSlice";

interface CryptoCarouselDataProps {
  globalData: Partial<GlobalData>
}

export const CryptoCarouselData: React.FC<CryptoCarouselDataProps> = ({globalData}) => {
  return (
    <>
      <NavLink to="/crypto/coins">
        <div className={`${style.carouselInfo} ${style.cryptoData}`}>
          <div>
            <div>
              <div>
                {`${parseNumber(Number(globalData.total_market_cap?.usd.toFixed(0)))}  $`}
              </div>
              <div className={globalData.market_cap_change_percentage_24h_usd &&
                globalData.market_cap_change_percentage_24h_usd > 0 
                ? style.percentagePlus 
                : style.percentageMinus}>
                {`${globalData.market_cap_change_percentage_24h_usd?.toFixed(2)}%`}
              </div>
            </div>
            <div>Market Capitalization</div>
          </div>
          <div>
            <div>
              {`${globalData.total_volume?.usd && parseNumber(Number(globalData.total_volume.usd?.toFixed(0)))} $`}
            </div>
            <div>Trading Volume 24h</div>
          </div>
          <div>
            <div>
              {globalData.active_cryptocurrencies && parseNumber(globalData.active_cryptocurrencies)}
            </div>
            <div>Active Cryptocurrencies</div>
          </div>
        </div>
      </NavLink>
    </>
  )
};

interface ArticlesCarouselDataProps {
  articles: Array<Articles>
}

export const ArticlesCarouselData: React.FC<ArticlesCarouselDataProps> = ({articles}) => {
  return(
    <>
      <NavLink to="/articles">
        <div className={`${style.carouselInfo} ${style.articlesData}`}>
          <div>
            <div>{articles[7]?.title}</div>
            <div>
              <div><BiTimeFive /></div>
              <div>{articles[7]?.publishedAt.slice(0, 10)}</div>
            </div>
          </div>
          <div>
            <div>{articles[11]?.title}</div>
            <div>
              <div><BiTimeFive /></div>
              <div>{articles[11]?.publishedAt.slice(0, 10)}</div>
            </div>
          </div>
          <div>
            <div>{articles[9]?.title}</div>
            <div>
              <div><BiTimeFive /></div>
              <div>{articles[9]?.publishedAt.slice(0, 10)}</div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};