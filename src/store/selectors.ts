import { RootState } from "./store.ts";

export const selectNews = (state: RootState) => state.news.news;
export const selectLoading = (state: RootState) => state.news.loading;
