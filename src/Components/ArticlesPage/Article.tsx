import style from "./Articles.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Articles, fetchArticles } from "../../Store/Reducers/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { BiTimeFive } from "react-icons/bi";
import { handleImageError } from "../Home/Articles";

const Article = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article: Articles | undefined = useAppSelector(
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
        <p className={style.date}>
          <BiTimeFive style={{ marginTop: "3.5px", marginRight: "5px" }} />{" "}
          {article.publishedAt.slice(0, 10)}
          {article.author && !article.author.startsWith("https")
            ? `, Author: ${article.author}`
            : ""}
        </p>
        <img
          src={article.urlToImage}
          alt={article.title}
          onError={handleImageError}
        />
        <p className={style.body}>
          {article.content.slice(0, -14)}{" "}
          <a
            className={style.readMoreLink}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Read&nbsp;more
          </a>
        </p>
      </article>
    );
  }
  return null;
};

export default Article;
