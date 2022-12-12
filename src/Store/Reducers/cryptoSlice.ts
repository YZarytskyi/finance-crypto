import { cryptoApi } from "../../API/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Exchanges,
  GlobalData,
  Markets,
  MarketsTime,
  SelectedCoinMarketChart,
} from "../../Types/Types";

const initialState: InitialState = {
  marketsHome: [],
  markets: [],
  isLoadingCrypto: false,
  marketsTime: {},
  globalData: {},
  selectedCoinMarketChart: {},
  exchanges: [],
  exchangesList: [],
  isLoadingExchangesList: false,
  coinDescription: null,
};

interface InitialState {
  marketsHome: Array<Markets>;
  markets: Array<Markets>;
  isLoadingCrypto: boolean;
  marketsTime: MarketsTime;
  globalData: Partial<GlobalData>;
  selectedCoinMarketChart: Partial<SelectedCoinMarketChart>;
  isLoadingExchangesList: boolean,
  exchanges: Array<Exchanges>;
  exchangesList: Array<{id: string, name: string}>;
  coinDescription: string | null;
}

export const fetchMarketsHome = createAsyncThunk(
  "marketsHome/fetch",
  async () => {
    return (await cryptoApi.getMarketsHome()) as Array<Markets>;
  }
);
export const fetchMarkets = createAsyncThunk(
  "markets/fetch",
  async (page: number = 1) => {
    return (await cryptoApi.getMarkets(page)) as Array<Markets>;
  }
);

export const fetchCoinsByQuery = createAsyncThunk(
  "coinsByQuery/fetch",
  async (query: string) => {
    return (await cryptoApi.getCoinsByQuery(query)) as
      | Array<Markets>
      | undefined;
  }
);
export const fetchCoinDescription = createAsyncThunk(
  "coinDescription/fetch",
  async (coinId: string | undefined) => {
    return (await cryptoApi.getCoinsDescription(coinId)) as string;
  }
);
export const fetchSelectedCoinMarketChart = createAsyncThunk(
  "marketChart/fetch",
  async ([coinId, days]: [
    coinId: string | undefined,
    days: number | "max"
  ]) => {
    return (await cryptoApi.getSelectedCoinMarketChart(
      coinId,
      days
    )) as SelectedCoinMarketChart;
  }
);
export const fetchExchanges = createAsyncThunk(
  "exchanges/fetch",
  async (page: number = 1) => {
    return (await cryptoApi.getExchanges(page)) as Array<Exchanges>;
  }
);
export const fetchExchangesList = createAsyncThunk(
  "exchangesList/fetch",
  async (query?: string) => {
    return (await cryptoApi.getExchangesList(query)) as Array<{id: string, name: string}>;
  }
);
export const fetchExchangeById = createAsyncThunk(
  "exchangeById/fetch",
  async (id?: string) => {
    return (await cryptoApi.getExchangesList(id)) as Exchanges;
  }
);
export const fetchGlobalData = createAsyncThunk(
  "globalData/fetch",
  async () => {
    return (await cryptoApi.getGlobalData()) as GlobalData;
  }
);

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setMarketsTime(state, action) {
      state.marketsTime = { ...state.marketsTime, ...action.payload };
    },
    setDefaultMarketsTime(state) {
      state.marketsTime = {};
    },
    removeCoinDescription(state) {
      state.coinDescription = null;
    },
    removeMarketChart(state) {
      state.selectedCoinMarketChart = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketsHome.pending, (state) => {
        state.isLoadingCrypto = true;
      })
      .addCase(fetchMarketsHome.fulfilled, (state, action) => {
        state.marketsHome = action.payload;
        state.isLoadingCrypto = false;
      });
    builder
      .addCase(fetchMarkets.pending, (state) => {
        state.isLoadingCrypto = true;
      })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
        state.markets = action.payload;
        state.isLoadingCrypto = false;
      });
    builder
      .addCase(fetchCoinsByQuery.pending, (state) => {
        state.isLoadingCrypto = true;
      })
      .addCase(fetchCoinsByQuery.fulfilled, (state, action) => {
        if (action.payload) {
          state.markets = action.payload;
        }
        state.isLoadingCrypto = false;
      });
    builder.addCase(fetchCoinDescription.fulfilled, (state, action) => {
      state.coinDescription = action.payload;
    });

    builder.addCase(fetchSelectedCoinMarketChart.fulfilled, (state, action) => {
      state.selectedCoinMarketChart = action.payload;
    });

    builder.addCase(fetchExchanges.pending, (state) => {
        state.isLoadingCrypto = true;
      })
      .addCase(fetchExchanges.fulfilled, (state, action) => {
        state.exchanges = action.payload;
        state.isLoadingCrypto = false;
      });

    builder.addCase(fetchExchangesList.pending, (state) => {
        state.isLoadingExchangesList = true;
      })
      .addCase(fetchExchangesList.fulfilled, (state, action) => {
        state.exchangesList = action.payload;
        state.isLoadingExchangesList = false;
      });

    builder.addCase(fetchExchangeById.pending, (state) => {
        state.isLoadingExchangesList = true;
      })
      .addCase(fetchExchangeById.fulfilled, (state, action) => {
        state.exchanges = [action.payload];
        state.isLoadingExchangesList = false;
      });      

    builder.addCase(fetchGlobalData.fulfilled, (state, action) => {
      state.globalData = action.payload;
    });
  },
});

export const {
  setMarketsTime,
  setDefaultMarketsTime,
  removeCoinDescription,
  removeMarketChart,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
