import style from "./Articles.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Articles, fetchArticles } from "../../Store/Reducers/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import sprite from "../../assets/images/icons.svg";
import { handleImageError } from "../Home/Articles";
import PreloaderMain from "../Common/PreloaderMain";

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

  if (!article) {
    return <PreloaderMain />;
  }
  return (
    <article className={style.selectedArticle}>
      <h1 className={style.selectedArticleTitle}>{article.headline.main}</h1>
      <p className={style.selectedArticleDate}>
        <svg className={style.iconTime}>
          <use href={sprite + "#time"} />
        </svg>
        {article.web_url.slice(0, 10)}
        {!article?.byline?.original?.startsWith("https")
          ? `, Author: ${article.byline.original}`
          : ""}
      </p>
      <img
        className={style.selectedArticleImage}
        src={article.web_url}
        alt={article.headline.main}
        onError={handleImageError}
      />
      <p className={style.selectedArticleBody}>
        {article.lead_paragraph}{" "}
        <a
          className={style.readMoreLink}
          href={article.web_url}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Read&nbsp;more
        </a>
      </p>
    </article>
  );
};

export default Article;
