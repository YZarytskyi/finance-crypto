import { cryptoApi } from "../../API/cryptoApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GlobalData,
  Markets,
  MarketsTime,
  SelectedCoin,
  SelectedCoinMarketChart,
} from "../../Types/Types";

const initialState: InitialState = {
  marketsHome: [],
  markets: [],
  selectedCoin: null,
  isLoadingCrypto: false,
  marketsTime: {},
  globalData: {},
  selectedCoinMarketChart: {},
};

interface InitialState {
  marketsHome: Array<Markets>;
  markets: Array<Markets>;
  selectedCoin: SelectedCoin | null,
  isLoadingCrypto: boolean;
  marketsTime: MarketsTime;
  globalData: Partial<GlobalData>;
  selectedCoinMarketChart: Partial<SelectedCoinMarketChart>;
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

export const fetchCoinsById = createAsyncThunk(
  "coinsById/fetch",
  async (id: string) => {
    return (await cryptoApi.getCoinsById(id)) as SelectedCoin
  }
);

// export const fetchSearchDataByQuery = createAsyncThunk(
//   "searchDataByQuery/fetch",
//   async (query: string) => {
//     return (await cryptoApi.getCoinsByQuery(query)) as
//       | Array<Markets>
//       | undefined;
//   }
// );

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
    removeSelectedCoin(state) {
      state.selectedCoin = null;
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
      .addCase(fetchCoinsById.pending, (state) => {
        state.isLoadingCrypto = true;
      })
      .addCase(fetchCoinsById.fulfilled, (state, action) => {
        state.selectedCoin = action.payload;
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
    builder.addCase(fetchSelectedCoinMarketChart.fulfilled, (state, action) => {
      state.selectedCoinMarketChart = action.payload;
    });
    builder.addCase(fetchGlobalData.fulfilled, (state, action) => {
      state.globalData = action.payload;
    });
  },
});

export const {
  setMarketsTime,
  setDefaultMarketsTime,
  removeSelectedCoin,
  removeMarketChart,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
