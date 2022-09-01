import { cryptoApi } from "../../API/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchAll',
  async () => {
    let response = await cryptoApi.getAllCurrencies()
    response = response.filter((item) => item.status === "TRADING");
    response = response.map(x => ({symbol: x.symbol}))
    let response2 = await cryptoApi.getPrice()
    return response.map(x => {
       const filterPrice = response2.find(y => y.symbol === x.symbol)
       return filterPrice
    })
  }
)

export const fetchPairs = createAsyncThunk(
  'pairs/fetch',
  async (pairs) => {
    return await cryptoApi.getPairs(pairs.pair1, pairs.pair2, pairs.pair3);
  }
)

export const fetchMarkets = createAsyncThunk(
  'markets/fetch',
  async () => {
    return await cryptoApi.getMarkets();
  }
)

export const fetchCoinDescription = createAsyncThunk(
  'coinDescrtiption/fetch',
  async (coinId) => {
    return await cryptoApi.getCoinsDescription(coinId)
  }
)

export const fetchMarketChart = createAsyncThunk(
  'marketChart/fetch',
  async ([coinId, days]) => {
    return await cryptoApi.getMarketChart(coinId, days)
  }
)

export const fetchExchanges = createAsyncThunk(
  'exchanges/fetch',
  async () => {
    return await cryptoApi.getExchanges()
  }
)

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    currencies: [],
    markets: [],
    isLoading: false,
    marketsTime: {},
    coinInfo: null,
    marketChart: [],
    exchanges: [],
    pairs: [],
    pair1: null,
    pair2: null,
    pair3: null,
    coinDescription: "",
  },
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
    setCoinInfo(state, action) {
      state.coinInfo = action.payload
    },
    removeMarketChart(state) {
      state.marketChart = []
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
      state.isLoading = true
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload
      state.isLoading = false
      })

    builder.addCase(fetchPairs.fulfilled, (state, action) => {
      state.pairs = action.payload
    })

    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
      state.isLoading = false;
      })
      .addCase(fetchMarkets.pending, (state) => {
        state.isLoading = true;
      })

    builder.addCase(fetchCoinDescription.fulfilled, (state, action) => {
      state.coinDescription = action.payload
    })

    builder.addCase(fetchMarketChart.fulfilled, (state, action) => {
      state.marketChart = action.payload
    })

    builder.addCase(fetchExchanges.fulfilled, (state, action) => {
      state.exchanges = action.payload
    })
  }
})

export const { setPair1, setPair2, setPair3, setMarketsTime, setDefaultMarketsTime,
  removeCoinDescription, setCoinInfo, removeMarketChart, removePairs} = cryptoSlice.actions

export default cryptoSlice.reducer