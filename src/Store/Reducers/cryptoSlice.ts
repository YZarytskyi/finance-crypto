import { cryptoApi } from "../../API/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Currencies, Exchanges, GlobalData, Markets, MarketsTime, Pairs, Result, SelectedCoinMarketChart } from "../../Types/Types";

const initialState: InitialState = {
  currencies: [],
  result: [],
  markets: [],
  isLoadingCrypto: false,
  marketsTime: {},
  globalData: {},
  selectedCoinMarketChart: {},
  exchanges: [],
  pairs: [],
  isLoadingPairs: false,
  pair1: null,
  pair2: null,
  pair3: null,
  coinDescription: null,
}

interface InitialState {
  currencies: Array<Currencies>;
  result: Array<Result>;
  markets: Array<Markets>;
  isLoadingCrypto: boolean;
  marketsTime: MarketsTime;
  globalData: Partial<GlobalData>;
  selectedCoinMarketChart: Partial<SelectedCoinMarketChart>;
  exchanges: Array<Exchanges>;
  pairs: Array<Pairs>;
  isLoadingPairs: boolean;
  pair1: string | null;
  pair2: string | null;
  pair3: string | null;
  coinDescription: string | null;
}

interface FetchCurrencies {
  currencies: Array<Currencies>;
  result: Array<Result>;
}
export const fetchCurrencies = createAsyncThunk(
  'currencies/fetch',
  async () => {
    console.log(await cryptoApi.getAllCurrencies());
    return (await cryptoApi.getAllCurrencies()) as FetchCurrencies
  }
)
export const fetchPairs = createAsyncThunk(
  'pairs/fetch',
  async (pairs: {pair1: string, pair2: string, pair3: string}) => {
    return (await cryptoApi.getPairs(pairs.pair1, pairs.pair2, pairs.pair3)) as Array<Pairs>;
  }
)
export const fetchMarkets = createAsyncThunk(
  'markets/fetch',
  async (page?: number) => {
    return (await cryptoApi.getMarkets(page)) as Array<Markets>;
  }
)
export const fetchCoinDescription = createAsyncThunk(
  'coinDescription/fetch',
  async (coinId: string | undefined) => {
    return (await cryptoApi.getCoinsDescription(coinId)) as string
  }
)
export const fetchSelectedCoinMarketChart = createAsyncThunk(
  'marketChart/fetch',
  async ([coinId, days]: [coinId: string | undefined, days: (number | 'max')] ) => {
    return (await cryptoApi.getSelectedCoinMarketChart(coinId, days)) as SelectedCoinMarketChart
  }
)
export const fetchExchanges = createAsyncThunk(
  'exchanges/fetch',
  async (page: number) => {
    return (await cryptoApi.getExchanges(page)) as Array<Exchanges>
  }
)
export const fetchGlobalData = createAsyncThunk(
  'globalData/fetch',
  async () => {
    return (await cryptoApi.getGlobalData()) as GlobalData
  }
)

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setPair1(state, action) {
      state.pair1 = action.payload
    },
    setPair2(state, action) {
      state.pair2 = action.payload
    },
    setPair3(state, action) {
      state.pair3 = action.payload
    },
    setMarketsTime(state, action) {
      state.marketsTime = {...state.marketsTime, ...action.payload}
    },
    setDefaultMarketsTime(state) {
      state.marketsTime = {}
    },
    removeCoinDescription(state) {
      state.coinDescription = null;
    },
    removeMarketChart(state) {
      state.selectedCoinMarketChart = {}
    },
    removePairs(state) {
      state.pairs = [];
      state.pair1 = null;
      state.pair2 = null;
      state.pair3 = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoadingCrypto = true
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload.currencies
      state.result = action.payload.result
      state.isLoadingCrypto = false
      })

    builder.addCase(fetchPairs.pending, (state, action) => {
      state.isLoadingPairs = true
      })
      .addCase(fetchPairs.fulfilled, (state, action) => {
        state.pairs = action.payload
        state.isLoadingPairs = false
      })

    builder.addCase(fetchMarkets.pending, (state) => {
      state.isLoadingCrypto = true;
      })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
      state.isLoadingCrypto = false;
      })

    builder.addCase(fetchCoinDescription.fulfilled, (state, action) => {
      state.coinDescription = action.payload
    })

    builder.addCase(fetchSelectedCoinMarketChart.fulfilled, (state, action) => {
      state.selectedCoinMarketChart = action.payload
    })

    builder.addCase(fetchExchanges.pending, (state, action) => {
      state.isLoadingCrypto = true
      })
      .addCase(fetchExchanges.fulfilled, (state, action) => {
      state.exchanges = action.payload
      state.isLoadingCrypto = false
      })

    builder.addCase(fetchGlobalData.fulfilled, (state, action) => {
      state.globalData = action.payload
    })
  }
})

export const { setPair1, setPair2, setPair3, setMarketsTime, setDefaultMarketsTime,
  removeCoinDescription, removeMarketChart, removePairs} = cryptoSlice.actions

export default cryptoSlice.reducer