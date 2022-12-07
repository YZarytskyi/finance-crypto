import style from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/images/icons.svg";
import { useAppSelector } from "../../Store/hooks";
import { handleImageError } from "./Articles";

const ArticlesRight = () => {
  const articles = useAppSelector((state) => state.articles.articles);

  return (
    <section className={style.articlesRight}>
      <NavLink to="/articles">
        <h2 className={style.articlesRightTitle}>
          Recent Articles
          <svg className={style.arrow}>
            <use href={sprite + "#arrow_right"} />
          </svg>
        </h2>
      </NavLink>
      <ul className={style.articlesRightList}>
        {articles.slice(2, 5).map((article) => (
          <li key={article.id} className={style.articlesRightItem}>
            <NavLink
              to={`/articles/${article.id}`}
              className={style.articlesRightLink}
            >
              <div className={style.articlesRightImg}>
                <img
                  src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
                  alt={article.headline.main}
                  onError={handleImageError}
                />
              </div>
              <div className={style.articlesRightDescription}>
                <p>{article.headline.main}</p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <svg className={style.iconTime}>
                    <use href={sprite + "#time"} />
                  </svg>
                  {article.pub_date.slice(0, 10)}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesRight;
