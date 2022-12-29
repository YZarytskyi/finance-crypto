import React, { useEffect, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { cryptoApi } from '../../../API/cryptoApi';
import { Link } from 'react-router-dom';
import { Spinner } from '../index';
import sprite from '../../../assets/images/icons.svg';
import style from './SearchForm.module.scss';
import { CoinSearchForm, ExchangeSearchForm } from '../../../types/Types';

interface SearchFormOpenProps {
  onClickCloseList: (e: MouseEvent) => void;
  onClickCloseSearch: () => void;
}

type Component = 'coins' | 'exchanges';
type RecentSearch = CoinSearchForm | ExchangeSearchForm;
interface SearchData {
  coins: CoinSearchForm[];
  exchanges: ExchangeSearchForm[];
}

const RECENT_SEARCH_KEY = 'recent-search';

const SearchFormOpen = ({
  onClickCloseList,
  onClickCloseSearch,
}: SearchFormOpenProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Partial<SearchData>>({});
  const [recentSearch] = useState<RecentSearch[]>(() => {
    const savedSearch = localStorage.getItem(RECENT_SEARCH_KEY);
    const initialState = savedSearch && JSON.parse(savedSearch);
    return initialState || [];
  });

  const debouncedValue = useDebounce<string>(query.toLowerCase(), 250);
  useEffect(() => {
    const fetchData = async () => {
      const data = await cryptoApi.getSearchDataByQuery(debouncedValue);
      data && setData(data);
    };
    fetchData();
  }, [debouncedValue]);

  useEffect(() => {
    window.addEventListener('mousedown', onClickCloseList);
    return () => window.removeEventListener('mousedown', onClickCloseList);
  }, []);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setQuery(e.target.value);
  };

  const onClickSetLocalStorage = (el: any, component?: Component) => {
    onClickCloseSearch();
    if (component) {
      el = { component, ...el };
    }

    const copyRecentSearch = JSON.parse(JSON.stringify(recentSearch));
    let elementInRecentId = null;

    for (const obj of recentSearch) {
      if (obj.id === el.id) {
        elementInRecentId = recentSearch.indexOf(obj);
        break;
      }
    }

    if (elementInRecentId) {
      copyRecentSearch.splice(elementInRecentId, 1);
    }

    let setToStorage = [el, ...copyRecentSearch];
    if (setToStorage.length > 3) {
      setToStorage.length = 3;
    }
    localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify(setToStorage));
  };

  return (
    <div className={style.backdrop}>
      <div className={style.searchMainContainerOut} id="searchAbsolute">
        <button
          type="button"
          className={style.closeBtn}
          onClick={onClickCloseSearch}
        >
          <svg className={style.iconClose}>
            <use href={sprite + '#modal_close'} />
          </svg>
        </button>

        <div className={style.searchInputContainerOut}>
          <input
            type="text"
            className={style.inputDataOut}
            placeholder="Search"
            name="searchQuery"
            autoComplete="off"
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
            <p className={style.loading}>
              Loading <Spinner className={'spinnerSearch'} />
            </p>
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
                        <img
                          src={el.thumb}
                          alt={el.name}
                          className={style.itemImage}
                        />
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
                        <img
                          src={el.thumb}
                          alt={el.name}
                          className={style.itemImage}
                        />
                        <p>{el.name}</p>
                      </Link>
                    </li>
                  ))
                ) : (
                  <p className={style.warning}>Exchanges not found</p>
                )}
              </ul>

              {recentSearch.length ? (
                <>
                  <p className={style.label}>Recent searches</p>
                  <ul className={style.recentSearchList}>
                    {recentSearch.map(el => (
                      <li key={el.name}>
                        <Link
                          to={`/crypto/${el.component}/${el.id}`}
                          className={style.recentSearchLink}
                          onClick={() => onClickSetLocalStorage(el)}
                        >
                          <img
                            src={el.thumb}
                            alt="Logo"
                            className={style.recentSearchImage}
                          />
                          <p>{el.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                ''
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFormOpen;
