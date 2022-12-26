import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { articlesApi } from '../../API/articlesApi';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../Types/Types';

interface ArticlesState {
  articles: Array<Article>;
  recentArticles: Array<Article>;
  isLoadingArticles: boolean;
  total: number;
  currentPage: number;
}

const initialState: ArticlesState = {
  articles: [],
  recentArticles: [],
  isLoadingArticles: false,
  total: 0,
  currentPage: 0,
};

export interface Docs {
  docs: Array<Article>;
  meta: Meta;
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export const fetchArticles = createAsyncThunk('articles/fetchAll', async _ => {
  return (await articlesApi.getArticles()) as Docs;
});

export const fetchRecentArticles = createAsyncThunk(
  'recentArticles/fetchAll',
  async (page: number) => {
    return (await articlesApi.getArticles(page)) as Docs;
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Docs>) => {
        state.articles = action.payload?.docs?.map(article => ({
          ...article,
          _id: article._id.slice(15),
        }));
        if (!state.currentPage) {
          state.recentArticles = state.articles;
        }
        state.total = action.payload.meta.hits;
      }
    );
    builder
      .addCase(fetchRecentArticles.pending, state => {
        state.isLoadingArticles = true;
      })
      .addCase(
        fetchRecentArticles.fulfilled,
        (state, action: PayloadAction<Docs>) => {
          state.recentArticles = action.payload?.docs?.map(article => ({
            ...article,
            _id: article._id.slice(15),
          }));
          state.isLoadingArticles = false;
        }
      );
  },
});

export const { setCurrentPage } = articlesSlice.actions

export default articlesSlice.reducer;
