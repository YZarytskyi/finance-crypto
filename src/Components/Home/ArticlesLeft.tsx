import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../../utils/imageErrorHandler";
import sprite from "../../assets/images/icons.svg";
import style from "./Home.module.scss";

const ArticlesLeft = () => {
  const articles = useAppSelector((state) => state.articles.articles);
    
  return (
    <section className={style.articlesLeft}>
      <NavLink to="/articles">
        <h2>
          Top Articles
          <svg className={style.arrow}>
            <use href={sprite + "#arrow_right"} />
          </svg>
        </h2>
      </NavLink>
      <ul className={style.articlesLeftList}>
        {articles.slice(0, 2).map((article) => (
          <li key={article._id}>
            <NavLink
              to={`/articles/${article._id}`}
              className={style.articlesLeftLink}
            >
              <div className={style.articlesLeftImg}>
                <img
                  src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
                  alt="News"
                  onError={handleImageError}
                />
              </div>
              <p>{article.headline.main.slice(0, 50)}...</p>
              <p className={style.articlesDate}>
                <svg className={style.iconTime}>
                  <use href={sprite + "#time"} />
                </svg>
                {article.pub_date.slice(0, 10)}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesLeft;
