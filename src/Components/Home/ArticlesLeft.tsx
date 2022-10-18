import style from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/images/icons.svg";
import { useAppSelector } from "../../Store/hooks";
import { handleImageError } from "./Articles";

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
          <li key={article.id}>
            <NavLink
              to={`/articles/${article.id}`}
              className={style.articlesLeftLink}
            >
              <div className={style.articlesLeftImg}>
                <img
                  src={article.urlToImage}
                  alt="News"
                  onError={handleImageError}
                />
              </div>
              <p>{article.title.slice(0, 40)}...</p>
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
                {article.publishedAt.slice(0, 10)}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesLeft;
