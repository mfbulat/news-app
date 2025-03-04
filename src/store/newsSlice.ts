import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsArticle, NewsArticleWithHeaders } from "../types/newsTypes";
import { isNewsUpdated, processFetchedArticles } from "./utils.ts";
import { getArticles } from "../services/api.ts";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export type FetchNewsParams = {
  year: number;
  month: number;
};

type NewsState = {
  news: NewsArticleWithHeaders[];
  loading: boolean;
  error: string | null;
};

export type NewsApiResponse = {
  response: {
    docs: NewsArticle[];
  };
};

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk<NewsArticle[], FetchNewsParams>(
  "news/fetchNews",
  async (date) => {
    return await getArticles(date, BASE_URL, API_KEY);
  },
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        const newArticles = processFetchedArticles(action.payload);
        if (!isNewsUpdated(state.news, newArticles)) {
          state.news = newArticles;
        }
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching news";
      });
  },
});

export default newsSlice.reducer;
