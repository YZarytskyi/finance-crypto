import React, { useState } from 'react'
import sprite from 'assets/images/icons.svg'
import style from './SearchForm.module.scss'
import SearchFormOpen from './SearchFormOpen'

export const SearchForm = () => {
  const [isShowSearchForm, setIsShowSearchForm] = useState<boolean>(false)

  const onClickCloseList = (e: MouseEvent) => {
    if ((e.target as Element).closest('#searchAbsolute')) {
      return
    }
    setIsShowSearchForm(false)
    if (window.innerWidth <= 1280 || document.body.classList.contains('overflow')) {
      document.body.classList.remove('overflow')
    }
  }

  const onClickCloseSearch = () => {
    setIsShowSearchForm(false)
    document.body.classList.remove('overflow')
  }

  const onSearchOpen = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsShowSearchForm(true)
    if (window.innerWidth <= 1280) {
      document.body.classList.add('overflow')
    }
  }

  return (
    <div className={style.container}>
      <div className={style.searchInputContainer}>
        <input
          type='text'
          className={style.inputData}
          placeholder='Search'
          onFocus={onSearchOpen}
        />
        <button type='button' className={style.searchIconContainer} onClick={onSearchOpen}>
          <svg className={style.searchIcon}>
            <use href={sprite + '#search'} />
          </svg>
        </button>
      </div>

      {isShowSearchForm && (
        <SearchFormOpen
          onClickCloseList={onClickCloseList}
          onClickCloseSearch={onClickCloseSearch}
        />
      )}
    </div>
  )
}
