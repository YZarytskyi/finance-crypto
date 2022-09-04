import style from "./Articles.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";


const Article = () => {
  const {articleId} = useParams<{articleId: string}>();
  const article = useAppSelector((state) => state.articles.articles[Number(articleId) - 1]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(article) {
      dispatch(fetchArticles())
    }
  }, [])

  if (article) {  
  return (
    <div className={style.wrapper}>
      <div className={style.selectedArticle}>
        <div className={style.title}>{article.title}</div>
        <div className={style.date}>Date: {article.publishedAt.slice(0,10)}{article.author && !article.author.startsWith('https') ? `, Author: ${article.author}` : ""}</div>
        <div>
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className={style.body}>{article.content.slice(0,-14)} <a href={article.url}>Read more</a></div>
      </div>
    </div>
  );
  }
  return null
};

export default Article;
