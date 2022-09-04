import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { articlesApi } from "../../API/api";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ArticlesState {
  articles: Array<Articles>,
  isLoadingArticles: boolean,
}

const initialState: ArticlesState = {
  articles: [],
  isLoadingArticles: false,
}

interface MyData {
  source: {id: string, name: string};
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface Articles extends MyData {
  id: number;
}
export const fetchArticles = createAsyncThunk(
  'articles/fetchAll', 
  async (_,) => {
    return (await articlesApi.getArticles()) as Array<MyData>;
  }
)

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
        state.isLoadingArticles = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<MyData[]>) => {
        state.articles = action.payload.map((article, index) => ({
          id: index + 1, ...article
        }));
        state.isLoadingArticles = false;
      })
  }
})

export default articlesSlice.reducer