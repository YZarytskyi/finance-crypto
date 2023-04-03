import { Link } from 'react-router-dom'
import { RecentSearch } from 'types/Types'
import style from './SearchForm.module.scss'

interface RecentSearchBlockProps {
  recentSearch: RecentSearch[]
  onClickSetLocalStorage: (el: any) => void
}

const RecentSearchBlock = ({ recentSearch, onClickSetLocalStorage }: RecentSearchBlockProps) => {
  if (!recentSearch.length) {
    return null
  }
  return (
    <>
      <p className={style.label}>Recent searches</p>
      <ul className={style.recentSearchList}>
        {recentSearch.map((el) => (
          <li key={el.name}>
            <Link
              to={`/crypto/${el.component}/${el.id}`}
              className={style.recentSearchLink}
              onClick={() => onClickSetLocalStorage(el)}
            >
              <img src={el.thumb} alt='Logo' className={style.recentSearchImage} />
              <p>{el.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export { RecentSearchBlock }
