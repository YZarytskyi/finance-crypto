import { Currencies } from "../Types/Types";
import axios from "axios";

interface getAllCurrenciesResult {
  symbol: string;
}

export const cryptoApi = {
  getMarkets(page: number = 1) {
    return axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
  getSelectedCoinMarketChart(coinId: string | undefined, days: number | "max") {
    if (typeof coinId === "string")
      return axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        )
        .then((res) => res.data)
        .catch((error) => console.log(error));
  },
  getCoinsDescription(coinId: string | undefined) {
    if (typeof coinId === "string")
      return axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`
        )
        .then((res) => res.data.description.en)
        .catch((error) => console.log(error));
  },
  getExchanges(page: number) {
    return axios
      .get(
        `https://api.coingecko.com/api/v3/exchanges?per_page=15&page=${page}`
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
  getGlobalData() {
    return axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => res.data.data)
      .catch((error) => console.log(error));
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
          const result: Array<getAllCurrenciesResult> = (response1 =
            response1.data.symbols
              .filter(
                (item: { status: string; symbol: string }) =>
                  item.status === "TRADING"
              )
              .map((x: { status: string; symbol: string }) => ({
                symbol: x.symbol,
              })));
          const currencies: Array<Currencies> = result.map((x) => {
            const filterPrice: Currencies = response2.data.find(
              (y: Currencies) => y.symbol === x.symbol
            );
            return filterPrice;
          });

          let currenciesUsdt = currencies.filter(
            (q) => q.symbol.includes("USDT") && !q.symbol.includes("EURUSDT")
          );
          let map1 = currenciesUsdt.map((x) => {
            let filterPair1 = x.symbol.replace(/USDT/, "");
            let pair2 = currencies.filter((y) =>
              y.symbol.includes(filterPair1)
            );
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
                let result = 0;
                if (
                  x.symbol === `${filterPair1}USDT` &&
                  w.symbol === `${filterPair2}${filterPair1}` &&
                  q.symbol === `${filterPair2}USDT`
                ) {
                  result =
                    (100 / +x.askPrice / +w.askPrice) * +q.bidPrice - 100;
                }
                if (
                  x.symbol === `${filterPair1}USDT` &&
                  w.symbol === `${filterPair2}${filterPair1}` &&
                  q.symbol === `USDT${filterPair2}`
                ) {
                  result = 100 / +x.askPrice / +w.askPrice / +q.askPrice - 100;
                }
                if (
                  x.symbol === `${filterPair1}USDT` &&
                  w.symbol === `${filterPair1}${filterPair2}` &&
                  q.symbol === `${filterPair2}USDT`
                ) {
                  result =
                    (100 / +x.askPrice) * +w.bidPrice * +q.bidPrice - 100;
                }
                if (
                  x.symbol === `${filterPair1}USDT` &&
                  w.symbol === `${filterPair1}${filterPair2}` &&
                  q.symbol === `USDT${filterPair2}`
                ) {
                  result =
                    ((100 / +x.askPrice) * +w.bidPrice) / +q.askPrice - 100;
                }
                if (
                  x.symbol === `USDT${filterPair1}` &&
                  w.symbol === `${filterPair2}${filterPair1}` &&
                  q.symbol === `${filterPair2}USDT`
                ) {
                  result =
                    ((100 * +x.bidPrice) / +w.askPrice) * +q.bidPrice - 100;
                }
                if (
                  x.symbol === `USDT${filterPair1}` &&
                  w.symbol === `${filterPair2}${filterPair1}` &&
                  q.symbol === `USDT${filterPair2}`
                ) {
                  result =
                    (100 * +x.bidPrice) / +w.askPrice / +q.askPrice - 100;
                }
                if (
                  x.symbol === `USDT${filterPair1}` &&
                  w.symbol === `${filterPair1}${filterPair2}` &&
                  q.symbol === `${filterPair2}USDT`
                ) {
                  result = 100 * +x.bidPrice * +w.bidPrice * +q.bidPrice - 100;
                }
                if (
                  x.symbol === `USDT${filterPair1}` &&
                  w.symbol === `${filterPair1}${filterPair2}` &&
                  q.symbol === `USDT${filterPair2}`
                ) {
                  result =
                    (100 * +x.bidPrice * +w.bidPrice) / +q.askPrice - 100;
                }
                return {
                  pair1: x.symbol,
                  price1: x.askPrice,
                  pair2: w.symbol,
                  price2: w.askPrice,
                  pair3: q.symbol ? q.symbol : "",
                  price3: q.askPrice ? q.askPrice : "",
                  result: +result.toFixed(2),
                };
              });
              return map3;
            });
            return map2;
          });
          const result1 = map1
            .flat(3)
            .filter((x) => +x.result > 0)
            .sort((a, b) => b.result - a.result);
          return {
            currencies,
            result: result1,
          };
        })
      )
      .catch((error) => console.log(error));
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
      .catch((error) => console.log(error));
  },
};

export const articlesApi = {
  getArticles() {
    return axios
      .get(
        `https://newsapi.org/v2/everything?language=en&excludeDomains=.ru&q=crypto OR taxes OR "Federal Reserve Board" OR finance&searchIn=title&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`
      )
      .then((res) => res.data.articles)
      .catch((error) => console.log(error));
  },
};

interface Coin {
  status: string;
  symbol: string;
}

export const converterApi = {
  getCoinsList() {
    return axios
      .get("https://api.binance.com/api/v1/exchangeInfo")
      .then((res) => {
        const coinsList = res.data.symbols
          .filter(
            (coin: Coin) =>
              coin.status === "TRADING" && coin.symbol.endsWith("USDT")
          )
          .map((coin: Coin) => {
            return coin.symbol;
          });
        return coinsList;
      })
      .catch((error) => console.log(error));
  },
  getSelectedCoin(coinId: string) {
    return axios
      .get(`https://api.binance.com/api/v3/ticker/price?symbol=${coinId}`)
      .then((res) => +res.data.price)
      .catch((error) => console.log(error));
  },
};
