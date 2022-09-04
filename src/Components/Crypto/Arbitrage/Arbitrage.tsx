import style from "./Arbitrage.module.scss";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FiRefreshCcw } from "react-icons/fi";
import {
  fetchCurrencies,
  fetchPairs,
  removePairs,
  setPair1,
  setPair2,
  setPair3,
} from "../../../Store/Reducers/cryptoSlice";
import NavCrypto from "../NavCrypto";
import ScannerTable from "./ScannerTable";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";

const Arbitrage = () => {
  const { currencies, pairs, pair1, pair2, pair3, isLoadingCrypto } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(removePairs())
    }
  }, [])

  const allCurrencies =
    currencies.length !== 0 ? currencies.map((item) => item.symbol) : "";
  const pair1Currencies = allCurrencies
    ? allCurrencies.filter((x) => x.includes("USDT"))
    : [];

  const filterPair1 = pair1 ? pair1.replace(/USDT/, "") : "";
  const pair2Currencies = allCurrencies
    ? allCurrencies.filter(
        (x) => x.includes(filterPair1) && !x.includes("USDT")
      )
    : [];

  const regexp = new RegExp(filterPair1);
  const filterPair2 = pair2 ? pair2.replace(regexp, "") : "";
  const pair3Currencies = allCurrencies
    ? allCurrencies.filter((x) =>
        x.includes(filterPair2 + "USDT" || "USDT" + filterPair2)
      )
    : [];

  const pair1New = pairs[0];
  const pair2New = pairs[1];
  const pair3New = pairs[2];
  let result = 0;

  if (pairs.length !== 0) {
  const formula = (100 / +pair1New.ask / +pair2New.ask) * +pair3New.bid - 100 || 0;
  const res = formula < 3 && formula > -3
      ? formula.toFixed(2)
      : (100 / +pair1New.ask * +pair2New.bid * +pair3New.bid - 100).toFixed(2);
  result = +res < 3 && +res > -3
      ? +res
      : +(100 * +pair1New.bid / +pair2New.ask * +pair3New.bid - 100).toFixed(2);
    }

  const handlePairs = (pair1: string, pair2: string, pair3: string) => {
    const pairs = { pair1, pair2, pair3 };
    dispatch(fetchPairs(pairs));
  };

  const handleRefresh = () => {
    dispatch(fetchCurrencies());
  };

  return (
    <>
      <NavCrypto />
      <div className={style.wrapper}>
        <div>
          <br />
        </div>
        <div className="flex justify-center gap-5 mb-4">
          <div>
            <div className="mb-3">{pair1New?.ask}</div>
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
            <div className="mb-3">{pair2New?.ask}</div>
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
            <div className="mb-3">{pair3New?.bid}</div>
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
        <Button
          onClick={() => handlePairs(pair1, pair2, pair3)}
          variant="outlined"
        >
          Check
        </Button>
        <h4 className="my-4 text-xl font-medium">Result: {result} %</h4>
        <hr />
        <FiRefreshCcw
          className={style.refreshIcon}
          onClick={() => handleRefresh()}
        />
          <ScannerTable
            currencies={currencies}
            setPair1={setPair1}
            setPair2={setPair2}
            setPair3={setPair3}
            dispatch={dispatch}
            isLoadingCrypto={isLoadingCrypto}
            fetchCurrencies={fetchCurrencies}
          />
      </div>
    </>
  );
};

export default Arbitrage;
