import { converterApi } from '../../api/converterApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface InitialState {
  coinsList: Array<string>
  price: number | null
  isLoadingConverter: boolean
}

const initialState: InitialState = {
  coinsList: [],
  price: null,
  isLoadingConverter: false,
}

export const fetchCoinsList = createAsyncThunk('coinsList/fetch', async () => {
  return (await converterApi.getCoinsList()) as Array<string>
})

export const fetchPrice = createAsyncThunk('price/fetch', async (coinId: string) => {
  return (await converterApi.getSelectedCoin(coinId)) as number
})

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    removePrice(state) {
      state.price = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinsList.fulfilled, (state, action) => {
      state.coinsList = action.payload
    })
    builder
      .addCase(fetchPrice.pending, (state) => {
        state.isLoadingConverter = true
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        state.price = action.payload
        state.isLoadingConverter = false
      })
  },
})

export const { removePrice } = converterSlice.actions

export default converterSlice.reducer
