import { useEffect } from "react";
import style from "./Arbitrage.module.scss";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
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

const Arbitrage = () => {
  const { pair1, pair2, pair3 } = useSelector((state) => state.crypto);
  const currencies = useSelector((state) => state.crypto.currencies);
  const pairs = useSelector((state) => state.crypto.pairs);
  const dispatch = useDispatch();

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

  const pair11 = pairs[0] ? pairs[0] : 0;
  const pair22 = pairs[1] ? pairs[1] : 0;
  const pair33 = pairs[2] ? pairs[2] : 0;
  const formula = (100 / pair11.ask / pair22.ask) * pair33.bid - 100 || 0;
  const result =
    formula < 3 && formula > -3
      ? formula.toFixed(2)
      : ((100 / pair11.ask) * pair22.bid * pair33.bid - 100).toFixed(2);
  const result2 =
    result < 3 && result > -3
      ? result
      : (((100 * pair11.bid) / pair22.ask) * pair33.bid - 100).toFixed(2);


  const handlePairs = (pair1, pair2, pair3) => {
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
            <div className="mb-3">{pair11.ask && +pair11.ask}</div>
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
            <div className="mb-3">{pair22.ask && +pair22.ask}</div>
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
            <div className="mb-3">{pair33.bid && +pair33.bid}</div>
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
        <h4 className="my-4 text-xl font-medium">Result: {result2} %</h4>
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
            fetchCurrencies={fetchCurrencies}
          />
      </div>
    </>
  );
};

export default Arbitrage;
