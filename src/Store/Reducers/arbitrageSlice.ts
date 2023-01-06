import { arbitrageApi } from "api/arbitrageApi";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ArbitrageResult, Currencies, Result } from "../../types/Types";

interface InitialState {
  currencies: Array<Currencies>;
  isLoadingPairs: boolean;
  pair1: string;
  pair2: string;
  pair3: string;
  arbitrageResult: Partial<ArbitrageResult>;
}

const initialState: InitialState = {
  currencies: [],
  isLoadingPairs: false,
  pair1: '',
  pair2: '',
  pair3: '',
  arbitrageResult: {},
}

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
    setCurrencies(state, action) {
      state.currencies = action.payload
    },
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
    builder.addCase(fetchArbitrageResult.pending, (state) => {
      state.isLoadingPairs = true
      })
      .addCase(fetchArbitrageResult.fulfilled, (state, action) => {
        state.arbitrageResult = action.payload
        state.isLoadingPairs = false
      })
  }
})

export const { setCurrencies, setPair1, setPair2, setPair3, removePairs } = arbitrageSlice.actions

export default arbitrageSlice.reducer