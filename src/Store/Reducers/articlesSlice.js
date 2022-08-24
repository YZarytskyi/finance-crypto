import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { articlesApi } from "../../API/api";

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (_,) => {
    return await articlesApi.getArticles()
  }
)

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
      })
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
  }
})

export default articlesSlice.reducer