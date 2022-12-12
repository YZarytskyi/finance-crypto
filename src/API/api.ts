import { CoinByQuery, Currencies } from "../Types/Types";
import axios from "axios";
import { INotifyOptions, Notify } from "notiflix/build/notiflix-notify-aio";

interface getAllCurrenciesResult {
  symbol: string;
}

export const notifyOptions: INotifyOptions = {
  width: '280px',
  position: 'right-bottom',
  timeout: 2500,
  showOnlyTheLastOne: true,
  clickToClose: true,
  zindex: 4001,
  }

export const cryptoApi = {
  async getMarketsHome() {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple%2C%20dogecoin%2C%20cardano%2C%20polkadot&order=market_cap_desc&per_page=6&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      return data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },

  async getMarkets(page: number, arrId?: string[]) {

    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`, {params: arrId && {ids: arrId.join(',')}}
      );
      return data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },
  
  async getExchanges(page: number, id?: string) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${page}`, {params: id && {id: id}}
      );
      return data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },

  async getExchangesList(id?: string) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges/${id ? id : 'list'}`,
      );
      return id ? {id, ...data} : data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },

  async getCoinsByQuery(query: string) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      if (!data.coins.length) {
        Notify.failure('Coins not found', notifyOptions);
        return;
      }
      const arrId = data.coins.map((coin: CoinByQuery) => {
        return coin.id
      });
      return this.getMarkets(1, arrId)
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },
  
  async getSelectedCoinMarketChart(
    coinId: string | undefined,
    days: number | "max"
  ) {
    if (typeof coinId === "string") {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        );
        return data;
      } catch ({ message }) {
        Notify.failure(message as string, notifyOptions);
      }
    }
  },
  async getCoinsDescription(coinId: string | undefined) {
    if (typeof coinId === "string") {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`
        );
        return data.description.en;
      } catch ({ message }) {
        Notify.failure(message as string, notifyOptions);
      }
    }
  },
  async getGlobalData() {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/global"
      );
      return data.data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },
};

export const arbitrageApi = {
  getAllCurrencies() {
    return axios
      .all([
        axios.get("https://api.binance.com/api/v3/exchangeInfo"),
        axios.get("https://api.binance.com/api/v3/ticker/bookTicker"),
      ])
      .then(
        axios.spread((response1, response2) => {
          const result: Array<getAllCurrenciesResult> = response1.data.symbols
            .filter(
              (item: { status: string; symbol: string }) =>
                item.status === "TRADING"
            )
            .map((x: { status: string; symbol: string }) => ({
              symbol: x.symbol,
            }));

          const currencies: Array<Currencies> = result.map((x) => {
            const filterPrice: Currencies = response2.data.find(
              (y: Currencies) => y.symbol === x.symbol
            );
            return filterPrice;
          });

          const currenciesUSDT = currencies.filter((q) =>
            q.symbol.includes("USDT")
          );

          const map1 = currenciesUSDT.map(
            ({ symbol: pair1Symbol, askPrice, bidPrice }) => {
              const pair1AskPrice = Number(askPrice);
              const pair1BidPrice = Number(bidPrice);

              const filterPair1 = pair1Symbol.replace(/USDT/, "");
              const pair2 = currencies.filter((y) =>
                y.symbol.includes(filterPair1)
              );
              const map2 = pair2.map(
                ({ symbol: pair2Symbol, askPrice, bidPrice }) => {
                  const pair2AskPrice = Number(askPrice);
                  const pair2BidPrice = Number(bidPrice);

                  const regexp = new RegExp(filterPair1);
                  const filterPair2 = pair2Symbol.replace(regexp, "");
                  const pair3 = currencies.filter(
                    ({ symbol }) =>
                      symbol.includes(`${filterPair2}USDT`) ||
                      symbol.includes(`USDT${filterPair2}`) ||
                      ""
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
        Notify.failure(message as string, notifyOptions);
      });
  },
  getPairs(value1: string, value2: string, value3: string) {
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
          return [
            {
              symbol: value1,
              ask: pair1.data.asks.flat()[0],
              bid: pair1.data.bids.flat()[0],
            },
            {
              symbol: value2,
              ask: pair2.data.asks.flat()[0],
              bid: pair2.data.bids.flat()[0],
            },
            {
              symbol: value3,
              ask: pair3.data.asks.flat()[0],
              bid: pair3.data.bids.flat()[0],
            },
          ];
        })
      )
      .catch(({ message }) => {
        Notify.failure(message as string, notifyOptions);
      });
  },
};

export const articlesApi = {
  async getArticles(page: number = 0) {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crypto&page=${page}&api-key=mScVMtCvTO7fBzSIQmgG1N6TAs3IXnic`
      );
      return data.response;
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },
};

interface Coin {
  status: string;
  symbol: string;
}

export const converterApi = {
  async getCoinsList() {
    try {
      const { data } = await axios.get(
        "https://api.binance.com/api/v1/exchangeInfo"
      );
      return data.symbols
        .filter(
          (coin: Coin) =>
            coin.status === "TRADING" && coin.symbol.endsWith("USDT")
        )
        .map((coin: Coin) => {
          return coin.symbol;
        });
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },
  async getSelectedCoin(coinId: string) {
    try {
      const { data } = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${coinId}`
      );
      return Number(data.price);
    } catch ({ message }) {
      Notify.failure(message as string, notifyOptions);
    }
  },
};
