import TableArbitrage from "./TableArbitrage";

const Scanner = ({ currencies }) => {
  if (currencies.length !== 0) {
    let pair1 = currencies.filter(
      (q) => q.symbol.includes("USDT") && !q.symbol.includes("SRM")
    );
    let map1 = pair1.map((x) => {
      let filterPair1 = x.symbol.replace(/USDT/, "");
      let pair2 = currencies.filter((y) => y.symbol.includes(filterPair1));
      let map2 = pair2.map((w) => {
        const regexp = new RegExp(filterPair1);
        let filterPair2 = w.symbol.replace(regexp, "");
        let pair3 = currencies.filter((z) =>
          z.symbol.includes(filterPair2 + "USDT" || "USDT" + filterPair2)
            ? z.symbol.includes(filterPair2 + "USDT" || "USDT" + filterPair2)
            : ""
        );
        let map3 = pair3.map((q) => {
          const formula = (100 / x.price / w.price) * q.price - 100;
          const result =
            formula < 4 && formula > -4
              ? formula.toFixed(2)
              : ((100 / x.price) * w.price * q.price - 100).toFixed(2);
          const result2 =
            result < 4 && result > -4
              ? result
              : (100 * x.price * w.price * q.price - 100).toFixed(2);
          const result3 =
            result2 < 4 && result2 > -4
              ? result2
              : (((100 * x.price) / w.price) * q.price - 100).toFixed(2);
          return {
            pair1: x.symbol,
            price1: x.price,
            pair2: w.symbol,
            price2: w.price,
            pair3: q.symbol ? q.symbol : "",
            price3: q.price ? q.price : "",
            result: result3,
          };
        });
        return map3;
      });
      return map2;
    });
    let filterResult = map1
      .flat(3)
      .filter((x) => x.result > 0.5 && x.result < 10);
    let result = filterResult.map((x, i) => ({
      pair1: x.pair1,
      price1: +x.price1,
      pair2: x.pair2,
      price2: x.price2,
      pair3: x.pair3,
      price3: +x.price3,
      result: +x.result,
      id: i + 1,
    }));

    return <TableArbitrage result={result} />;
  }
};

export default Scanner;
