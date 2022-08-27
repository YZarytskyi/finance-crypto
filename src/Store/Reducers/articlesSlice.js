import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { articlesApi } from "../../API/api";

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (_,) => {
    let response = await articlesApi.getArticles();
    return response.map((article, index) => ({
      id: index + 1, ...article
    }))
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
    builder.addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
      })
  }
})

export default articlesSlice.reducer