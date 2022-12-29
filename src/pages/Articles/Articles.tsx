import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchArticles } from '../../Store/Reducers/articlesSlice';
import { ArticlesBlock } from './ArticlesBlock';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { Preloader } from '../../components/Common';
import { handleImageError } from '../../utils/imageErrorHandler';
import style from './Articles.module.scss';

const Articles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchArticles());
    }
  }, []);

  if (!articles.length) {
    return <Preloader />;
  }
  return (
    <>
      <section className={style.heading}>
        <div className={style.headingContainer}>
          <NavLink to={`${articles[1]._id}`} className={style.mainTitle}>
            <p>{articles[1].headline.main}</p>
          </NavLink>
          <BottomList />
          <TopArticles />
        </div>
      </section>
      <ArticlesBlock />
    </>
  );
};

export default Articles;

const BottomList = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <ul className={style.bottomList}>
      {articles.slice(2, 5).map((article) => (
        <li className={style.bottomListItem} key={article._id}>
          <NavLink to={`${article._id}`} className={style.bottomListLink}>
            <img
              className={style.bottomListImage}
              src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
              alt={article.headline.main}
              onError={handleImageError}
            />
            <p className={style.bottomListArticleTitle}>
              {article.headline.main}
            </p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const TopArticles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  return (
    <div className={style.rightBlock}>
      <h2 className={style.rightListTitle}>Top Articles</h2>
      <ul className={style.rightList}>
        {articles.slice(0, 11).map((article) => (
          <li key={article._id}>
            <NavLink to={`${article._id}`} className={style.rightListLink}>
              <img
                className={style.rightListArticleImage}
                src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
                alt={article.headline.main}
                onError={handleImageError}
              />
              <p className={style.rightListArticleTitle}>
                {article.headline.main}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
