import { cryptoApi } from "../../API/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Currencies, Exchanges, GlobalData, Markets, MarketsTime, Pairs, SelectedCoinMarketChart } from "../../Types/Types";

const initialState: InitialState = {
  currencies: [],
  markets: [],
  isLoadingCrypto: false,
  marketsTime: {},
  globalData: {},
  selectedCoinMarketChart: {},
  exchanges: [],
  pairs: [],
  pair1: '',
  pair2: '',
  pair3: '',
  coinDescription: '',
}

interface InitialState {
  currencies: Array<Currencies>;
  markets: Array<Markets>;
  isLoadingCrypto: boolean;
  marketsTime: MarketsTime;
  globalData: Partial<GlobalData>;
  selectedCoinMarketChart: Partial<SelectedCoinMarketChart>;
  exchanges: Array<Exchanges>;
  pairs: Array<Pairs>;
  pair1: string;
  pair2: string;
  pair3: string;
  coinDescription: string;
}

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetch',
  async () => {
    return (await cryptoApi.getAllCurrencies()) as Array<Currencies>
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
  async () => {
    return (await cryptoApi.getMarkets()) as Array<Markets>;
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
  async () => {
    return (await cryptoApi.getExchanges()) as Array<Exchanges>
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
      state.coinDescription = ''
    },
    removeMarketChart(state) {
      state.selectedCoinMarketChart = {}
    },
    removePairs(state) {
      state.pairs = [];
      state.pair1 = '';
      state.pair2 = '';
      state.pair3 = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoadingCrypto = true
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload
      state.isLoadingCrypto = false
      })

    builder.addCase(fetchPairs.fulfilled, (state, action) => {
      state.pairs = action.payload
    })

    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
      state.isLoadingCrypto = false;
      })
      .addCase(fetchMarkets.pending, (state) => {
        state.isLoadingCrypto = true;
      })

    builder.addCase(fetchCoinDescription.fulfilled, (state, action) => {
      state.coinDescription = action.payload
    })

    builder.addCase(fetchSelectedCoinMarketChart.fulfilled, (state, action) => {
      state.selectedCoinMarketChart = action.payload
    })

    builder.addCase(fetchExchanges.fulfilled, (state, action) => {
      state.exchanges = action.payload
    })

    builder.addCase(fetchGlobalData.fulfilled, (state, action) => {
      state.globalData = action.payload
    })
  }
})

export const { setPair1, setPair2, setPair3, setMarketsTime, setDefaultMarketsTime,
  removeCoinDescription, removeMarketChart, removePairs} = cryptoSlice.actions

export default cryptoSlice.reducer