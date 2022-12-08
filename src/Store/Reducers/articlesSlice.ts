import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { articlesApi } from "../../API/api";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ArticlesState {
  articles: Array<Articles>,
  recentArticles: Array<Articles>,
  isLoadingArticles: boolean,
  total: number,
}

const initialState: ArticlesState = {
  articles: [],
  recentArticles: [],
  isLoadingArticles: false,
  total: 0,
}

export interface Docs {
  docs: Array<MyData>,
  meta: Meta
}

interface Meta {
  hits: number,
  offset: number,
  time: number,
}

interface MyData {
  headline: {main: string},
  snippet: string,
  lead_paragraph: string,
  news_desk: string,
  web_url: string,
  pub_date: string,
  byline: {original: string},
  multimedia: Array<{url: string}>,
}

export interface Articles extends MyData {
  id: number,
}

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll', 
  async (_,) => {
    return (await articlesApi.getArticles()) as Docs;
  }
)

export const fetchRecentArticles = createAsyncThunk(
  'recentArticles/fetchAll', 
  async (page: number) => {
    return (await articlesApi.getArticles(page)) as Docs;
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
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Docs>) => {
        state.articles = action.payload.docs.map((article, index) => ({
              id: index + 1, ...article
          }));
          if (!state.recentArticles.length) {
            state.recentArticles = state.articles
          }
        state.total = action.payload.meta.hits;
        state.isLoadingArticles = false;
      })
      builder.addCase(fetchRecentArticles.pending, (state) => {
        state.isLoadingArticles = true;
      })
      .addCase(fetchRecentArticles.fulfilled, (state, action: PayloadAction<Docs>) => {
        state.recentArticles = action.payload.docs.map((article, index) => ({
              id: index + 1, ...article
          }));
        state.isLoadingArticles = false;
      })
  }
})

export default articlesSlice.reducer