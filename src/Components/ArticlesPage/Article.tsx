import style from "./Articles.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { handleImageError } from "../Home/Home";
import { BiTimeFive } from "react-icons/bi";

const Article = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = useAppSelector(
    (state) => state.articles.articles[Number(articleId) - 1]
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!article) {
      dispatch(fetchArticles());
    }
  }, []);

  if (article) {
    return (
      <article className={style.selectedArticle}>
        <h1>{article.title}</h1>
        <div className={style.date}>
          <BiTimeFive style={{ marginTop: "3.5px", marginRight: "5px" }} /> {article.publishedAt.slice(0, 10)}
          {article.author && !article.author.startsWith("https")
            ? `, Author: ${article.author}`
            : ""}
        </div>
        <div>
          <img
            src={article.urlToImage}
            alt={article.title}
            onError={handleImageError}
          />
        </div>
        <div className={style.body}>
          {article.content.slice(0, -14)} <a href={article.url}>Read&nbsp;more</a>
        </div>
      </article>
    );
  }
  return null;
};

export default Article;
