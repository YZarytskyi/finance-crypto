import React, { useEffect } from "react";
import { Currencies } from "../../../Types/Types";
import TableArbitrage from "./Table";
import { AppDispatch } from '../../../Store/store'
import { ActionCreatorWithPayload, AsyncThunk } from "@reduxjs/toolkit";

interface ScannerTableProps {
  currencies: Array<Currencies>;
  setPair1: ActionCreatorWithPayload<string, string>;
  setPair2: ActionCreatorWithPayload<string, string>;
  setPair3: ActionCreatorWithPayload<string, string>;
  dispatch: AppDispatch;
  fetchCurrencies: AsyncThunk<Currencies[], void, {}>;
  isLoadingCrypto: boolean;
}

const ScannerTable: React.FC<ScannerTableProps> = ({
  currencies,
  setPair1,
  setPair2,
  setPair3,
  dispatch,
  fetchCurrencies,
  isLoadingCrypto,
}) => {
  
  useEffect(() => {
      dispatch(fetchCurrencies());
  }, []);

  let pair1 = currencies.filter((q) => q.symbol.includes("USDT") && !q.symbol.includes("EURUSDT"));
  let map1 = React.useMemo(() => pair1.map((x) => {
    let filterPair1 = x.symbol.replace(/USDT/, "");
    let pair2 = currencies.filter((y) => y.symbol.includes(filterPair1));
    let map2 = pair2.map((w) => {
      const regexp = new RegExp(filterPair1);
      let filterPair2 = w.symbol.replace(regexp, "");
      let pair3 = currencies.filter((z) =>
        z.symbol.includes(`${filterPair2}USDT`) ||
        z.symbol.includes(`USDT${filterPair2}`)
          ? z.symbol.includes(`${filterPair2}USDT`) ||
            z.symbol.includes(`USDT${filterPair2}`)
          : ""
      );
      let map3 = pair3.map((q) => {
        const formula = (100 / +x.askPrice / +w.askPrice) * +q.bidPrice - 100;
        const result =
          formula < 4 && formula > -4
            ? formula.toFixed(2)
            : ((100 / +x.askPrice) * +w.bidPrice * +q.bidPrice - 100).toFixed(2);
        const result2 =
          +result < 4 && +result > -4
            ? result
            : (100 * +x.bidPrice * +w.bidPrice * +q.bidPrice - 100).toFixed(2);
        const result3 =
          +result2 < 4 && +result2 > -4
            ? result2
            : (((100 * +x.bidPrice) / +w.askPrice) * +q.bidPrice - 100).toFixed(2);
        return {
          pair1: x.symbol,
          price1: x.askPrice,
          pair2: w.symbol,
          price2: w.askPrice,
          pair3: q.symbol ? q.symbol : "",
          price3: q.askPrice ? q.askPrice : "",
          result: result3,
        };
      });
      return map3;
    });
    return map2;
  }), [currencies]);
  let result = map1.flat(3).filter((x) => +x.result > 0 && +x.result < 2);

  return (
    <>
      {isLoadingCrypto ? (
        <div className="mt-2">Loading...</div>
      ) : (
        <TableArbitrage
          result={result}
          setPair1={setPair1}
          setPair2={setPair2}
          setPair3={setPair3}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default ScannerTable;
