import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import sprite from 'assets/images/icons.svg'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import {
  ActiveCoinsSkeleton,
  CarouselArticleSkeleton,
  MarketCapSkeleton,
  VolumeSkeleton,
} from './HomeSkeleton'
import { fetchGlobalData } from 'Store/Reducers/cryptoSlice'
import { setClassNamePlusOrMinus, setNumberFormat } from 'utils/utils'
import style from './Home.module.scss'

export const CryptoCarouselData = () => {
  const globalData = useAppSelector((state) => state.crypto.globalData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isGlobalData = Object.keys(globalData).length
    if (!isGlobalData) {
      dispatch(fetchGlobalData())
    }
  }, [])

  const {
    total_market_cap,
    market_cap_change_percentage_24h_usd,
    total_volume,
    active_cryptocurrencies,
  } = globalData

  const marketCap = setNumberFormat(Number(total_market_cap?.usd.toFixed(0))) + ' $ '
  const marketCapChange = market_cap_change_percentage_24h_usd?.toFixed(2) + '%'

  const totalVolume = setNumberFormat(Number(total_volume?.usd?.toFixed(0))) + ' $'

  return (
    <>
      <div className={`${style.image} ${style.imageCrypto}`}></div>

      <Carousel.Caption className={style.caption}>
        <ul className={`${style.carouselInfo} ${style.cryptoData}`}>
          <li>
            <NavLink to='/crypto/coins' className={style.cryptoLink}>
              {market_cap_change_percentage_24h_usd ? (
                <div>
                  {marketCap}
                  <span className={setClassNamePlusOrMinus(market_cap_change_percentage_24h_usd)}>
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
            <NavLink to='/crypto/coins' className={style.cryptoLink}>
              <div>{total_volume?.usd ? totalVolume : <VolumeSkeleton />}</div>
              <p>Trading Volume 24h</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/crypto/coins' className={style.cryptoLink}>
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
        <NavLink to='/crypto/coins' className={style.footer + ' ' + style.footerCrypto}>
          <h1>CRYPTOCURRENCIES MARKETS</h1>
          <p>CHECK OUT LIVE DATA</p>
        </NavLink>
      </Carousel.Caption>
    </>
  )
}

export const ArticlesCarouselData = () => {
  const articles = useAppSelector((state) => state.articles.articles).slice(6, 9)

  return (
    <>
      <div className={`${style.image} ${style.imageArticles}`}></div>

      <Carousel.Caption className={style.caption}>
        <ul className={`${style.carouselInfo} ${style.articlesData}`}>
          {articles.length ? (
            articles.map((article) => (
              <li key={article._id}>
                <NavLink to={`/articles/${article._id}`} className={style.articlesLink}>
                  <p>
                    {article.headline.main.length > 50
                      ? article.headline.main.slice(0, 47) + '...'
                      : article.headline.main}
                  </p>
                  <p>
                    <svg className={style.iconTime}>
                      <use href={sprite + '#time'} />
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
        <NavLink to='/articles' className={style.footer}>
          <h1>ECONOMIC ANALYSIS</h1>
          <p>CHECK OUT NEW ARTICLES</p>
        </NavLink>
      </Carousel.Caption>
    </>
  )
}
