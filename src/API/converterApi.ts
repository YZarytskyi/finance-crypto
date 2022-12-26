import { Notify } from 'notiflix';
import axios from 'axios';
import { notifyApiOptions } from '../utils/notify';

interface Coin {
  status: string;
  symbol: string;
}

export const converterApi = {
  async getCoinsList() {
    try {
      const { data } = await axios.get(
        'https://api.binance.com/api/v1/exchangeInfo'
      );
      return data.symbols
        .filter(
          (coin: Coin) =>
            coin.status === 'TRADING' && coin.symbol.endsWith('USDT')
        )
        .map((coin: Coin) => {
          return coin.symbol;
        });
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },
  async getSelectedCoin(coinId: string) {
    try {
      const { data } = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${coinId}`
      );
      return Number(data.price);
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },
};
