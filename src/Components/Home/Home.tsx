import style from "./Home.module.scss";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import news from "../../assets/images/news.jpg";
import {
  fetchMarkets,
  fetchGlobalData,
} from "../../Store/Reducers/cryptoSlice";
import {
  ArticlesBlockSkeleton,
  CoinsBlockSkeleton,
} from "../Common/HomeSkeleton";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import CoinsBlock from "./CoinsBlock";
import { ArticlesCarouselData, CryptoCarouselData } from "./CarouselData";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

export const handleImageError = (e: React.BaseSyntheticEvent) => {
  e.target.onerror = null;
  e.target.src = news;
};

const Home = () => {
  const { articles, isLoadingArticles } = useAppSelector(
    (state) => state.articles
  );
  const { globalData, isLoadingCrypto } = useAppSelector(
    (state) => state.crypto
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMarkets());
    if (articles.length === 0) {
      dispatch(fetchArticles());
    }
    if (Object.keys(globalData).length === 0) {
      dispatch(fetchGlobalData());
    }
  }, []);

  return (
    <div className={style.home}>
      <Carousel>
        <Carousel.Item>
          <CryptoCarouselData />
        </Carousel.Item>
        <Carousel.Item>
          <ArticlesCarouselData />
        </Carousel.Item>
      </Carousel>

      {isLoadingCrypto ? <CoinsBlockSkeleton /> : <CoinsBlock />}

      {isLoadingArticles ? (
        <ArticlesBlockSkeleton />
      ) : (
        articles.length !== 0 && (
          <div className={style.articles}>
            <section className={style.articlesLeft}>
              <NavLink to="/articles">
                <h2>
                  Top Articles{" "}
                  <RiArrowRightSLine className={style.arrow}/>
                </h2>
              </NavLink>
              <ul className={style.articlesLeftList}>
                {articles.slice(0, 2).map((article) => (
                  <li key={article.id}>
                    <NavLink
                      to={`/articles/${article.id}`}
                      className={style.articlesLeftLink}
                    >
                      <div className={style.articlesLeftImg}>
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          onError={handleImageError}
                        />
                      </div>
                      <p>{article.title.slice(0, 40)}...</p>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <BiTimeFive />
                        {article.publishedAt.slice(0, 10)}
                      </p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>

            <section className={style.articlesRight}>
              <NavLink to="/articles">
                <h2 className={style.articlesRightTitle}>
                  Recent Articles{" "}
                  <RiArrowRightSLine className={style.arrow}/>
                </h2>
              </NavLink>
              <ul className={style.articlesRightList}>
                {articles.slice(2, 5).map((article) => (
                  <li key={article.id}>
                    <NavLink to={`/articles/${article.id}`} className={style.articlesRightLink}>
                        <div className={style.articlesRightImg}>
                          <img
                            src={article.urlToImage}
                            alt={article.title}
                            onError={handleImageError}
                          />
                        </div>
                      <div className={style.articlesRightDescription}>
                        <p>{article.title}</p>
                        <p
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <BiTimeFive />
                          {article.publishedAt.slice(0, 10)}
                        </p>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
