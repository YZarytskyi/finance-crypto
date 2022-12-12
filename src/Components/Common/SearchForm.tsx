import style from "./SearchForm.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import {
  fetchCoinsByQuery,
  fetchExchangeById,
  fetchExchangesList,
} from "../../Store/Reducers/cryptoSlice";
// import { Exchanges, Markets } from "../../Types/Types";

interface SearchFormProps {
  page: number;
  fetch: any;
  component: "coins" | "exchanges";
}

const SearchForm: React.FC<SearchFormProps> = ({ page, fetch, component }) => {
  const { exchangesList, isLoadingExchangesList } = useAppSelector(
    (state) => state.crypto
  );
  const dispatch = useAppDispatch();
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [filterExchangesList, setFilterExchangesList] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    setFilterExchangesList(exchangesList.slice(0, 5));
  }, [exchangesList]);

  useEffect(() => {
    if (!filterExchangesList?.length) {
      setFilterExchangesList([{ id: "error", name: "Exchanges not found" }]);
    }
  }, [filterExchangesList]);

  useEffect(() => {
    if (showList) {
      document.body.addEventListener("mousedown", onClickCloseList);
    }

    return () =>
      document.body.removeEventListener("mousedown", onClickCloseList);
  }, [showList]);

  const onClickCloseList = (e: MouseEvent) => {
    if ((e.target as Element).parentNode !== listRef.current) {
      setShowList(false);
    }
  };

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (component === "exchanges") {
      if (!exchangesList.length) {
        dispatch(fetchExchangesList());
      } else {
        setFilterExchangesList(
          exchangesList
            .filter((el) =>
              el.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase().trim())
            )
            .slice(0, 5)
        );
      }
      setShowList(true);
    }
  };

  const onListItemClick = (e: any) => {
    const id = e.target.dataset.id;
    dispatch(fetchExchangeById(id));
    if (inputRef.current) {
      inputRef.current.value = e.target.textContent;
    }
    setShowList(false);
  };

  const onInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    const value = (e.target as HTMLInputElement).value?.trim().toLowerCase();
    if (value) {
      setFilterExchangesList(
        exchangesList
          .filter((el) => el.name.toLowerCase().includes(value))
          .slice(0, 5)
      );
    } else {
      setFilterExchangesList(exchangesList.slice(0, 5));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.searchQuery?.value?.trim().toLowerCase();
    if (!inputValue) {
      dispatch(fetch(page));
      return;
    }
    if (component === "coins") {
      dispatch(fetchCoinsByQuery(inputValue));
      return;
    }
  };

  return (
    <form
      className={style.searchForm}
      onSubmit={(e) => onSubmit(e)}
      onChange={(e) => onInputChange(e)}
    >
      <div className={style.searchContainer}>
        <input
          type="text"
          className={style.inputCoin}
          placeholder="Coin"
          name="searchQuery"
          onFocus={(e) => onInputFocus(e)}
          ref={inputRef}
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
        {showList && (
          <ul
            className={style.searchList}
            onClick={(e) => onListItemClick(e)}
            ref={listRef}
          >
            {isLoadingExchangesList ? (
              <li>Loading...</li>
            ) : (
              <>
                {filterExchangesList.map((el) => (
                  <li key={el.id} data-id={el.id}>
                    {el.name}
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
