import style from "./Articles.module.scss";
import { useEffect } from "react";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import ArticlesBlock from "./ArticlesBlock";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Articles";

const ArticlesPage = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchArticles());
    }
  }, []);

  if (articles.length) {
    return (
      <>
        <section className={style.heading}>
          <div className={style.headingContainer}>
            <NavLink to={`${articles[14].id}`} className={style.mainTitle}>
              <p>{articles[14]?.title}</p>
            </NavLink>
            <BottomList />
            <TopArticles />
          </div>
        </section>
        <ArticlesBlock />
      </>
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
          <NavLink to={`${article.id}`} className={style.bottomListLink}>
            <img
              className={style.bottomListImage}
              src={article.urlToImage}
              alt={article.title}
              onError={handleImageError}
            />
            <p className={style.bottomListArticleTitle}>{article.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const TopArticles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <div className={style.rightBlock}>
      <h2 className={style.rightListTitle}>Top Articles</h2>
      <ul className={style.rightList}>
        {articles.slice(15, 27).map((article) => (
          <li key={article.id}>
            <NavLink to={`${article.id}`} className={style.rightListLink}>
              <img
                className={style.rightListArticleImage}
                src={article.urlToImage}
                alt={article.title}
                onError={handleImageError}
              />
              <p className={style.rightListArticleTitle}>{article.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
