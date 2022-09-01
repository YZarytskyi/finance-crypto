import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import style from "./Articles.module.scss";
import ArticleBlocks from "./ArticleBlocks";
import a from "../../assets/images/q.jpg";
import { NavLink } from "react-router-dom";

const ArticlesPage = () => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles());
    }
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.heading}>
        <div className={style.leftBlock}>
          <div className={style.bottomList}>
            <BottomList articles={articles} />
          </div>
        </div>

        <div className={style.rightBlock}>
          <div className={style.rightList}>
            <div>Top Articles</div>
            <TopArticles articles={articles} />
          </div>
        </div>

        <div className={style.mainPhoto}>
          <img src={a} alt={articles[9]?.title} />
        </div>
        <div className={style.mainTitle}>{articles[9]?.title}</div>
      </div>
      <div className="mt-4 text-xl">Must Read</div>
      <div className={style.articleBlocks}>
        <ArticleBlocks />
      </div>
    </div>
  );
};

export default ArticlesPage;

const BottomList = ({ articles }) => {
  if (articles.length !== 0) {
    return (
      <>
        {articles.slice(3, 6).map((article) => {
          return (
            <NavLink
              to={`${article.id}`}
              className={style.bottomListItem}
              key={article.id}
            >
              <div>
                <img src={article.urlToImage} alt={article.title} />
              </div>
              <div>{article.title}</div>
            </NavLink>
          );
        })}
      </>
    );
  }
};

const TopArticles = ({ articles }) => {
  if (articles.length !== 0) {
    return (
      <>
        {articles.slice(6, 10).map((article) => {
          return (
            <NavLink
              to={`${article.id}`}
              className={style.topArticlesItem}
              key={article.id}
            >
              <div>
                <img src={article.urlToImage} alt={article.title} />
              </div>
              <div>{article.title}</div>
            </NavLink>
          );
        })}
      </>
    );
  }
};
