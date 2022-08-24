import * as React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import style from "./Crypto.module.css";
import {
  fetchCurrencies,
  fetchPairs,
  setPair1,
  setPair2,
  setPair3,
} from "../../Store/Reducers/cryptoSlice";
import Scanner from "./Scanner";

const Arbitrage = () => {
  const { pair1, pair2, pair3 } = useSelector((state) => state.crypto);
  const currencies = useSelector((state) => state.crypto.currencies);
  const pairs = useSelector((state) => state.crypto.pairs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  const handlePairs = (pair1, pair2, pair3) => { 
        const pairs = {pair1, pair2, pair3}
        dispatch(fetchPairs(pairs))
  } 



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


  const pair11 = pairs[0] ? pairs[0] : 0
  const pair22 = pairs[1] ? pairs[1] : 0
  const pair33 = pairs[2] ? pairs[2] : 0
  const formula = (100 / pair11.ask / pair22.ask * pair33.bid - 100) || 0;
  const result = formula < 4 && formula > -4
      ? formula.toFixed(2)
      : (100 / pair11.ask * pair22.bid * pair33.bid - 100).toFixed(2)
  const result2 = result < 4 && result > -4
      ? result
      : (100 * pair11.bid / pair22.ask * pair33.bid - 100).toFixed(2)


  return (
    <div className={style.wrapper}>
      <div>
        <br />
      </div>
      <div className="flex justify-center gap-5 mb-5">
        <div>
          <div className="pb-0">{+pair11.ask}</div>
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
          <div>{+pair22.ask}</div>
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
          <div>{+pair33.bid}</div>
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
      <Button onClick={() => handlePairs(pair1, pair2, pair3)} variant="outlined">
        Check
      </Button>
      <h4 className='my-4 text-xl font-medium'>Result: {result2} %</h4>
      <hr />
      <Scanner
        allCurrencies={allCurrencies}
        pair1Currencies={pair1Currencies}
        pair2Currencies={pair2Currencies}
        pair3Currencies={pair3Currencies}
        currencies={currencies}
      />
    </div>
  );
};

export default Arbitrage;
