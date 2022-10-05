import style from "./Articles.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import { BiTimeFive } from "react-icons/bi";
import TablePagination from "../Common/TablePagination";
import { useState } from "react";
import { handleImageError } from "../Home/Articles";

const ArticlesBlock = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const [page, setPage] = useState<number>(1)
  const articlesPerPage: number = 12;
  const countArticles = Math.ceil(articles.length / articlesPerPage);
  const sliceFrom = (page - 1) * articlesPerPage;
  const sliceTo = articlesPerPage * page; 

  if (articles) {
    return (
      <>
        <ul className={style.articlesBlock}>
          {articles.slice(sliceFrom, sliceTo).map((article) => (
            <li key={article.id}>
              <NavLink
                to={`/articles/${article.id}`}
                className={style.allArticlesLink}
              >
                <div className={style.articlesImage}>
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      onError={handleImageError}
                    />
                  )}
                </div>
                <div className={style.articlesTitleDate}>
                  <p>
                    {article.title.length > 76
                      ? article.title.slice(0, 76) + "..."
                      : article.title}
                  </p>
                  <div>
                    <BiTimeFive />
                    {article.publishedAt.slice(0, 10)}
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={style.paginationArticlesBlock}>
          <TablePagination page={page} setPage={setPage} count={countArticles}/>
        </div>
      </>
    );
  }
  return null;
};

export default ArticlesBlock;
