import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import TablePagination from '../Common/TablePagination';
import { fetchRecentArticles, setCurrentPage } from '../../Store/Reducers/articlesSlice';
import { ArticlesBlockSkeleton } from './ArticlesBlockSkeleton';
import { Article } from '../../Types/Types';
import { handleImageError } from '../../utils/imageErrorHandler';
import sprite from '../../assets/images/icons.svg';
import style from './Articles.module.scss';
import usePrevious from '../../hooks/usePrevious';

const ARTICLES_PER_PAGE: 10 = 10;

const ArticlesBlock = () => {
  const { recentArticles, articles, total, currentPage, isLoadingArticles } = useAppSelector(
    state => state.articles
  );
  const dispatch = useAppDispatch();
  const articlesTitleRef = useRef<HTMLHeadingElement>(null);

  let totalPages = Math.ceil(total / ARTICLES_PER_PAGE);
  totalPages = totalPages > 100 ? 100 : totalPages;
  
  const prevPage: number = usePrevious<number>(currentPage) || 0;

  useEffect(() => {
    console.log(prevPage, currentPage)
    if (prevPage === currentPage) {
      return
    }
    dispatch(fetchRecentArticles(currentPage));
  }, [currentPage]);

  const articleTitle = (article: Article) => {
    return article.headline?.main?.length > 76
      ? article.headline.main.slice(0, 76) + '...'
      : article.headline.main;
  };

  return (
    <section className={style.allArticles}>
      <div className="container">
        <h2 className={style.allArticlesTitle} ref={articlesTitleRef}>
          Articles
        </h2>

        {isLoadingArticles ? (
          <ArticlesBlockSkeleton />
        ) : (
          <ul className={style.articlesBlock}>
            {recentArticles.map(article => (
              <li key={article._id}>
                <NavLink
                  to={`/articles/${article._id}`}
                  className={style.allArticlesLink}
                >
                  <img
                    className={style.articlesImage}
                    loading="lazy"
                    src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
                    alt={article.headline.main}
                    onError={handleImageError}
                  />
                  <div className={style.articlesTitleDate}>
                    <p className={style.articleTitle}>
                      {articleTitle(article)}
                    </p>
                    <div className={style.articleDate}>
                      <svg className={style.iconTime}>
                        <use href={sprite + '#time'} />
                      </svg>
                      {article.pub_date.slice(0, 10)}
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        <div className={style.paginationArticlesBlock}>
          <TablePagination
            page={currentPage + 1}
            count={totalPages}
            ref={articlesTitleRef}
            articles
          />
        </div>
      </div>
    </section>
  );
};

export default ArticlesBlock;
