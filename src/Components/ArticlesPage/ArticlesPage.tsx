import style from "./Articles.module.scss";
import { useEffect } from "react";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import ArticleBlocks from "./ArticleBlocks";
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
        <div className={style.heading}>

          <NavLink to={`${articles[14].id}`} className={style.mainTitle}>
            <div>{articles[14]?.title}</div>
          </NavLink>

          <div className={style.bottomList}>
            <BottomList />
          </div>

          <div className={style.rightBlock}>
            <h2>Top Articles</h2>
            <div className={style.rightList}>
              <TopArticles />
            </div>
          </div>

        </div>
        <h2>Recent Articles</h2>
        <div className={style.articlesBlock}>
          <ArticleBlocks />
        </div>
      </div>
    );
  }
  return null;
};

export default ArticlesPage;

const BottomList = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <>
      {articles.slice(2, 5).map((article) => (
        <NavLink
          to={`${article.id}`}
          className={style.bottomListItem}
          key={article.id}
        >
          <div>
            <img
              src={article.urlToImage}
              alt={article.title}
              onError={handleImageError}
            />
          </div>
          <div>{article.title}</div>
        </NavLink>
      ))}
    </>
  );
};

const TopArticles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <>
      {articles.slice(15, 27).map((article) => (
        <NavLink
          to={`${article.id}`}
          className={style.topArticlesItem}
          key={article.id}
        >
          <div>
            <img
              src={article.urlToImage}
              alt={article.title}
              onError={handleImageError}
            />
          </div>
          <div>{article.title.slice(0, 50)}...</div>
        </NavLink>
      ))}
    </>
  );
};
