import style from "./Home.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchArticles } from "../../Store/Reducers/articlesSlice";
import { ArticlesBlockSkeleton } from "./HomeSkeleton";
import news from "../../assets/images/news.jpg";
import ArticlesLeft from "./ArticlesLeft";
import ArticlesRight from "./ArticlesRight";

export const handleImageError = (e: React.BaseSyntheticEvent) => {
  e.target.onerror = null;
  e.target.src = news;
};

const Articles = () => {
  const { articles, isLoadingArticles } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchArticles());
    }
  }, []);

  return (
    <>
      {isLoadingArticles ? (
        <ArticlesBlockSkeleton />
      ) : (
        articles.length && (
          <div className={style.articles}>
            <ArticlesLeft />
            <ArticlesRight />
          </div>
        )
      )}
    </>
  );
};

export default Articles;
