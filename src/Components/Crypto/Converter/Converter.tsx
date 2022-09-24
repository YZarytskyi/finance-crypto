import style from "./Converter.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import NavCrypto from "../NavCrypto";
import React, { useEffect, useState } from "react";
import {
  fetchCoinsList,
  fetchPrice,
} from "../../../Store/Reducers/converterSlice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Autocomplete {
  firstLetter: string;
  coin: string;
}

const Converter = () => {
  const dispatch = useAppDispatch();
  const {coinsList, price} = useAppSelector((state) => state.converter);

  const [coin, setCoin] = useState<Autocomplete>({
    firstLetter: "B",
    coin: "BTCUSDT",
  });
  const handleChangeCoin = (
    event: React.SyntheticEvent,
    newCoin: Autocomplete | null
  ): void => {
    if (newCoin) {
      setCoin({ firstLetter: newCoin.firstLetter, coin: newCoin.coin })
    }
  };

  const [value, setValue] = useState<number>(1);
  const [convertedValue, setConvertedValue] = useState<number>(1);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(+e.currentTarget.value);
    setConvertedValue(+e.currentTarget.value * (price ? price : 0))
  };

  useEffect(() => {
    if (coinsList.length === 0) {
      dispatch(fetchCoinsList());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchPrice(coin.coin));
    setValue(1);
  }, [coin.coin])

  useEffect(() => {
    setConvertedValue(price ? price : 0)
  }, [price])

  const options = coinsList.map((coin) => {
    const firstLetter = coin[0].toUpperCase();
    return {
      firstLetter: firstLetter,
      coin,
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
              getOptionLabel={(coin) => coin.coin.replace(/USDT/, "")}
              renderInput={(params) => <TextField {...params} label="Coin" />}
            />
            <input
              className={style.converterInput}
              value={value}
              onChange={(e) => handleChangeValue(e)}
            />
            <p>Convert to USDT</p>
            <input
              type="number"
              className={style.converterInput}
              value={convertedValue}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Converter;
