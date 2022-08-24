import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Articles.module.scss";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";

const Article = () => {
  const articleId = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const article = useSelector(
    (state) => state.articles.articles[articleId.articleId - 1]
  );
  const dispatch = useDispatch()

  useEffect(() => {
    if(articles.length === 0) {
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
};

export default Article;
