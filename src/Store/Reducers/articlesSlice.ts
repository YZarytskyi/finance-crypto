import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { articlesApi } from "../../API/api";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ArticlesState {
  articles: Array<Articles>,
  isLoadingArticles: boolean,
  total: number,
  page: number,
}

const initialState: ArticlesState = {
  articles: [],
  isLoadingArticles: false,
  total: 0,
  page: 0,
}

interface Docs {
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
  multimedia: Array<{legacy: {xlarge: string}}>,
  
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

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
        state.isLoadingArticles = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Docs>) => {
        console.log(action.payload)
        state.articles = action.payload.docs.map((article, index) => ({
              id: index + 1, ...article
          }));
        state.total = action.payload.meta.hits;
        state.isLoadingArticles = false;
      })
  }
})

export default articlesSlice.reducer