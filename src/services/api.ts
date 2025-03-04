import axios from "axios";
import { FetchNewsParams, NewsApiResponse } from "../store/newsSlice.ts";

export const getArticles = async (
  { year, month }: FetchNewsParams,
  BASE_URL: string,
  API_KEY: string,
) => {
  const response = await axios.get<NewsApiResponse>(
    `${BASE_URL}/${year}/${month}.json?api-key=${API_KEY}`,
  );
  return response.data.response.docs; // Now TypeScript understands the structure
};
