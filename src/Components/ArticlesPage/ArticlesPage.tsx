import style from "./Articles.module.scss";
import { useEffect } from "react";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import ArticlesBlock from "./ArticlesBlock";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Articles";
import PreloaderMain from "../Common/PreloaderMain";

const ArticlesPage = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchArticles());
    }
  }, []);

  if (!articles.length) {
    return <PreloaderMain />;
  }
  return (
    <>
      <section className={style.heading}>
        <div className={style.headingContainer}>
          <NavLink to={`${articles[9].id}`} className={style.mainTitle}>
            <p>{articles[9]?.headline.main}</p>
          </NavLink>
          <BottomList />
          <TopArticles />
        </div>
      </section>
      <ArticlesBlock />
    </>
  );
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
              src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
              alt={article.headline.main}
              onError={handleImageError}
            />
            <p className={style.bottomListArticleTitle}>{article.headline.main}</p>
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
        {articles.slice(0, 11).map((article) => (
          <li key={article.id}>
            <NavLink to={`${article.id}`} className={style.rightListLink}>
              <img
                className={style.rightListArticleImage}
                src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
                alt={article.headline.main}
                onError={handleImageError}
              />
              <p className={style.rightListArticleTitle}>{article.headline.main}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
