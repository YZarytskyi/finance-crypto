import axios from "axios";
import { Currencies } from "../Types/Types";


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
          console.log(result);
          return result.map((x: { symbol: string }) => {
            const filterPrice = response2.data.find(
              (y: Currencies) => y.symbol === x.symbol
            );
            return filterPrice;
          });
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
  getMarkets() {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      )
      .then((res) => res.data)
      .catch((error) => {
        alert(error);
      });
  },
  getSelectedCoinMarketChart(coinId: string | undefined, days: number | "max") {
    return axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((res) => res.data)
      .catch((error) => {
        alert(error);
      });
  },
  getCoinsDescription(coinId: string | undefined) {
    return axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => res.data.description.en)
      .catch((error) => {
        alert(error);
      });
  },
  getExchanges() {
    return axios
      .get("https://api.coingecko.com/api/v3/exchanges")
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
