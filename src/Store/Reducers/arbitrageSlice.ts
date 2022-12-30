import { arbitrageApi } from "api/arbitrageApi";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ArbitrageResult, Currencies, Result } from "../../types/Types";

interface InitialState {
  currencies: Array<Currencies>;
  isLoadingCurrencies: boolean;
  result: Array<Result>;
  isLoadingPairs: boolean;
  pair1: string;
  pair2: string;
  pair3: string;
  arbitrageResult: Partial<ArbitrageResult>;
}

const initialState: InitialState = {
  currencies: [],
  isLoadingCurrencies: false,
  result: [],
  isLoadingPairs: false,
  pair1: '',
  pair2: '',
  pair3: '',
  arbitrageResult: {},
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
export const fetchArbitrageResult = createAsyncThunk(
  'pairs/fetch',
  async (pairs: {pair1: string, pair2: string, pair3: string}) => {
    return (await arbitrageApi.getArbitrageResult(pairs.pair1, pairs.pair2, pairs.pair3)) as Result;
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
      state.arbitrageResult = {};
      state.pair1 = '';
      state.pair2 = '';
      state.pair3 = '';
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

    builder.addCase(fetchArbitrageResult.pending, (state) => {
      state.isLoadingPairs = true
      })
      .addCase(fetchArbitrageResult.fulfilled, (state, action) => {
        state.arbitrageResult = action.payload
        state.isLoadingPairs = false
      })
  }
})

export const { setPair1, setPair2, setPair3, removePairs } = arbitrageSlice.actions

export default arbitrageSlice.reducer