import React, { useEffect, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { cryptoApi } from '../../../API/cryptoApi';
import { Link } from 'react-router-dom';
import { Spinner } from '../index';
import sprite from '../../../assets/images/icons.svg';
import style from './SearchForm.module.scss';

interface SearchFormOpenProps {
  onClickCloseList: (e: MouseEvent) => void;
  onLinkClick: () => void;
}

const SearchFormOpen = ({
  onClickCloseList,
  onLinkClick,
}: SearchFormOpenProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<any>({});

  const debouncedValue = useDebounce<string>(query.toLowerCase(), 250);
  useEffect(() => {
    const fetchData = async () => {
      const data = await cryptoApi.getSearchDataByQuery(debouncedValue);
      setData(data);
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

  return (
    <div className={style.backdrop}>
      <div className={style.searchMainContainerOut} id="searchAbsolute">
        <button type="button" className={style.closeBtn} onClick={onLinkClick}>
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
                        to={`crypto/coins/${el.id}`}
                        onClick={onLinkClick}
                        className={style.listLink}
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
                        to={`crypto/exchanges/${el.id}`}
                        className={style.listLink}
                        onClick={onLinkClick}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFormOpen;
