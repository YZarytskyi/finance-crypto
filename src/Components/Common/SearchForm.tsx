import style from "./SearchForm.module.scss";
import React, { useEffect, useState } from "react";
import { cryptoApi } from "../../API/api";
import { debounce } from "@mui/material";
import { Link } from "react-router-dom";

const SearchForm = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
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

  const onInputFocus = async (e: React.FocusEvent<HTMLInputElement>) => {
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
      <div className={style.searchContainer}>
        <input
          type="text"
          className={style.inputCoin}
          placeholder="Search"
          onFocus={(e) => onInputFocus(e)}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      {showList && (
        <div className={style.searchContainerOut} id="searchAbsolute">
          <form onChange={(e) => onInputChange(e)}>
            <div className={style.searchContainer}>
              <input
                type="text"
                className={style.inputCoin}
                placeholder="Search"
                name="searchQuery"
                onFocus={(e) => onFormInputFocus(e)}
                autoFocus
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
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
                          <Link to={"/"} className={style.listLink}>
                            <img
                              src={el.thumb}
                              alt={el.name}
                              className={style.itemImage}
                            />
                            <p>{el.name}<span className={style.itemSymbol}>{el.symbol}</span></p>
                            
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
