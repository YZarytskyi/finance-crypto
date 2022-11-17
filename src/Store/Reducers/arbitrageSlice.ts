import { arbitrageApi } from "../../API/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Currencies, Pairs, Result } from "../../Types/Types";

interface InitialState {
  currencies: Array<Currencies>;
  isLoadingCurrencies: boolean;
  result: Array<Result>;
  pairs: Array<Pairs>;
  isLoadingPairs: boolean;
  pair1: string | null;
  pair2: string | null;
  pair3: string | null;
}

const initialState: InitialState = {
  currencies: [],
  isLoadingCurrencies: false,
  result: [],
  pairs: [],
  isLoadingPairs: false,
  pair1: null,
  pair2: null,
  pair3: null,
}

interface FetchCurrencies {
  currencies: Array<Currencies>;
  result: Array<Result>;
}
export const fetchCurrencies = createAsyncThunk(
  'currencies/fetch',
  async () => {
    return (await arbitrageApi.getAllCurrencies()) as FetchCurrencies
  }
)
export const fetchPairs = createAsyncThunk(
  'pairs/fetch',
  async (pairs: {pair1: string, pair2: string, pair3: string}) => {
    return (await arbitrageApi.getPairs(pairs.pair1, pairs.pair2, pairs.pair3)) as Array<Pairs>;
  }
)


export const arbitrageSlice = createSlice({
  name: 'arbitrage',
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
    removePairs(state) {
      state.pairs = [];
      state.pair1 = null;
      state.pair2 = null;
      state.pair3 = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoadingCurrencies = true
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload.currencies
      state.result = action.payload.result
      state.isLoadingCurrencies = false
      })

    builder.addCase(fetchPairs.pending, (state) => {
      state.isLoadingPairs = true
      })
      .addCase(fetchPairs.fulfilled, (state, action) => {
        state.pairs = action.payload
        state.isLoadingPairs = false
      })
  }
})

export const { setPair1, setPair2, setPair3, removePairs } = arbitrageSlice.actions

export default arbitrageSlice.reducer