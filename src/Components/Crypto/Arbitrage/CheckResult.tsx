import style from "./Arbitrage.module.scss";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LoadingButton from '@mui/lab/LoadingButton';
import { BiRightArrow } from "react-icons/bi"
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import {
  fetchPairs,
  removePairs,
  setPair1,
  setPair2, 
  setPair3,
} from "../../../Store/Reducers/cryptoSlice";
import { parseValue } from "../Coins/TableBody";

const CheckResult = () => {
  const { currencies, pairs, pair1, pair2, pair3, isLoadingPairs } = useAppSelector(
    (state) => state.crypto
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(removePairs());
    };
  }, []);

  // All available currencies
  const allCurrencies =
    currencies.length !== 0 ? currencies.map((item) => item.symbol) : "";

  // Pair 1 Currencies
  const pair1Currencies = allCurrencies
    ? allCurrencies.filter((x) => x.includes("USDT"))
    : [];

  const filterPair1 = pair1 ? pair1.replace(/USDT/, "") : "";

  // Pair 2 Currencies
  const pair2Currencies = allCurrencies
    ? allCurrencies.filter(
        (x) => x.includes(filterPair1) && !x.includes("USDT")
      )
    : [];

  const regexp = new RegExp(filterPair1);
  const filterPair2 = pair2 ? pair2.replace(regexp, "") : "";

  // Pair 3 Currencies
  const pair3Currencies = allCurrencies
    ? allCurrencies.filter((x) =>
        x.includes(filterPair2 + "USDT" || "USDT" + filterPair2)
      )
    : [];

  const [pair1WithPrice, pair2WithPrice, pair3WithPrice] = pairs;
  let result = 0;

  if (pairs.length !== 0) {
    const formula =
      (100 / +pair1WithPrice.ask / +pair2WithPrice.ask) * +pair3WithPrice.bid -
        100 || 0;
    const res =
      formula < 3 && formula > -3
        ? formula.toFixed(2)
        : (
            (100 / +pair1WithPrice.ask) *
              +pair2WithPrice.bid *
              +pair3WithPrice.bid -
            100
          ).toFixed(2);
    result =
      +res < 3 && +res > -3
        ? +res
        : +(
            ((100 * +pair1WithPrice.bid) / +pair2WithPrice.ask) *
              +pair3WithPrice.bid -
            100
          ).toFixed(2);
  }

  const handlePairs = () => {
    if (pair1 && pair2 && pair3) {
      const pairs = { pair1, pair2, pair3 };
      dispatch(fetchPairs(pairs));
    }
  };

  return (
    <>
      <div className={style.checkResult}>
        <div>
          <div className={style.pairPrice}>{pair1WithPrice?.ask ? parseValue(+pair1WithPrice.ask) : 'Price'}</div>
          <Autocomplete
            id="pair-1"
            value={pair1}
            onChange={(event, pair1) => {
              dispatch(setPair1(pair1));
            }}
            sx={{ width: 200 }}
            disablePortal
            options={pair1Currencies}
            renderInput={(params) => <TextField {...params} label="Pair 1" />}
          />
        </div>
        <div>
          <div className={style.pairPrice}>{pair2WithPrice?.ask ? parseValue(+pair2WithPrice.ask) : 'Price'}</div>
          <Autocomplete
            id="pair-2"
            value={pair2}
            onChange={(event, newValue) => {
              dispatch(setPair2(newValue));
            }}
            sx={{ width: 200 }}
            disablePortal
            options={pair2Currencies}
            renderInput={(params) => <TextField {...params} label="Pair 2" />}
          />
        </div>
        <div>
          <div className={style.pairPrice}>{pair3WithPrice?.bid ? parseValue(+pair3WithPrice.bid) : 'Price'}</div>
          <Autocomplete
            id="pair-3"
            value={pair3}
            onChange={(event, newValue) => {
              dispatch(setPair3(newValue));
            }}
            sx={{ width: 200 }}
            disablePortal
            options={pair3Currencies}
            renderInput={(params) => <TextField {...params} label="Pair 3" />}
          />
        </div>
      </div>
      <LoadingButton
        loading={isLoadingPairs}
        endIcon={<BiRightArrow style={{width: 13}}/>}
        loadingPosition="end"
        variant="outlined"
        onClick={() => handlePairs()}>
          Check
      </LoadingButton>
      <div className={style.result}>Result: {result} %</div>
      <hr/>
    </>
  );
};

export default CheckResult;
