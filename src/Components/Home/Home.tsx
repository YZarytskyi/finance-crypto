import style from "./Home.module.scss";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import news from "../../assets/images/news.jpg";
import { fetchMarkets, fetchGlobalData } from "../../Store/Reducers/cryptoSlice";
import { ArticlesBlockSkeleton, CoinsBlockSkeleton } from "../Common/HomeSkeleton";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
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
        <CoinsBlock />
      )}

      {isLoadingArticles ? (
        <ArticlesBlockSkeleton />
      ) : (
        articles.length !== 0 && (
          <div className={style.articles}>
            <div className={style.articlesLeft}>
              <NavLink to="/articles">
                <h2>Top Articles <RiArrowRightSLine style={{display: "inline", marginBottom: 1.3}}/></h2>
              </NavLink>
              <div>
                {articles.slice(0, 2).map((article) => (
                  <NavLink to={`/articles/${article.id}`} key={article.id}>
                      <div>
                        <img src={article.urlToImage} alt={article.title} onError={handleImageError}/>
                      </div>
                      <div>
                        {article.title.slice(0, 55)}...
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <BiTimeFive />
                        {article.publishedAt.slice(0, 10)}
                      </div>
                  </NavLink>
                ))}
              </div>
            </div>
          
            <div className={style.articlesRight}>
              <NavLink to="/articles">
                <h2>Recent Articles <RiArrowRightSLine style={{display: "inline", marginBottom: 1.3}}/></h2>
              </NavLink>
              {articles.slice(2, 5).map((article) => (
                <NavLink to={`/articles/${article.id}`} key={article.id}>
                    <div>
                      <div className={style.articlesRightImg}>
                        <img src={article.urlToImage} alt={article.title} onError={handleImageError}/>
                      </div>
                    </div>
                    <div>
                      <div>
                        {article.title}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <BiTimeFive />
                        {article.publishedAt.slice(0, 10)}
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

// import { GrInstagram, GrTwitter, GrReddit, GrGithub } from "react-icons/gr";
// import { FaTelegramPlane } from "react-icons/fa";
// <div className={style.socialMedia}>
// <GrInstagram className={style.icon}/>
// <FaTelegramPlane className={style.icon}/>
// <GrTwitter className={style.icon}/>
// <GrReddit className={style.icon}/>
// <GrGithub className={style.icon}/>
// </div>