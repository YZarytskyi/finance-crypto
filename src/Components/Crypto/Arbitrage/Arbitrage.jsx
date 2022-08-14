import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
  fetchAllCurrencies,
  fetchPairs,
  setPair1,
  setPair2,
  setPair3,
} from "../../../Redux/Reducers/cryptoReducer";
import style from './Arbitrage.module.css'
import Scanner from "./Scanner";
import { useState } from "react";

const Arbitrage = () => {
  const { pair1, pair2, pair3 } = useSelector((state) => state.crypto);
  const currencies = useSelector((state) => state.crypto.currencies);
  const pairs = useSelector((state) => state.crypto.pairs);
  const dispatch = useDispatch();
  const [getResult, setGetResult] = useState(0)

  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, []);

  useEffect(() => {
      if(getResult && pair1 && pair2 && pair3) dispatch(fetchPairs(pair1, pair2, pair3))
  }, [getResult]);


  const allCurrencies = currencies.length !== 0 ? currencies.map((item) => item.symbol) : "";
  const pair1Currencies = allCurrencies
    ? allCurrencies.filter((x) => x.includes("USDT"))
    : [];

  const filterPair1 = pair1 ? pair1.replace(/USDT/, "") : "";
  const pair2Currencies = allCurrencies
    ? allCurrencies.filter((x) => x.includes(filterPair1) && !x.includes("USDT"))
    : [];

  const regexp = new RegExp(filterPair1);
  const filterPair2 = pair2 ? pair2.replace(regexp, "") : "";
  const pair3Currencies = allCurrencies
    ? allCurrencies.filter((x) => x.includes(filterPair2 + "USDT" || "USDT" + filterPair2))
    : [];

  const formula = (100 / pairs[0] * pairs[1] * pairs[2] - 100) || 0;
  const result = formula < 4 && formula > -4
      ? formula.toFixed(2)
      : (100 / pairs[0] / pairs[1] * pairs[2] - 100).toFixed(2);

  return (
    <>
      <div className={style.head}>
        <br />
      </div>
      <div className={style.input}>
        <div>
          <div className={style.price}>{+pairs[0]}</div>
          <Autocomplete
            value={pair1}
            onChange={(event, pair1) => {
              dispatch(setPair1(pair1));
            }}
            disablePortal
            id="pair-1"
            options={pair1Currencies}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Pair 1" />}
          />
        </div>
        <div>
          <div className={style.price}>{+pairs[1]}</div>
          <Autocomplete
            value={pair2}
            onChange={(event, newValue) => {
              dispatch(setPair2(newValue));
            }}
            disablePortal
            id="pair-2"
            options={pair2Currencies}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Pair 2" />}
          />
        </div>
        <div>
          <div className={style.price}>{+pairs[2]}</div>
          <Autocomplete
            value={pair3}
            onChange={(event, newValue) => {
              dispatch(setPair3(newValue));
            }}
            disablePortal
            id="pair-3"
            options={pair3Currencies}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Pair 3" />}
          />
        </div>
      </div>
      <Button onClick={() => setGetResult(getResult + 1)} variant="outlined">
        Check
      </Button>
      <h4 className={style.result}>Result: {result} %</h4>
      <hr />
      <Scanner
        allCurrencies={allCurrencies}
        pair1Currencies={pair1Currencies}
        pair2Currencies={pair2Currencies}
        pair3Currencies={pair3Currencies}
        dispatch={dispatch}
        currencies={currencies}
      />
    </>
  );
};

export default Arbitrage;
