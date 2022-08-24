import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.binance.com/",
});

export const cryptoApi = {

  getAllCurrencies() {
    return instance
      .get("api/v3/exchangeInfo")
      .then(res => res.data.symbols)
      .catch((error) => {
        alert(error)
      })
  },

  getPairs(value1, value2, value3) {
    return( 
      axios.all([axios.get(`https://api.binance.com/api/v1/depth?symbol=${value1}&limit=1`),
                 axios.get(`https://api.binance.com/api/v1/depth?symbol=${value2}&limit=1`),
                 axios.get(`https://api.binance.com/api/v1/depth?symbol=${value3}&limit=1`)])
           .then(axios.spread((pair1, pair2, pair3) => {
           return [{symbol: value1, ask: pair1.data.asks.flat()[0], bid: pair1.data.bids.flat()[0]}, {symbol: value2,ask: pair2.data.asks.flat()[0], bid: pair2.data.bids.flat()[0]}, {symbol: value3, ask: pair3.data.asks.flat()[0], bid: pair3.data.bids.flat()[0]}]
           }))
           .catch(error => alert(error))
    )
   },
  getPrice() {
    return instance
      .get("api/v3/ticker/price")
      .then(res => res.data)
      .catch((error) => {alert(error)})
  },
  
  getMarkets() {
    return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(res => res.data)
    .catch((error) => {
      alert(error)
    })
  }
};

export const articlesApi = {
  getArticles() {
    return axios.get(`https://newsapi.org/v2/everything?language=en&excludeDomains=.ru&q=cryptocurrency OR taxes OR "Federal Reserve Board" OR finance&searchIn=title&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`)
    .then(res => res.data.articles)
    .catch((error) => {
      alert(error)
    })
  }
}