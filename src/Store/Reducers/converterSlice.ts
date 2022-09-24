import { converterApi } from "../../API/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface InitialState {
  coinsList: Array<string>,
  price: number | null,
}

const initialState: InitialState = {
  coinsList: [],
  price: null,
}

export const fetchCoinsList = createAsyncThunk(
  "coinsList/fetch",
  async () => {
    return (await converterApi.getCoinsList()) as Array<string>
  }
)

export const fetchPrice = createAsyncThunk(
  'price/fetch',
  async (coinId: string) => {
    return (await converterApi.getSelectedCoin(coinId)) as number
  }
)

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoinsList.fulfilled, (state, action) => {
      state.coinsList = action.payload;
    })
    builder.addCase(fetchPrice.fulfilled, (state, action) => {
      state.price = action.payload
    })
  },
})

export default converterSlice.reducer