export type AnyFunction = (...args: any[]) => any;

export interface Currencies {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
}

export interface ArbitrageWorkerResult {
  currencies: Array<Currencies | undefined>;
  result: Array<Result>;
}

export interface ArbitrageData {
  symbols: Array<{ status: string; symbol: string }>;
  allCurrencies: Array<Currencies>;
}

export interface Result {
  pair1: string;
  price1: number;
  pair2: string;
  price2: number;
  pair3: string | number;
  price3: number;
  result: number;
}

export interface Exchanges {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

export interface MarketsTime {
  [coinId: string]: '24' | '72' | '168';
}

export interface GlobalData {
  active_cryptocurrencies: number;
  total_market_cap: {
    usd: number;
  };
  total_volume: {
    usd: number;
  };
  market_cap_change_percentage_24h_usd: number;
}

export interface SelectedCoinMarketChart {
  prices: Array<number>;
  market_caps: Array<number>;
  total_volumes: Array<number>;
}

export interface Markets {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  sparkline_in_7d: { price: Array<number> };
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export interface SelectedCoin {
  id: string;
  symbol: string;
  name: string;
  description: string;
  image: string;
  homepage: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export interface CoinByQuery {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export interface SelectedExchange {
  id: string;
  country: string;
  description: string;
  image: string;
  name: string;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  url: string;
  year_established: number;
}

export interface ExchangeByQuery {
  id: string;
  large: string;
  market_type: string;
  name: string;
  thumb: string;
}

export interface Pairs {
  symbol: string;
  ask: string;
  bid: string;
}

export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
}

export interface Article {
  _id: string;
  headline: { main: string };
  snippet: string;
  lead_paragraph: string;
  news_desk: string;
  web_url: string;
  pub_date: string;
  byline: { original: string };
  multimedia: Array<{ url: string }>;
}

export interface ArbitrageResult {
  price1: number;
  price2: number;
  price3: number;
  result: number;
}

export interface CoinSearchForm {
  api_symbol: string;
  component: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
}

export interface ExchangeSearchForm {
  component: string;
  id: string;
  large: string;
  market_type: string;
  name: string;
  thumb: string;
}
