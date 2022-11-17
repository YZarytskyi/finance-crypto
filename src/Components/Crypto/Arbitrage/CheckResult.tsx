import style from "./Arbitrage.module.scss";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import sprite from "../../../assets/images/icons.svg";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import {
  fetchPairs,
  removePairs,
  setPair1,
  setPair2,
  setPair3,
} from "../../../Store/Reducers/arbitrageSlice";
import { removeFloatNull } from "../../../utils/utils";

const CheckResult = () => {
  const { currencies, pairs, pair1, pair2, pair3, isLoadingPairs } =
    useAppSelector((state) => state.arbitrage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(removePairs());
    };
  }, []);

  let pair1Currencies: string[] = [];
  let pair2Currencies: string[] = [];
  let pair3Currencies: string[] = [];
  let filterPair1: string = "";

  if (currencies.length) {
    const allCurrencies = currencies.map((item) => item.symbol);

    pair1Currencies = allCurrencies.filter((x) => x.includes("USDT"));

    filterPair1 = pair1 ? pair1.replace(/USDT/, "") : "";

    pair2Currencies = allCurrencies.filter(
      (x) => x.includes(filterPair1) && !x.includes("USDT")
    );

    const regexp = new RegExp(filterPair1);
    const filterPair2 = pair2 ? pair2.replace(regexp, "") : "";

    pair3Currencies = allCurrencies.filter(
      (x) =>
        x.includes(`${filterPair2}USDT`) || x.includes(`USDT${filterPair2}`)
    );
  }

  const [pair1WithPrice, pair2WithPrice, pair3WithPrice] = pairs;

  interface Result {
    price1: number;
    price2: number;
    price3: number;
    result: number;
  }
  let result: Partial<Result> = {};

  if (pairs.length) {
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
              {result.price1 ? removeFloatNull(result.price1) : "Price"}
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
              {result.price2 ? removeFloatNull(result.price2) : "Price"}
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
              {result.price3 ? removeFloatNull(result.price3) : "Price"}
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
        <LoadingButton
          className={style.checkBtn}
          loading={isLoadingPairs}
          endIcon={
            <svg className={style.arrowRight}>
              <use href={sprite + "#arrow_right"} />
            </svg>
          }
          loadingPosition="end"
          variant="outlined"
          onClick={() => handlePairs()}
        >
          Check
        </LoadingButton>
        <p className={style.result}>
          Result: {result.result ? `${result.result} %` : ""}
        </p>
      </section>
    </>
  );
};

export default CheckResult;
