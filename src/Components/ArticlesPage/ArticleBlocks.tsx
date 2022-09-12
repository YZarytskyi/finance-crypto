import style from "./Articles.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Home";
import { BiTimeFive } from "react-icons/bi";

const ArticlesList = () => {
  const articles = useAppSelector((state) => state.articles.articles);

  if (articles) {
    return (
      <>
        {articles.slice(7).map((article, index) => (
          <NavLink
            to={`/articles/${index + 8}`}
            className={style.article}
            key={index}
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
                <div>
                  {article.title.length > 70
                    ? article.title.slice(0, 70) + "..."
                    : article.title}
                </div>
                <div>
                  <BiTimeFive />
                  {article.publishedAt.slice(0, 10)}
                </div>
              </div>
          </NavLink>
        ))}
      </>
    );
  }
  return null;
};

export default ArticlesList;
