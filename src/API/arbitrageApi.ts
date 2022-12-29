import axios from 'axios';
import { Notify } from 'notiflix';
import { ArbitrageResult, Currencies, Result } from '../types/Types';
import { notifyApiOptions } from '../utils/notify';

export const arbitrageApi = {
  getAllCurrencies() {
    return axios
      .all([
        axios.get('https://api.binance.com/api/v3/exchangeInfo'),
        axios.get('https://api.binance.com/api/v3/ticker/bookTicker'),
      ])
      .then(
        axios.spread((response1, response2) => {
          const result: Array<{ symbol: string }> = response1.data.symbols
            .filter(
              (item: { status: string; symbol: string }) =>
                item.status === 'TRADING'
            )
            .map((x: { status: string; symbol: string }) => ({
              symbol: x.symbol,
            }));

          const currencies: Array<Currencies> = result.map(x => {
            const filterPrice: Currencies = response2.data.find(
              (y: Currencies) => y.symbol === x.symbol
            );
            return filterPrice;
          });

          const currenciesUSDT = currencies.filter(q =>
            q.symbol.includes('USDT')
          );

          const map1 = currenciesUSDT.map(
            ({ symbol: pair1Symbol, askPrice, bidPrice }) => {
              const pair1AskPrice = Number(askPrice);
              const pair1BidPrice = Number(bidPrice);

              const filterPair1 = pair1Symbol.replace(/USDT/, '');
              const pair2 = currencies.filter(y =>
                y.symbol.includes(filterPair1)
              );
              const map2 = pair2.map(
                ({ symbol: pair2Symbol, askPrice, bidPrice }) => {
                  const pair2AskPrice = Number(askPrice);
                  const pair2BidPrice = Number(bidPrice);

                  const regexp = new RegExp(filterPair1);
                  const filterPair2 = pair2Symbol.replace(regexp, '');
                  const pair3 = currencies.filter(
                    ({ symbol }) =>
                      symbol.includes(`${filterPair2}USDT`) ||
                      symbol.includes(`USDT${filterPair2}`) ||
                      ''
                  );
                  const map3 = pair3.map(
                    ({ symbol: pair3Symbol, askPrice, bidPrice }) => {
                      const pair3AskPrice = Number(askPrice);
                      const pair3BidPrice = Number(bidPrice);

                      let result: number = 0;
                      if (
                        pair1Symbol === `${filterPair1}USDT` &&
                        pair2Symbol === `${filterPair2}${filterPair1}` &&
                        pair3Symbol === `${filterPair2}USDT`
                      ) {
                        result =
                          (100 / pair1AskPrice / pair2AskPrice) *
                            pair3BidPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `${filterPair1}USDT` &&
                        pair2Symbol === `${filterPair2}${filterPair1}` &&
                        pair3Symbol === `USDT${filterPair2}`
                      ) {
                        result =
                          100 / pair1AskPrice / pair2AskPrice / pair3AskPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `${filterPair1}USDT` &&
                        pair2Symbol === `${filterPair1}${filterPair2}` &&
                        pair3Symbol === `${filterPair2}USDT`
                      ) {
                        result =
                          (100 / pair1AskPrice) *
                            pair2BidPrice *
                            pair3BidPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `${filterPair1}USDT` &&
                        pair2Symbol === `${filterPair1}${filterPair2}` &&
                        pair3Symbol === `USDT${filterPair2}`
                      ) {
                        result =
                          ((100 / pair1AskPrice) * pair2BidPrice) /
                            pair3AskPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `USDT${filterPair1}` &&
                        pair2Symbol === `${filterPair2}${filterPair1}` &&
                        pair3Symbol === `${filterPair2}USDT`
                      ) {
                        result =
                          ((100 * pair1BidPrice) / pair2AskPrice) *
                            pair3BidPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `USDT${filterPair1}` &&
                        pair2Symbol === `${filterPair2}${filterPair1}` &&
                        pair3Symbol === `USDT${filterPair2}`
                      ) {
                        result =
                          (100 * pair1BidPrice) /
                            pair2AskPrice /
                            pair3AskPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `USDT${filterPair1}` &&
                        pair2Symbol === `${filterPair1}${filterPair2}` &&
                        pair3Symbol === `${filterPair2}USDT`
                      ) {
                        result =
                          100 * pair1BidPrice * pair2BidPrice * pair3BidPrice -
                          100;
                      }
                      if (
                        pair1Symbol === `USDT${filterPair1}` &&
                        pair2Symbol === `${filterPair1}${filterPair2}` &&
                        pair3Symbol === `USDT${filterPair2}`
                      ) {
                        result =
                          (100 * pair1BidPrice * pair2BidPrice) /
                            pair3AskPrice -
                          100;
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
                }
              );
              return map2;
            }
          );

          const resultFinal = map1
            .flat(3)
            .filter(({ result }) => result > 0)
            .sort((a, b) => b.result - a.result);
          return {
            currencies,
            result: resultFinal,
          };
        })
      )
      .catch(({ message }) => {
        Notify.failure(message as string, notifyApiOptions);
      });
  },
  getArbitrageResult(value1: string, value2: string, value3: string) {
    return axios
      .all([
        axios.get(
          `https://api.binance.com/api/v1/depth?symbol=${value1}&limit=1`
        ),
        axios.get(
          `https://api.binance.com/api/v1/depth?symbol=${value2}&limit=1`
        ),
        axios.get(
          `https://api.binance.com/api/v1/depth?symbol=${value3}&limit=1`
        ),
      ])
      .then(
        axios.spread((pair1, pair2, pair3) => {
          let result: Partial<ArbitrageResult> = {};
          const filterPair1 = value1.replace(/USDT/, '');
          const pair1WithPrice = {
            symbol: value1,
            ask: pair1.data.asks.flat()[0],
            bid: pair1.data.bids.flat()[0],
          };
          const pair2WithPrice = {
            symbol: value2,
            ask: pair2.data.asks.flat()[0],
            bid: pair2.data.bids.flat()[0],
          };
          const pair3WithPrice = {
            symbol: value3,
            ask: pair3.data.asks.flat()[0],
            bid: pair3.data.bids.flat()[0],
          };

          if (
            pair1WithPrice.symbol.endsWith('USDT') &&
            pair2WithPrice.symbol.endsWith(filterPair1) &&
            pair3WithPrice.symbol.endsWith('USDT')
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
            pair1WithPrice.symbol.endsWith('USDT') &&
            pair2WithPrice.symbol.endsWith(filterPair1) &&
            pair3WithPrice.symbol.startsWith('USDT')
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
            pair1WithPrice.symbol.endsWith('USDT') &&
            pair2WithPrice.symbol.startsWith(filterPair1) &&
            pair3WithPrice.symbol.endsWith('USDT')
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
            pair1WithPrice.symbol.endsWith('USDT') &&
            pair2WithPrice.symbol.startsWith(filterPair1) &&
            pair3WithPrice.symbol.startsWith('USDT')
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
            pair1WithPrice.symbol.startsWith('USDT') &&
            pair2WithPrice.symbol.endsWith(filterPair1) &&
            pair3WithPrice.symbol.endsWith('USDT')
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
            pair1WithPrice.symbol.startsWith('USDT') &&
            pair2WithPrice.symbol.endsWith(filterPair1) &&
            pair3WithPrice.symbol.startsWith('USDT')
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
            pair1WithPrice.symbol.startsWith('USDT') &&
            pair2WithPrice.symbol.startsWith(filterPair1) &&
            pair3WithPrice.symbol.endsWith('USDT')
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
            pair1WithPrice.symbol.startsWith('USDT') &&
            pair2WithPrice.symbol.startsWith(filterPair1) &&
            pair3WithPrice.symbol.startsWith('USDT')
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

          return result;
        })
      )
      .catch(({ message }) => {
        Notify.failure(message as string, notifyApiOptions);
      });
  },
};
