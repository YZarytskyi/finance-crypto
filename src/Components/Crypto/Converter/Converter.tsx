import style from "./Converter.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import NavCrypto from "../NavCrypto";
import React, { useEffect, useState } from "react";
import {
  fetchCoinsList,
  fetchPrice,
  removePrice,
} from "../../../Store/Reducers/converterSlice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Spinner from "../../Common/Spinner";
import LastUpdateTimer from "./LastUpdateTimer";


export interface Autocomplete {
  firstLetter: string;
  pair: string;
}

const Converter = () => {

  const { coinsList, price, isLoadingConverter } = useAppSelector(
    (state) => state.converter
  );
  const dispatch = useAppDispatch();

  const [coin, setCoin] = useState<Autocomplete>({
    firstLetter: "B",
    pair: "BTCUSDT",
  });
  const [value, setValue] = useState<number | "">(1);
  const [convertedValue, setConvertedValue] = useState<number | "">(1);


  useEffect(() => {
    if (!coinsList.length) {
      dispatch(fetchCoinsList());
    }
  }, []);

  useEffect(() => {
    setValue(1);
    setConvertedValue("")
    dispatch(fetchPrice(coin.pair));
    
    return () => {
      dispatch(removePrice())
    }
  }, [coin.pair]);

  useEffect(() => {
    setConvertedValue(price || "");
    return () => setConvertedValue("");
  }, [price]);


  const handleChangeCoin = (
    event: React.SyntheticEvent,
    newCoin: Autocomplete | null
  ): void => {
    if (newCoin) {
      setCoin({ firstLetter: newCoin.firstLetter, pair: newCoin.pair });
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value) {
      setValue(parseFloat(e.currentTarget.value))
      setConvertedValue(
        parseFloat(e.currentTarget.value) * (price || 0)
      );
    } else {
      setValue(parseFloat(""))
      setConvertedValue("");
    }
  };

  const handleChangeConvertedValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setConvertedValue(
      e.currentTarget.value ? parseFloat(e.currentTarget.value) : ""
    );
    if (e.currentTarget.value) {
      setValue(parseFloat(e.currentTarget.value) / (price || 0));
    } else {
      setValue("");
    }
  };

  const options = coinsList.map((pair) => {
    const firstLetter = pair[0].toUpperCase();
    return {
      firstLetter: firstLetter,
      pair,
    };
  });

  return (
    <>
      <NavCrypto />
      <section>
        <div className={style.hero}>
          <h1 className={style.heroInside}>Cryptocurrency Converter</h1>
        </div>
        <div className={style.converter}>
          <div className={style.converterInside}>
            <Autocomplete
              id="coinsList"
              className={style.autocomplete}
              value={coin}
              onChange={(event, newCoin) => handleChangeCoin(event, newCoin)}
              options={options.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              groupBy={(coin) => coin.firstLetter}
              getOptionLabel={(coin) => coin.pair.replace(/USDT/, "")}
              renderInput={(params) => <TextField {...params} label="Coin" />}
            />

            <input
              type="number"
              className={style.converterInput}
              value={value}
              onChange={(e) => handleChangeValue(e)}
            />

            <p className={style.converterText}>Convert to USDT</p>

            <div className={style.converterInputWrapper}>
              <input
                type="number"
                className={style.converterInput}
                value={convertedValue}
                onChange={(e) => handleChangeConvertedValue(e)}
              />
              {isLoadingConverter && <Spinner />}
            </div>
            <LastUpdateTimer coin={coin} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Converter;
