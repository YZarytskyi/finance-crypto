import style from "./Home.module.scss";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import news from "../../assets/images/news.jpg";
import { fetchMarkets, fetchGlobalData } from "../../Store/Reducers/cryptoSlice";
import { ArticlesBlockSkeleton, CoinsBlockSkeleton } from "../Common/HomeSkeleton";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import CoinsBlock from "./CoinsBlock";
import { ArticlesCarouselData, CryptoCarouselData } from "./CarouselData";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

export const handleImageError = (e: React.BaseSyntheticEvent) => {e.target.onerror = null; e.target.src = news}

const Home = () => {
  const {articles, isLoadingArticles} = useAppSelector((state) => state.articles);
  const {globalData, isLoadingCrypto} = useAppSelector((state) => state.crypto);
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
      <Carousel className={style.carousel}>
      <Carousel.Item className={style.carouselItem}>
        <CryptoCarouselData />
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
        <ArticlesCarouselData />
        </Carousel.Item>
      </Carousel>

      {isLoadingCrypto ? (
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
                {articles.slice(0, 2).map((article) => (
                  <NavLink to={`/articles/${article.id}`} key={article.id}>
                    <div className="w-64 mr-10">
                      <div>
                        <img src={article.urlToImage} alt={article.title} onError={handleImageError}/>
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
                ))}
              </div>
            </div>

            <div className={style.articlesRight}>
              <div className="text-left ml-7 text-xl w-11/12">
                Recent Articles
              </div>

              {articles.slice(2, 5).map((article) => (
                <NavLink to={`/articles/${article.id}`} key={article.id}>
                  <div className={style.articlesRightList}>
                    <div>
                      <div className={style.articlesRightImg}>
                        <img src={article.urlToImage} alt={article.title} onError={handleImageError}/>
                      </div>
                    </div>
                    <div>
                      <div className="text-left ml-5 text-base">
                        {article.title}
                      </div>
                      <div className="text-left mt-1 ml-5 text-zinc-600 text-sm flex">
                        <div style={{ marginTop: "3px", marginRight: "5px" }}>
                          <BiTimeFive />
                        </div>
                        {article.publishedAt.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
