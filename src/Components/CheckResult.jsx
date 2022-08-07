import * as React from 'react';
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptoApi } from "../API/api";
import Button from '@mui/material/Button';
import {
  setAllCurrencies,
  setPair1,
  setPair2,
  setPair3,
  setPairs,
} from "../Redux/Reducers/cryptoReducer";
import "./CheckResult.css";

const CheckResult = () => {
  const { pair1, pair2, pair3 } = useSelector((state) => state.crypto);
  const currencies = useSelector((state) => state.crypto.currencies);
  const pairs = useSelector((state) => state.crypto.pairs);
  const dispatch = useDispatch();

  const fetchAllCurrencies = async () => {
    const response = await cryptoApi.getAllCurrencies();
    dispatch(setAllCurrencies(response));
  };
  const fetchPairs = async () => {
    const response = await cryptoApi.getPairs(pair1, pair2, pair3);
    dispatch(setPairs(response[0], response[1], response[2]))
  };

  const allCurrencies = currencies.length !== 0 ? currencies[0].map((item) => item.symbol) : ''
  const pair1Currencies = allCurrencies ? allCurrencies.filter(x => x.includes('USDT')) : ''
  const filterPair1 = pair1 ? pair1.replace(/USDT/, '') : ''
  const pair2Currencies = allCurrencies ? allCurrencies.filter(x => x.includes(filterPair1)) : allCurrencies
  const regexp = new RegExp(filterPair1);
  const filterPair2 = pair2 ? pair2.replace(regexp, '') : ''
  const pair3Currencies = allCurrencies ? allCurrencies.filter(x => x.includes(filterPair2 + 'USDT' || 'USDT' +  filterPair2)) : pair1Currencies
  const result = ((100 / pairs[0] * pairs[1]) * pairs[2] - 100).toFixed(2)

  useEffect(() => {
    fetchAllCurrencies();
  }, []);

  useEffect(() => {
    if (pair1 && pair2 && pair3) fetchPairs();
  }, [pair1, pair2, pair3]);

  return (
    <>
      <div className="head">
        <hr />
      </div>
      <div>Investing 100 USDT</div>
      <br />
      <div className="input">
      <span>{pairs[0]}</span>
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
      <span>{pairs[1]}</span>
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
      <span>{pairs[2]}</span>
      <Autocomplete
        value={pair3}
        onChange={(event, newValue) => {
          dispatch(setPair3(newValue));
        }}
        disablePortal
        id="pair-3"
        options={pair3Currencies}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Pair 3"/>}
      />
      </div>
      <Button onClick={fetchPairs} variant="outlined">Check</Button>
      <br />
      <br />
      <div className="result">
        Result: {result}
      </div>

    </>
  );
};

export default CheckResult;
