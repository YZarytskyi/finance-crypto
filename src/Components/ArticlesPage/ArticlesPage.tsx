import style from "./Articles.module.scss";
import { useEffect, useState } from "react";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import ArticlesBlock from "./ArticlesBlock";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Home";

const ArticlesPage = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles());
    }
  }, []);

  if (articles.length !== 0) {
    return (
      <div className={style.wrapper}>
        <section className={style.heading}>
          <NavLink to={`${articles[14].id}`} className={style.mainTitle}>
            <p>{articles[14]?.title}</p>
          </NavLink>
          <BottomList />
          <div className={style.rightBlock}>
            <h2>Top Articles</h2>
            <TopArticles />
          </div>
        </section>
        <section className={style.allArticles}>
          <h2>Recent Articles</h2>
          <ArticlesBlock />
        </section>
      </div>
    );
  }
  return null;
};

export default ArticlesPage;

const BottomList = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <ul className={style.bottomList}>
      {articles.slice(2, 5).map((article) => (
        <li className={style.bottomListItem} key={article.id}>
          <NavLink
            to={`${article.id}`}
            className={style.bottomListLink}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              onError={handleImageError}
            />
            <p>{article.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const TopArticles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <ul className={style.rightList}>
      {articles.slice(15, 27).map((article) => (
        <li key={article.id}>
          <NavLink
            to={`${article.id}`}
            className={style.rightListLink}
          >
            <div>
              <img
                src={article.urlToImage}
                alt={article.title}
                onError={handleImageError}
              />
            </div>
            <p>{article.title.slice(0, 50)}...</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
