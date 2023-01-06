import axios from 'axios';
import { Notify } from 'notiflix';
import { ArbitrageResult, Currencies } from '../types/Types';
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
          return {
            symbols: response1.data.symbols,
            allCurrencies: response2.data,
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
