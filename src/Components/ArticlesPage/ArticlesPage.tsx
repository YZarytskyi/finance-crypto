import style from "./Articles.module.scss";
import { ReactElement, useEffect } from "react";
import { fetchArticles, Articles } from "../../Store/Reducers/articlesSlice";
import ArticleBlocks from "./ArticleBlocks";
import a from "../../assets/images/q.jpg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";

const ArticlesPage = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const dispatch = useAppDispatch();

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

interface ArticlesProps {
  articles: Array<Articles>;
}
const BottomList: React.FC<ArticlesProps> = ({articles}) => {
  if (articles.length !== 0) {
    return (
      <>
        {articles.slice(3, 6).map((article) => (
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
          )
        )}
      </>
    );
  }
  return null;
};

const TopArticles: React.FC<ArticlesProps> = ({ articles }) => {
  if (articles.length !== 0) {
    return (
      <>
        {articles.slice(6, 10).map((article) => (
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
          )
        )}
      </>
    );
  }
  return null;
};
