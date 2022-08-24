import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpeg";
import slider3 from "../../assets/images/slider3.jpg";
import style from "./Home.module.css";
import { fetchMarkets } from "../../Store/Reducers/cryptoSlice";
import Chart from "./Chart";
import { ArticlesBlockSkeleton, CoinsBlockSkeleton } from "../LoadingSkeleton";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { NavLink } from "react-router-dom";
import Select from "./Select";

const Home = () => {
  const articles = useSelector((state) => state.articles.articles);
  const markets = useSelector((state) => state.crypto.markets);
  const isLoadingMarkets = useSelector((state) => state.crypto.isLoading)
  const isLoadingArticles = useSelector((state) => state.articles.isLoading)
  const dispatch = useDispatch();

  const ucFirst = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    if (articles.length === 0) { 
      dispatch(fetchArticles());
    } 
    if (markets.length === 0) {
      dispatch(fetchMarkets());
    }
  }, []);

  const CoinsBlock = () => {
    const oneDay = '24';
    const threeDays = '72';
    const sevenDays = '168';
    const [chartTime, setChartTime] = React.useState(sevenDays)

    if (markets.length !== 0) {
      return (
        <>
          {markets.map((coin) => {
            if (
              coin.symbol === "btc" ||
              coin.symbol === "eth" ||
              coin.symbol === "xrp" ||
              coin.symbol === "sol" ||
              coin.symbol === "ada" ||
              coin.symbol === "dot"
            ) {
              return (
                <div className={style.item} key={coin.id}>
                  <div className={style.cryptoLeftSide}>
                    <div>
                      <img src={coin.image} alt={coin.name} />
                    </div>
                    <div className="text-xs mt-2">{ucFirst(coin.id)}</div>
                    <div className="text-xs mt-1 text-center">
                      {coin.symbol.toUpperCase()}
                    </div>
                  </div>
                  <div className={style.cryptoRightSide}>
                  <div className={style.cryptoSelectPercentagePrice}>
                    <div>
                      <Select chartTime={chartTime} setChartTime={setChartTime} oneDay={oneDay} threeDays={threeDays} sevenDays={sevenDays} coinId={coin.id}/>
                    </div>
                    <div className={style.cryptoPercentagePrice}>
                      <div
                        className={
                          coin.price_change_percentage_24h > 0
                            ? style.percentagePlus
                            : style.percentageMinus
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div className={style.price}>
                        ${" "}
                        {coin.current_price < 1 && coin.current_price.toFixed(4)}
                        {coin.current_price >= 1 && coin.current_price < 100 && coin.current_price.toFixed(2)}
                        {coin.current_price >= 100  && coin.current_price < 10000 && coin.current_price.toFixed(1)}
                        {coin.current_price >= 10000 && coin.current_price}
                      </div>
                    </div>
                    </div>
                    <div className={style.chart}>
                      <Chart markets={coin.sparkline_in_7d.price} chartTime={chartTime} coinId={coin.id}
                      />
                    </div>
                  </div>
                </div>
              );
            } else return "";
          })}
        </>
      );
    }
  };

  return (
    <div className={style.home}>
      <Carousel className={style.carousel}>
        <Carousel.Item>
          <img src={slider3} alt="First slide" />
          <Carousel.Caption>
          <NavLink to='/finance'>
            <h1>FINANCE NEWS</h1>
            <p>CHECK OUT ALL THE TRENDS</p>
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={slider2} alt="Second slide" />
          <Carousel.Caption>
          <NavLink to='/crypto'>
            <h1>CRYPTOCURRENCIES MARKETS</h1>
            <p>CHECK OUT LIVE DATA</p>
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={slider1} alt="Second slide" />
          <Carousel.Caption>
          <NavLink to='/articles'>
            <h1>ECONOMIC ANALYSIS</h1>
            <p>CHECK OUT NEW ARTICLES</p>
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {isLoadingMarkets
      ? <CoinsBlockSkeleton />
      : <div className={style.charts}> 
          <CoinsBlock />
        </div>}

      {isLoadingArticles
      ? <ArticlesBlockSkeleton />
      : articles.length !== 0 && (
        <div className={style.articles}>
          <div className={style.articlesLeft}>
            <div className="w-100 text-left ml-7 text-xl">Top Articles</div>
            <div className="flex ml-7 mt-3">
            <NavLink to='/articles/1'>
              <div className="w-64 mr-10">
                <div>
                  <img src={articles[0].urlToImage} alt="article title" />
                </div>
                <div className="text-left mt-1 w-72">{
                  articles[0].title.slice(0, 65)}...
                  </div>
                <div className="text-left mt-1 text-zinc-600 text-sm">
                  {articles[0].publishedAt.slice(0, 10)}
                </div>
              </div>
              </NavLink>
              <NavLink to='/articles/2'>
              <div className="w-64 mx-10">
                <div>
                  <img src={articles[1].urlToImage} alt="article title" />
                </div>
                <div className="text-left mt-1 w-72">
                  {articles[1].title.slice(0, 65)}...
                </div>
                <div className="text-left mt-1 text-zinc-600 text-sm">
                  {articles[1].publishedAt.slice(0, 10)}
                </div>
              </div>
              </NavLink>
            </div>
          </div>
          <div className={style.articlesRight}>
            <div className="text-left ml-7 text-xl w-11/12">
              Recent Articles
            </div>
            <NavLink to='/articles/3'>
            <div className={style.articlesRightList}>
            <div>
              <div className={style.articlesRightImg}>
                <img src={articles[2].urlToImage} alt="article title" />
              </div>
              </div>
              <div>
                <div className="text-left ml-5 text-base">
                  {articles[2].title}
                </div>
                <div className="text-left mt-1 ml-5 text-zinc-600 text-sm">
                  {articles[2].publishedAt.slice(0, 10)}
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to='/articles/4'>
            <div className={style.articlesRightList}>
            <div>
              <div className={style.articlesRightImg}>
                <img src={articles[3].urlToImage} alt="article title" />
              </div>
              </div>
              <div>
                <div className="text-left ml-5 text-base">
                  {articles[3].title}
                </div>
                <div className="text-left mt-1 ml-5 text-zinc-600 text-sm">
                  {articles[3].publishedAt.slice(0, 10)}
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to='/articles/5'>
            <div className={style.articlesRightList}>
            <div>
              <div className={style.articlesRightImg}>
                <img src={articles[4].urlToImage} alt="article title" />
              </div>
              </div>
              <div>
                <div className="text-left ml-5 text-base">
                  {articles[4].title}
                </div>
                <div className="text-left mt-1 ml-5 text-zinc-600 text-sm">
                  {articles[4].publishedAt.slice(0, 10)}
                </div>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
