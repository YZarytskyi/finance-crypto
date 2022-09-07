import style from "./Articles.module.scss";
import { useEffect } from "react";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import ArticleBlocks from "./ArticleBlocks";
import a from "../../assets/images/q.jpg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Home";

const ArticlesPage = () => {
  const articles = useAppSelector(state => state.articles.articles);
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
          <div className={style.leftBlock}>
            <div className={style.bottomList}>
              <BottomList />
            </div>
          </div>

          <div className={style.rightBlock}>
            <div className={style.rightList}>
              <div>Top Articles</div>
              <TopArticles />
            </div>
          </div>

          <div className={style.mainPhoto}>
            <img src={a} alt='Articles page' onError={handleImageError} />
          </div>
          <NavLink to={`${articles[13].id}`} >
            <div className={style.mainTitle} style={{zIndex: 1}}>{articles[13]?.title}</div>
          </NavLink>
        </div>
        <div className="mt-4 text-xl">Must Read</div>
        <div className={style.articleBlocks}>
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
      {articles.slice(3, 6).map((article) => (
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
      {articles.slice(6, 10).map((article) => (
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
          <div>{article.title}</div>
        </NavLink>
      ))}
    </>
  );
};
