import style from "./Articles.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import sprite from "../../assets/images/icons.svg";
import TablePagination from "../Common/TablePagination";
import { useState } from "react";
import { handleImageError } from "../Home/Articles";

const ArticlesBlock = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const [page, setPage] = useState<number>(1);
  const articlesPerPage: number = 12;
  const countArticles = Math.ceil(articles.length / articlesPerPage);
  const sliceFrom = (page - 1) * articlesPerPage;
  const sliceTo = articlesPerPage * page;

  return (
    <section className={style.allArticles}>
      <div className="container">
        <h2 className={style.allArticlesTitle}>Recent Articles</h2>
        <ul className={style.articlesBlock}>
          {articles.slice(sliceFrom, sliceTo).map((article) => (
            <li key={article.id}>
              <NavLink
                to={`/articles/${article.id}`}
                className={style.allArticlesLink}
              >
                {article.urlToImage && (
                  <img
                    className={style.articlesImage}
                    loading="lazy"
                    src={article.urlToImage}
                    alt={article.title}
                    onError={handleImageError}
                  />
                )}
                <div className={style.articlesTitleDate}>
                  <p className={style.articleTitle}>
                    {article.title.length > 76
                      ? article.title.slice(0, 76) + "..."
                      : article.title}
                  </p>
                  <div className={style.articleDate}>
                    <svg className={style.iconTime}>
                      <use href={sprite + "#time"} />
                    </svg>
                    {article.publishedAt.slice(0, 10)}
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={style.paginationArticlesBlock}>
          <TablePagination
            page={page}
            setPage={setPage}
            count={countArticles}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticlesBlock;
