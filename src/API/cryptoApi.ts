import { ExchangeSearchForm } from '../types/Types';
import axios from 'axios';
import { Notify } from 'notiflix';
import { CoinByQuery, CoinSearchForm } from '../types/Types';
import { notifyApiOptions } from '../utils/notify';


export const cryptoApi = {
  async getMarketsHome() {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple%2C%20dogecoin%2C%20cardano%2C%20polkadot&order=market_cap_desc&per_page=6&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      return data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  async getMarkets(page: number, arrId?: string[]) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
        { params: arrId && { ids: arrId.join(',') } }
      );
      return data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  async getExchanges(page: number, id?: string) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${page}`,
        { params: id && { id: id } }
      );
      return data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  async getExchangesList(id?: string) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges/${id ? id : 'list'}`
      );
      return id ? { id, ...data } : data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  // async getExchangeById(id: string) {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.coingecko.com/api/v3/exchanges/${id}`,
  //     );
  //     return data;
  //   } catch ({ message }) {
  //     Notify.failure(message as string, notifyApiOptions);
  //   }
  // },

  async getCoinsByQuery(query: string) {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      if (!data.coins.length) {
        Notify.failure('Coins not found', notifyApiOptions);
        return;
      }
      const arrId = data.coins.map((coin: CoinByQuery) => {
        return coin.id;
      });
      return this.getMarkets(1, arrId);
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  async getCoinsById(id: string | string[]) {
    id = typeof id === 'string' ? id : id.join(',');
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?market_data=true&vs_currency=usd&localization=false&tickers=false`
      );
      return {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        description: data.description.en,
        image: data.image.large,
        homepage: data.links.homepage[0] || '',
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
        market_cap_rank: data.market_cap_rank,
        fully_diluted_valuation: data.market_data.fully_diluted_valuation.usd,
        total_volume: data.market_data.total_volume.usd,
        high_24h: data.market_data.high_24h.usd,
        low_24h: data.market_data.low_24h.usd,
        price_change_24h: data.market_data.price_change_24h.usd,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
        market_cap_change_24h: data.market_data.market_cap_change_24h,
        market_cap_change_percentage_24h:
          data.market_data.market_cap_change_percentage_24h,
        circulating_supply: data.market_data.circulating_supply,
        total_supply: data.market_data.total_supply,
        max_supply: data.market_data.max_supply,
        price_change_percentage_1h_in_currency:
          data.market_data.price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency:
          data.market_data.price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency:
          data.market_data.price_change_percentage_7d_in_currency,
      };
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  async getSearchDataByQuery(query: string = '') {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      if (!data.coins.length && !data.exchanges.length) {
        return { coins: [], exchanges: [] };
      }
      const coins: CoinSearchForm[] = data.coins.slice(0, 5);
      const exchanges: ExchangeSearchForm[] = data.exchanges.slice(0, 5);
      return { coins, exchanges };
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },

  async getSelectedCoinMarketChart(
    coinId: string | undefined,
    days: number | 'max'
  ) {
    if (typeof coinId === 'string') {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        );
        return data;
      } catch ({ message }) {
        Notify.failure(message as string, notifyApiOptions);
      }
    }
  },
  async getCoinsDescription(coinId: string | undefined) {
    if (typeof coinId === 'string') {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`
        );
        return data.description.en;
      } catch ({ message }) {
        Notify.failure(message as string, notifyApiOptions);
      }
    }
  },
  async getGlobalData() {
    try {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/global'
      );
      return data.data;
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },
};
