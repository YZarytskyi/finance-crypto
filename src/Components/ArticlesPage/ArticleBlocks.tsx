import style from "./Articles.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Home";


const ArticlesList = () => {
  const articles = useAppSelector(state => state.articles.articles);

  if (articles) {
    return (
      <>
        {articles.map((article, index) => (
            <NavLink to={`/articles/${index + 1}`} className={style.article} key={index}>
                <div className={style.articlesImgTitle}>
                <div className={style.articlesImgDate}>
                  <div>
                    {article.urlToImage && <img src={article.urlToImage} alt={article.title} onError={handleImageError}/>}
                  </div>
                  <div className={style.articlesDate}>
                    {article.publishedAt.slice(0, 10)}
                  </div>
                  </div>
                  <div className={style.articlesTitle}>
                    {article.title.length > 50
                      ? article.title.slice(0, 50) + "..."
                      : article.title}
                  </div>
                  </div>
                  <div className="text-base text-left text-zinc-400 mx-3 mb-2">
                  {article.content.slice(0,-43)}...
                  </div>

            </NavLink>
          )
        )}
      </>
    );
  }
  return null;
};

export default ArticlesList;
