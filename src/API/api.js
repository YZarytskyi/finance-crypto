import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.binance.com/",
});

export const cryptoApi = {

  getAllCurrencies() {
    return instance
      .get("api/v3/exchangeInfo")
      .then(res => res.data.symbols)
      .catch((err) => {
        alert("Something went wrong! ", err)
      })
  },
  getPairs(value1, value2, value3) {
    return( 
      axios.all([axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${value1}`),
                 axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${value2}`),
                 axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${value3}`)])
           .then(axios.spread((pair1, pair2, pair3) => {
           return [pair1.data.price, pair2.data.price, pair3.data.price]
           }))
           .catch(error => alert(error))
   )
   },
}