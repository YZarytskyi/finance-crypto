import style from "./Arbitrage.module.scss";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { BiRightArrow } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import {
  fetchPairs,
  removePairs,
  setPair1,
  setPair2,
  setPair3,
} from "../../../Store/Reducers/arbitrageSlice";
import { parseValue } from "../Coins/TableBody";

const CheckResult = () => {
  const { currencies, pairs, pair1, pair2, pair3, isLoadingPairs } =
    useAppSelector((state) => state.arbitrage);
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

  interface Result {
    price1: number,
    price2: number,
    price3: number,
    result: number,
  }
  let result: Partial<Result> = {};
  if (pairs.length !== 0) {
    if (
      pair1WithPrice.symbol.endsWith("USDT") &&
      pair2WithPrice.symbol.endsWith(filterPair1) &&
      pair3WithPrice.symbol.endsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.ask,
        price2: +pair2WithPrice.ask,
        price3: +pair3WithPrice.bid,
        result: +(
          (100 / +pair1WithPrice.ask / +pair2WithPrice.ask) *
            +pair3WithPrice.bid -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.endsWith("USDT") &&
      pair2WithPrice.symbol.endsWith(filterPair1) &&
      pair3WithPrice.symbol.startsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.ask,
        price2: +pair2WithPrice.ask,
        price3: +pair3WithPrice.ask,
        result: +(
          100 /
            +pair1WithPrice.ask /
            +pair2WithPrice.ask /
            +pair3WithPrice.ask -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.endsWith("USDT") &&
      pair2WithPrice.symbol.startsWith(filterPair1) &&
      pair3WithPrice.symbol.endsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.ask,
        price2: +pair2WithPrice.bid,
        price3: +pair3WithPrice.bid,
        result: +(
          (100 / +pair1WithPrice.ask) *
            +pair2WithPrice.bid *
            +pair3WithPrice.bid -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.endsWith("USDT") &&
      pair2WithPrice.symbol.startsWith(filterPair1) &&
      pair3WithPrice.symbol.startsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.ask,
        price2: +pair2WithPrice.bid,
        price3: +pair3WithPrice.ask,
        result: +(
          ((100 / +pair1WithPrice.ask) * +pair2WithPrice.bid) /
            +pair3WithPrice.ask -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.startsWith("USDT") &&
      pair2WithPrice.symbol.endsWith(filterPair1) &&
      pair3WithPrice.symbol.endsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.bid,
        price2: +pair2WithPrice.ask,
        price3: +pair3WithPrice.bid,
        result: +(
          ((100 * +pair1WithPrice.bid) / +pair2WithPrice.ask) *
            +pair3WithPrice.bid -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.startsWith("USDT") &&
      pair2WithPrice.symbol.endsWith(filterPair1) &&
      pair3WithPrice.symbol.startsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.bid,
        price2: +pair2WithPrice.ask,
        price3: +pair3WithPrice.ask,
        result: +(
          (100 * +pair1WithPrice.bid) /
            +pair2WithPrice.ask /
            +pair3WithPrice.ask -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.startsWith("USDT") &&
      pair2WithPrice.symbol.startsWith(filterPair1) &&
      pair3WithPrice.symbol.endsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.bid,
        price2: +pair2WithPrice.bid,
        price3: +pair3WithPrice.bid,
        result: +(
          100 *
            +pair1WithPrice.bid *
            +pair2WithPrice.bid *
            +pair3WithPrice.bid -
          100
        ).toFixed(2),
      };
    }
    if (
      pair1WithPrice.symbol.startsWith("USDT") &&
      pair2WithPrice.symbol.startsWith(filterPair1) &&
      pair3WithPrice.symbol.startsWith("USDT")
    ) {
      result = {
        price1: +pair1WithPrice.bid,
        price2: +pair2WithPrice.bid,
        price3: +pair3WithPrice.bid,
        result: +(
          (100 * +pair1WithPrice.bid * +pair2WithPrice.bid) /
            +pair3WithPrice.ask -
          100
        ).toFixed(2),
      };
    }
  }

  const handlePair1 = (
    event: React.SyntheticEvent,
    newValue: string | null
  ): void => {
    if (typeof newValue === "string") dispatch(setPair1(newValue));
  };
  const handlePair2 = (
    event: React.SyntheticEvent,
    newValue: string | null
  ): void => {
    if (typeof newValue === "string") dispatch(setPair2(newValue));
  };
  const handlePair3 = (
    event: React.SyntheticEvent,
    newValue: string | null
  ): void => {
    if (typeof newValue === "string") dispatch(setPair3(newValue));
  };
  const handlePairs = () => {
    if (pair1 && pair2 && pair3) {
      const pairs = { pair1, pair2, pair3 };
      dispatch(fetchPairs(pairs));
    }
  };

  return (
    <>
      <section className={style.checkResult}>
        <ul className={style.checkResultList}>
          <li>
            <p className={style.pairPrice}>
              {result.price1 ? parseValue(result.price1) : "Price"}
            </p>
            <Autocomplete
              id="pair-1"
              value={pair1}
              onChange={(event, newValue) => handlePair1(event, newValue)}
              sx={{ width: 200 }}
              disablePortal
              options={pair1Currencies}
              renderInput={(params) => <TextField {...params} label="Pair 1" />}
            />
          </li>
          <li>
            <p className={style.pairPrice}>
              {result.price2 ? parseValue(result.price2) : "Price"}
            </p>
            <Autocomplete
              id="pair-2"
              value={pair2}
              onChange={handlePair2}
              sx={{ width: 200 }}
              disablePortal
              options={pair2Currencies}
              renderInput={(params) => <TextField {...params} label="Pair 2" />}
            />
          </li>
          <li>
            <p className={style.pairPrice}>
              {result.price3 ? parseValue(result.price3) : "Price"}
            </p>
            <Autocomplete
              id="pair-3"
              value={pair3}
              onChange={handlePair3}
              sx={{ width: 200 }}
              disablePortal
              options={pair3Currencies}
              renderInput={(params) => <TextField {...params} label="Pair 3" />}
            />
          </li>
        </ul>
      </section>
      <LoadingButton
        loading={isLoadingPairs}
        endIcon={<BiRightArrow style={{ width: 13 }} />}
        loadingPosition="end"
        variant="outlined"
        onClick={() => handlePairs()}
      >
        Check
      </LoadingButton>
      <p className={style.result}>Result: {result.result ? `${result.result} %` : ''}</p>
      <hr />
    </>
  );
};

export default CheckResult;
