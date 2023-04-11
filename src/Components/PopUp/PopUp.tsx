import { useEffect, useState } from 'react'
import { useAppSelector } from 'hooks/redux-hooks'
import { Link } from 'react-router-dom'
import style from './PopUp.module.scss'
import sprite from 'assets/images/icons.svg'

const PopUp = () => {
  const article = useAppSelector((state) => state.articles.articles[8])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 5000)
  }, [])

  if (!article) {
    return null
  }

  return (
    <div className={`${style.container} ${isVisible ? style.containerVisible : ''}`}>
      <button className={style.closeBtn} onClick={() => setIsVisible(false)}>
        <svg className={style.closeIcon}>
          <use href={sprite + '#modal_close'} />
        </svg>
      </button>
      <h1 className={style.header}>Crypto news</h1>
      <Link
        to={`/articles/${article._id}`}
        className={style.text}
        onClick={() => setIsVisible(false)}
      >
        {article.lead_paragraph}
      </Link>
    </div>
  )
}

export { PopUp }
