import { NewsArticle, NewsArticleWithHeaders } from "../types/newsTypes.ts";
import { DATE_FORMAT } from "./constants.ts";
import dayjs from "dayjs";

export const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const formatArticlesWithHeaders = (
  articles: NewsArticle[],
): NewsArticleWithHeaders[] => {
  let currentDate = "";
  return articles?.reduce((acc: NewsArticleWithHeaders[], article) => {
    const articleDate = dayjs(article.pub_date).format(DATE_FORMAT);

    if (currentDate !== articleDate) {
      currentDate = articleDate;
      acc.push({ groupDate: currentDate, _id: currentDate });
    }

    acc.push(article);
    return acc;
  }, []);
};
