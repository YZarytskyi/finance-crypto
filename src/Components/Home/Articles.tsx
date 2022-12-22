import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { ArticlesBlockSkeleton } from "./HomeSkeleton";
import ArticlesLeft from "./ArticlesLeft";
import ArticlesRight from "./ArticlesRight";
import style from "./Home.module.scss";

const Articles = () => {
  const { articles, isLoadingArticles } = useAppSelector(
    (state) => state.articles
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchArticles());
    }
  }, []);

  if (isLoadingArticles) {
    return <ArticlesBlockSkeleton />;
  }

  return (
    <div className={style.articles}>
      <ArticlesLeft />
      <ArticlesRight />
    </div>
  );
};

export default Articles;
