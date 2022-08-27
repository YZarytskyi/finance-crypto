import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpeg";
import slider3 from "../../assets/images/slider3.jpg";
import style from "./Home.module.scss";
import { fetchMarkets } from "../../Store/Reducers/cryptoSlice";
import {
  ArticlesBlockSkeleton,
  CoinsBlockSkeleton,
} from "../Common/LoadingSkeleton";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import CoinsBlock from "./CoinsBlock";

const Home = () => {
  
  const articles = useSelector((state) => state.articles.articles);
  const markets = useSelector((state) => state.crypto.markets);
  const isLoadingMarkets = useSelector((state) => state.crypto.isLoading);
  const isLoadingArticles = useSelector((state) => state.articles.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles());
    }
    if (markets.length === 0) {
      dispatch(fetchMarkets());
    }
  }, []);

  return (
    <div className={style.home}>
      <Carousel className={style.carousel}>
        <Carousel.Item>
          <img src={slider3} alt="First slide" />
          <Carousel.Caption>
            <NavLink to="/finance">
              <h1>FINANCE NEWS</h1>
              <p>CHECK OUT ALL THE TRENDS</p>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={slider2} alt="Second slide" />
          <Carousel.Caption>
            <NavLink to="/crypto">
              <h1>CRYPTOCURRENCIES MARKETS</h1>
              <p>CHECK OUT LIVE DATA</p>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={slider1} alt="Second slide" />
          <Carousel.Caption>
            <NavLink to="/articles">
              <h1>ECONOMIC ANALYSIS</h1>
              <p>CHECK OUT NEW ARTICLES</p>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {isLoadingMarkets ? (
        <CoinsBlockSkeleton />
      ) : (
        <div className={style.coins}>
          <CoinsBlock />
        </div>
      )}

      {isLoadingArticles ? (
        <ArticlesBlockSkeleton />
      ) : (
        articles.length !== 0 && (
          <div className={style.articles}>

            <div className={style.articlesLeft}>
              <div className="w-100 text-left ml-7 text-xl">Top Articles</div>
              <div className={style.articlesLeftContent}>
                {articles.slice(0,2).map(article => {
                  return(
                <NavLink to={`/articles/${article.id}`} key={article.id}>
                  <div className="w-64 mr-10">
                    <div>
                      <img src={article.urlToImage} alt="article title" />
                    </div>
                    <div className="text-left mt-1 w-72">
                      {article.title.slice(0, 65)}...
                    </div>
                    <div className="text-left mt-1 text-zinc-600 text-sm flex">
                      <div style={{ marginTop: "3px", marginRight: "5px" }}>
                        <BiTimeFive />
                      </div>
                      {article.publishedAt.slice(0, 10)}
                    </div>
                  </div>
                </NavLink>
                )})}
              </div>
            </div>

            <div className={style.articlesRight}>
              <div className="text-left ml-7 text-xl w-11/12">
                Recent Articles
              </div>
              {
              <NavLink to="/articles/3">
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
                    <div className="text-left mt-1 ml-5 text-zinc-600 text-sm flex">
                      <div style={{ marginTop: "3px", marginRight: "5px" }}>
                        <BiTimeFive />
                      </div>
                      {articles[2].publishedAt.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </NavLink>
              }
              <NavLink to="/articles/4">
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
                    <div className="text-left mt-1 ml-5 text-zinc-600 text-sm flex">
                      <div style={{ marginTop: "3px", marginRight: "5px" }}>
                        <BiTimeFive />
                      </div>
                      {articles[3].publishedAt.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/articles/5">
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
                    <div className="text-left mt-1 ml-5 text-zinc-600 text-sm flex">
                      <div style={{ marginTop: "3px", marginRight: "5px" }}>
                        <BiTimeFive />
                      </div>
                      {articles[4].publishedAt.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

          </div>
        )
      )}
    </div>
  );
};

export default Home;
