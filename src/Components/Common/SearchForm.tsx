import style from "./SearchForm.module.scss";
import React, { useEffect, useState } from "react";
import { cryptoApi } from "../../API/api";
import { debounce } from "@mui/material";
import { Link } from "react-router-dom";
import sprite from "../../assets/images/icons.svg";
import Spinner from "./Spinner";

const SearchForm = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (showList) {
      document.body.addEventListener("mousedown", onClickCloseList);
    }

    return () =>
      document.body.removeEventListener("mousedown", onClickCloseList);
  }, [showList]);

  const onClickCloseList = (e: MouseEvent) => {
    if (!(e.target as Element).closest("#searchAbsolute")) {
      setShowList(false);
      if (
        window.innerWidth <= 1280 ||
        document.body.classList.contains("overflow")
      ) {
        document.body.classList.remove("overflow");
      }
    }
  };

  const onLinkClick = () => {
    setShowList(false);
    document.body.classList.remove("overflow");
  };

  const onSearchOpen = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowList(true);
    if (window.innerWidth <= 1280) {
      document.body.classList.add("overflow");
    }
  };

  const onFormInputFocus = async (e: React.FocusEvent<HTMLInputElement>) => {
    const data = await cryptoApi.getSearchDataByQuery();
    setData(data);
  };

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value?.trim().toLowerCase();
    if (value) {
      const data = await cryptoApi.getSearchDataByQuery(value);
      setData(data);
    } else {
      const data = await cryptoApi.getSearchDataByQuery();
      setData(data);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.searchInputContainer}>
        <input
          type="text"
          className={style.inputData}
          placeholder="Search"
          onFocus={onSearchOpen}
        />
        <button className={style.searchIconContainer} onClick={onSearchOpen}>
          <svg className={style.searchIcon}>
            <use href={sprite + "#search"} />
          </svg>
        </button>
      </div>

      {showList && (
        <div className={style.backdrop}>
          <div className={style.searchMainContainerOut} id="searchAbsolute">
            <button className={style.closeBtn} onClick={onLinkClick}>
              <svg className={style.iconClose}>
                <use href={sprite + "#modal_close"} />
              </svg>
            </button>

            <div className={style.searchInputContainerOut}>
              <input
                type="text"
                className={style.inputDataOut}
                placeholder="Search"
                name="searchQuery"
                autoComplete="off"
                onFocus={onFormInputFocus}
                onChange={onInputChange}
                autoFocus
              />
              <span className={style.searchIconContainerOut}>
                <svg className={style.searchIcon}>
                  <use href={sprite + "#search"} />
                </svg>
              </span>
            </div>

            <div className={style.listContainer}>
              {!Object.keys(data).length ? (
                <p className={style.loading}>
                  Loading <Spinner className={"spinnerSearch"} />
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
                              <span className={style.itemSymbol}>
                                {el.symbol}
                              </span>
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
      )}
    </div>
  );
};

export default SearchForm;
