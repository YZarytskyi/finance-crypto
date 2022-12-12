import style from "./SearchForm.module.scss";
import React, { useRef, useState } from "react";
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
  const { exchangesList } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();
  const listRef = useRef<HTMLUListElement>(null);
  const [showList, setShowList] = useState<boolean>(false);

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (component === "exchanges") {
      dispatch(fetchExchangesList());
      setShowList(true);
    }
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // if (e.target === listRef.current) {
      // return
    // }
    // setShowList(false);
  };

  const onListItemClick = (e: any) => {
    const id = e.target.dataset.id;
    dispatch(fetchExchangeById(id));
    setShowList(false);
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
    <form className={style.searchForm} onSubmit={(e) => onSubmit(e)}>
      <div className={style.searchContainer}>
        <input
          type="text"
          className={style.inputCoin}
          placeholder="Coin"
          name="searchQuery"
          onFocus={(e) => onInputFocus(e)}
          onBlur={(e) => onInputBlur(e)}
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
          <ul className={style.searchList} onClick={(e) => onListItemClick(e)} ref={listRef}>
            {exchangesList.map((el) => (
              <li key={el.id} data-id={el.id}>
                {el.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
