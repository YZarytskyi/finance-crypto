import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import style from "./Articles.module.css";
import ArticlesList from "./ArticlesList";

const ArticlesPage = () => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles());
    }
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.allArticles}>
        <ArticlesList />
        </div>
    </div>
  );
};

export default ArticlesPage;
