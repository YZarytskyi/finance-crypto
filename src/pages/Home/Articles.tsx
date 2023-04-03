import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { fetchArticles } from 'Store/Reducers/articlesSlice'
import { ArticlesBlockSkeleton } from 'pages/Home/HomeSkeleton'
import ArticlesLeft from './ArticlesLeft'
import ArticlesRight from './ArticlesRight'
import style from './Home.module.scss'

const Articles = () => {
  const articles = useAppSelector((state) => state.articles.articles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchArticles())
    }
  }, [])

  if (!articles.length) {
    return <ArticlesBlockSkeleton />
  }

  return (
    <div className={style.articles}>
      <ArticlesLeft />
      <ArticlesRight />
    </div>
  )
}

export default Articles
