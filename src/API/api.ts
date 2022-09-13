import { Currencies } from './../Types/Types';
import axios from "axios";


interface getAllCurrenciesResult {
  symbol: string;
}

export const cryptoApi = {
  getAllCurrencies() {
    return axios
      .all([
        axios.get("https://api.binance.com/api/v3/exchangeInfo"),
        axios.get("https://api.binance.com/api/v3/ticker/bookTicker"),
      ])
      .then(
        axios.spread((response1, response2) => {
          const result: Array<getAllCurrenciesResult>  = (response1 = response1.data.symbols
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

          let currenciesUsdt = currencies.filter((q) => q.symbol.includes("USDT") && !q.symbol.includes("EURUSDT"));
          let map1 = currenciesUsdt.map((x) => {
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
                const result1 = formula < 4 && formula > -4
                    ? formula.toFixed(2)
                    : ((100 / +x.askPrice) * +w.bidPrice * +q.bidPrice - 100).toFixed(2);
                const result2 =
                  +result1 < 4 && +result1 > -4
                    ? result1
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
          });
          const result1 = map1.flat(3).filter((x) => +x.result > 0 && +x.result < 2);
          return ({
            currencies,
            result: result1,
          })
        })
      );
  },
  getPairs(value1: string, value2: string, value3: string) {
    return axios
      .all([axios.get(`https://api.binance.com/api/v1/depth?symbol=${value1}&limit=1`),
        axios.get(`https://api.binance.com/api/v1/depth?symbol=${value2}&limit=1`),
        axios.get(`https://api.binance.com/api/v1/depth?symbol=${value3}&limit=1`),
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
      .catch((error) => alert(error));
  },
  getMarkets(page: number = 1) {
    return axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => res.data)
      .catch((error) => {
        alert(error);
      });
  },
  getSelectedCoinMarketChart(coinId: string | undefined, days: number | "max") {
    if (typeof coinId === 'string') return axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((res) => res.data)
      .catch((error) => {
        alert(error);
      });
  },
  getCoinsDescription(coinId: string | undefined) {
    if (typeof coinId === 'string') return axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => res.data.description.en)
      .catch((error) => {
        alert(error);
      });
  },
  getExchanges(page: number) {
    return axios
      .get(`https://api.coingecko.com/api/v3/exchanges?per_page=15&page=${page}`)
      .then((res) => res.data)
      .catch((error) => {
        alert(error);
      });
  },
  getGlobalData() {
    return axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => res.data.data)
      .catch((error) => {
        alert(error);
      });
  },
};

export const articlesApi = {
  getArticles() {
    return axios
      .get(
        `https://newsapi.org/v2/everything?language=en&excludeDomains=.ru&q=cryptocurrency OR taxes OR "Federal Reserve Board" OR finance&searchIn=title&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`
      )
      .then((res) => res.data.articles)
      .catch((error) => {
        alert(error);
      });
  },
};
