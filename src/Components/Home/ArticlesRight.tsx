import style from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useAppSelector } from "../../Store/hooks";
import { handleImageError } from "./Articles";



const ArticlesRight = () => {
  const articles = useAppSelector((state) => state.articles.articles);

  return (
    <section className={style.articlesRight}>
      <NavLink to="/articles">
        <h2 className={style.articlesRightTitle}>
          Recent Articles <RiArrowRightSLine className={style.arrow} />
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
                  src={article.urlToImage}
                  alt={article.title}
                  onError={handleImageError}
                />
              </div>
              <div className={style.articlesRightDescription}>
                <p>{article.title}</p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <BiTimeFive />
                  {article.publishedAt.slice(0, 10)}
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
