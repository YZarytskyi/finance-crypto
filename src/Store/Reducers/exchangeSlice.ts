import { cryptoApi } from "../../API/cryptoApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Exchanges, SelectedExchange } from "../../Types/Types";

const initialState: InitialState = {
  exchanges: [],
  exchangesList: [],
  selectedExchange: null,
  isLoadingExchanges: false,
};

interface InitialState {
  exchanges: Array<Exchanges>;
  exchangesList: Array<{ id: string; name: string }>;
  selectedExchange: SelectedExchange | null;
  isLoadingExchanges: boolean;
}

export const fetchExchanges = createAsyncThunk(
  "exchanges/fetch",
  async (page: number = 1) => {
    return (await cryptoApi.getExchanges(page)) as Array<Exchanges>;
  }
);
export const fetchExchangesList = createAsyncThunk(
  "exchangesList/fetch",
  async (query?: string) => {
    return (await cryptoApi.getExchangesList(query)) as Array<{
      id: string;
      name: string;
    }>;
  }
);
export const fetchExchangeById = createAsyncThunk(
  "exchangeById/fetch",
  async (id: string) => {
    return (await cryptoApi.getExchangesList(id)) as SelectedExchange;
  }
);

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    removeSelectedExchange(state) {
      state.selectedExchange = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchanges.pending, (state) => {
        state.isLoadingExchanges = true;
      })
      .addCase(fetchExchanges.fulfilled, (state, action) => {
        state.exchanges = action.payload;
        state.isLoadingExchanges = false;
      });

    builder.addCase(fetchExchangesList.fulfilled, (state, action) => {
      state.exchangesList = action.payload;
    });
    builder.addCase(fetchExchangeById.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.exchanges = action.payload;
      } else {
        state.selectedExchange = action.payload;
      }
    });
  },
});

export const { removeSelectedExchange } = exchangeSlice.actions;

export default exchangeSlice.reducer;
