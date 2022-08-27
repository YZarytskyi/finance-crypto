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
  'CoinDescrtiption/fetch',
  async (coinId) => {
    return await cryptoApi.getCoinsDescription(coinId)
  }
)

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    currencies: [],
    markets: [],
    isLoading: false,
    coinDescription: "",
    marketsTime: {},
    coinInfo: null,
    pairs: [],
    pair1: null,
    pair2: null,
    pair3: null,
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload
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
  }
})

export const { setPair1, setPair2, setPair3, setMarketsTime, setDefaultMarketsTime,
  removeCoinDescription, setCoinInfo} = cryptoSlice.actions

export default cryptoSlice.reducer