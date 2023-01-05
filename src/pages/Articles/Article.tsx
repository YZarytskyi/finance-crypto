import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from 'Store/Reducers/articlesSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { Preloader } from 'Components/Common';
import { Article as ArticleType } from 'types/Types';
import { handleImageError } from 'utils/imageErrorHandler';
import sprite from 'assets/images/icons.svg';
import style from './Articles.module.scss';

const Article = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article: ArticleType | undefined = useAppSelector((state) =>
    state.articles.recentArticles.find((article) => article._id === articleId)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!article) {
      dispatch(fetchArticles());
    }
  }, []);

  if (!article) {
    return <Preloader />;
  }
  return (
    <article className={style.selectedArticle}>
      <h1 className={style.selectedArticleTitle}>{article.headline.main}</h1>
      <p className={style.selectedArticleSnippet}>{article.snippet}</p>
      <p className={style.selectedArticleDateAuthor}>
        <span>
          <svg className={style.iconTime}>
            <use href={sprite + '#time'} />
          </svg>
          {article.pub_date.slice(0, 10)}
        </span>
        Author: {article.byline.original.slice(3)}
      </p>
      <img
        className={style.selectedArticleImage}
        src={`https://static01.nyt.com/${article.multimedia[0]?.url}`}
        alt={article.headline.main}
        onError={handleImageError}
      />
      <p className={style.selectedArticleBody}>
        {article.lead_paragraph}{' '}
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
