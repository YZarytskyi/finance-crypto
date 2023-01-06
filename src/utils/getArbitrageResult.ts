import { ArbitrageData, ArbitrageWorkerResult, Currencies, Result } from 'types/Types';



export const getArbitrageTableResult = ({
  symbols,
  allCurrencies,
}: ArbitrageData): ArbitrageWorkerResult => {
  const result: Array<{ symbol: string }> = symbols
    .filter(item => item.status === 'TRADING')
    .map(x => ({
      symbol: x.symbol,
    }));

  const currencies = result.map(x => {
    const filterPrice = allCurrencies.find(
      (y: Currencies) => y.symbol === x.symbol
    );
    return filterPrice;
  });

  const currenciesUSDT = currencies.filter(q => q!.symbol.includes('USDT'));

  const map1 = currenciesUSDT.map((currencyObj) => {
      if (!currencyObj) {
        return undefined
      }
      const { symbol: pair1Symbol, askPrice, bidPrice } = currencyObj
      const pair1AskPrice = Number(askPrice);
      const pair1BidPrice = Number(bidPrice);

      const filterPair1 = pair1Symbol.replace(/USDT/, '');
      const pair2 = currencies.filter(y => y!.symbol.includes(filterPair1));
      const map2 = pair2.map((currencyObj) => {
        if (!currencyObj) {
          return undefined
        }
        const { symbol: pair2Symbol, askPrice, bidPrice } = currencyObj
        const pair2AskPrice = Number(askPrice);
        const pair2BidPrice = Number(bidPrice);

        const regexp = new RegExp(filterPair1);
        const filterPair2 = pair2Symbol.replace(regexp, '');
        const pair3 = currencies.filter((currencyObj) =>
          currencyObj?.symbol.includes(`${filterPair2}USDT`) ||
          currencyObj?.symbol.includes(`USDT${filterPair2}`) ||
            ''
        );
        const map3 = pair3.map((currencyObj) => {
          if (!currencyObj) {
            return undefined
          }
          const { symbol: pair3Symbol, askPrice, bidPrice } = currencyObj
            const pair3AskPrice = Number(askPrice);
            const pair3BidPrice = Number(bidPrice);

            let result: number = 0;
            if (
              pair1Symbol === `${filterPair1}USDT` &&
              pair2Symbol === `${filterPair2}${filterPair1}` &&
              pair3Symbol === `${filterPair2}USDT`
            ) {
              result =
                (100 / pair1AskPrice / pair2AskPrice) * pair3BidPrice - 100;
            }
            if (
              pair1Symbol === `${filterPair1}USDT` &&
              pair2Symbol === `${filterPair2}${filterPair1}` &&
              pair3Symbol === `USDT${filterPair2}`
            ) {
              result =
                100 / pair1AskPrice / pair2AskPrice / pair3AskPrice - 100;
            }
            if (
              pair1Symbol === `${filterPair1}USDT` &&
              pair2Symbol === `${filterPair1}${filterPair2}` &&
              pair3Symbol === `${filterPair2}USDT`
            ) {
              result =
                (100 / pair1AskPrice) * pair2BidPrice * pair3BidPrice - 100;
            }
            if (
              pair1Symbol === `${filterPair1}USDT` &&
              pair2Symbol === `${filterPair1}${filterPair2}` &&
              pair3Symbol === `USDT${filterPair2}`
            ) {
              result =
                ((100 / pair1AskPrice) * pair2BidPrice) / pair3AskPrice - 100;
            }
            if (
              pair1Symbol === `USDT${filterPair1}` &&
              pair2Symbol === `${filterPair2}${filterPair1}` &&
              pair3Symbol === `${filterPair2}USDT`
            ) {
              result =
                ((100 * pair1BidPrice) / pair2AskPrice) * pair3BidPrice - 100;
            }
            if (
              pair1Symbol === `USDT${filterPair1}` &&
              pair2Symbol === `${filterPair2}${filterPair1}` &&
              pair3Symbol === `USDT${filterPair2}`
            ) {
              result =
                (100 * pair1BidPrice) / pair2AskPrice / pair3AskPrice - 100;
            }
            if (
              pair1Symbol === `USDT${filterPair1}` &&
              pair2Symbol === `${filterPair1}${filterPair2}` &&
              pair3Symbol === `${filterPair2}USDT`
            ) {
              result =
                100 * pair1BidPrice * pair2BidPrice * pair3BidPrice - 100;
            }
            if (
              pair1Symbol === `USDT${filterPair1}` &&
              pair2Symbol === `${filterPair1}${filterPair2}` &&
              pair3Symbol === `USDT${filterPair2}`
            ) {
              result =
                (100 * pair1BidPrice * pair2BidPrice) / pair3AskPrice - 100;
            }
            return {
              pair1: pair1Symbol,
              price1: pair1AskPrice,
              pair2: pair2Symbol,
              price2: pair2AskPrice,
              pair3: pair3Symbol || 0,
              price3: pair3AskPrice || 0,
              result: Number(result.toFixed(2)),
            };
          }
        );
        return map3;
      });
      return map2;
    }
  );

  const resultFinal = map1
    .flat(3)
    .filter((obj) => obj?.result! > 0)
    .sort((a, b) => b!.result - a!.result);
  return {
    currencies,
    result: resultFinal as Result[],
  };
};
