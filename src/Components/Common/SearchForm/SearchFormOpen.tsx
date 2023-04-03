import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useDebounce from 'hooks/useDebounce'
import { cryptoApi } from 'api/cryptoApi'
import { Spinner } from '../index'
import { useLocalStorageState } from 'hooks/useStorage'
import { RecentSearchBlock } from './RecentSearchBlock'
import { RecentSearch, SearchData } from 'types/Types'
import sprite from 'assets/images/icons.svg'
import style from './SearchForm.module.scss'

const RECENT_SEARCH_KEY = 'recent-search'

export type Component = 'coins' | 'exchanges'

interface SearchFormOpenProps {
  onClickCloseList: (e: MouseEvent) => void
  onClickCloseSearch: () => void
}

const SearchFormOpen = ({
  onClickCloseList,
  onClickCloseSearch,
}: SearchFormOpenProps): JSX.Element => {
  const [recentSearch, setRecentSearch] = useLocalStorageState<RecentSearch[]>(
    RECENT_SEARCH_KEY,
    [],
  )

  const [query, setQuery] = useState<string>('')
  const [data, setData] = useState<Partial<SearchData>>({})

  const debouncedValue = useDebounce<string>(query.toLowerCase(), 250)
  useEffect(() => {
    const fetchData = async () => {
      const data = await cryptoApi.getSearchDataByQuery(debouncedValue)
      data && setData(data)
    }
    fetchData()
  }, [debouncedValue])

  useEffect(() => {
    window.addEventListener('mousedown', onClickCloseList)
    return () => window.removeEventListener('mousedown', onClickCloseList)
  }, [])

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value)
  }

  const onClickSetLocalStorage = (el: any, component?: Component) => {
    onClickCloseSearch()
    if (component) {
      el = { component, ...el }
    }

    const filterRecentSearch = recentSearch.filter((obj) => obj.id !== el.id)

    const setToStorage = [el, ...filterRecentSearch]
    if (setToStorage.length > 3) {
      setToStorage.length = 3
    }
    setRecentSearch(setToStorage)
  }

  return (
    <div className={style.backdrop}>
      <div className={style.searchMainContainerOut} id='searchAbsolute'>
        <button type='button' className={style.closeBtn} onClick={onClickCloseSearch}>
          <svg className={style.iconClose}>
            <use href={sprite + '#modal_close'} />
          </svg>
        </button>

        <div className={style.searchInputContainerOut}>
          <input
            type='text'
            className={style.inputDataOut}
            placeholder='Search'
            name='searchQuery'
            autoComplete='off'
            value={query}
            onChange={onChangeInput}
            autoFocus
          />
          <span className={style.searchIconContainerOut}>
            <svg className={style.searchIcon}>
              <use href={sprite + '#search'} />
            </svg>
          </span>
        </div>

        <div className={style.listContainer}>
          {!Object.keys(data).length ? (
            <>
              <p className={style.loading}>
                Loading <Spinner className={'spinnerSearch'} />
              </p>
              <RecentSearchBlock
                recentSearch={recentSearch}
                onClickSetLocalStorage={onClickSetLocalStorage}
              />
            </>
          ) : (
            <>
              <p className={style.label}>Cryptocurrencies</p>
              <ul>
                {data.coins?.length ? (
                  data.coins.map((el: any) => (
                    <li key={el.id}>
                      <Link
                        to={`/crypto/coins/${el.id}`}
                        className={style.listLink}
                        onClick={() => onClickSetLocalStorage(el, 'coins')}
                      >
                        <img src={el.thumb} alt={el.name} className={style.itemImage} />
                        <p>
                          {el.name}
                          <span className={style.itemSymbol}>{el.symbol}</span>
                        </p>
                      </Link>
                    </li>
                  ))
                ) : (
                  <p className={style.warning}>Coins not found</p>
                )}
              </ul>

              <p className={style.label}>Exchanges</p>
              <ul>
                {data.exchanges?.length ? (
                  data.exchanges.map((el: any) => (
                    <li key={el.id}>
                      <Link
                        to={`/crypto/exchanges/${el.id}`}
                        className={style.listLink}
                        onClick={() => onClickSetLocalStorage(el, 'exchanges')}
                      >
                        <img src={el.thumb} alt={el.name} className={style.itemImage} />
                        <p>{el.name}</p>
                      </Link>
                    </li>
                  ))
                ) : (
                  <p className={style.warning}>Exchanges not found</p>
                )}
              </ul>

              <RecentSearchBlock
                recentSearch={recentSearch}
                onClickSetLocalStorage={onClickSetLocalStorage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchFormOpen
