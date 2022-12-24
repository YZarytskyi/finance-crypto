import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import TablePagination from "../Common/TablePagination";
import {
  Articles,
  fetchRecentArticles,
} from "../../Store/Reducers/articlesSlice";
import { ArticlesBlockSkeleton } from "./ArticlesBlockSkeleton";
import { handleImageError } from "../../utils/imageErrorHandler";
import sprite from "../../assets/images/icons.svg";
import style from "./Articles.module.scss";

const ArticlesBlock = () => {
  const { recentArticles, total, isLoadingArticles } = useAppSelector(
    (state) => state.articles
  );
  const dispatch = useAppDispatch();
  const articlesTitleRef = useRef<HTMLHeadingElement>(null);

  const [page, setPage] = useState<number>(0);
  const articlesPerPage: 10 = 10;
  let totalPages = Math.ceil(total / articlesPerPage);
  totalPages = totalPages > 100 ? 100 : totalPages;

  useEffect(() => {
    dispatch(fetchRecentArticles(page));
  }, [page]);

  const articleTitle = (article: Articles) => {
    return article.headline?.main?.length > 76
      ? article.headline.main.slice(0, 76) + "..."
      : article.headline.main;
  };

  return (
    <section className={style.allArticles}>
      <div className="container">
        <h2 className={style.allArticlesTitle} ref={articlesTitleRef}>
          Articles
        </h2>

        {isLoadingArticles ? (
          <ArticlesBlockSkeleton />
        ) : (
          <ul className={style.articlesBlock}>
            {recentArticles.map((article) => (
              <li key={article.id}>
                <NavLink
                  to={`/articles/${article.id}`}
                  className={style.allArticlesLink}
                >
                  <img
                    className={style.articlesImage}
                    loading="lazy"
                    src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
                    alt={article.headline.main}
                    onError={handleImageError}
                  />
                  <div className={style.articlesTitleDate}>
                    <p className={style.articleTitle}>
                      {articleTitle(article)}
                    </p>
                    <div className={style.articleDate}>
                      <svg className={style.iconTime}>
                        <use href={sprite + "#time"} />
                      </svg>
                      {article.pub_date.slice(0, 10)}
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        <div className={style.paginationArticlesBlock}>
          <TablePagination
            page={page + 1}
            setPage={setPage}
            count={totalPages}
            ref={articlesTitleRef}
            articles
          />
        </div>
      </div>
    </section>
  );
};

export default ArticlesBlock;
