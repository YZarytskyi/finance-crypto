import style from "./SearchForm.module.scss";
import React, { useEffect, useState } from "react";
import { cryptoApi } from "../../API/api";
import { debounce } from "@mui/material";
import { Link } from "react-router-dom";
import sprite from "../../assets/images/icons.svg";

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
    }
  };

  const onLinkClick = () => {
    setShowList(false);
  };

  const onSearchOpen = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowList(true);
  };

  const onFormInputFocus = async (e: React.FocusEvent<HTMLInputElement>) => {
    const data = await cryptoApi.getSearchDataByQuery();
    setData(data);
  };

  const onInputChange = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <button className={style.searchBtn} onClick={(e) => onSearchOpen(e)}>
          <svg className={style.searchIcon}>
            <use href={sprite + "#search"} />
          </svg>
        </button>
      </div>

      {showList && (
        <div className={style.searchMainContainerOut} id="searchAbsolute">
          <button className={style.closeBtn} onClick={onLinkClick}>
            <svg className={style.iconClose}>
              <use href={sprite + "#modal_close"} />
            </svg>
          </button>
          <form onChange={(e) => onInputChange(e)}>
            <div className={style.searchInputContainerOut}>
              <input
                type="text"
                className={style.inputDataOut}
                placeholder="Search"
                name="searchQuery"
                onFocus={(e) => onFormInputFocus(e)}
                autoFocus
              />
              <button type="submit" className={style.searchBtnOut}>
                <svg className={style.searchIcon}>
                  <use href={sprite + "#search"} />
                </svg>
              </button>
            </div>

            <div className={style.listContainer}>
              {!Object.keys(data).length ? (
                <p className={style.loading}>Loading...</p>
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
                          <Link to={"/"} className={style.listLink}>
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
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
