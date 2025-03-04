import { formatArticlesWithHeaders } from "../utils/helpers.ts";
import { NewsArticle, NewsArticleWithHeaders } from "../types/newsTypes.ts";

export function processFetchedArticles(
  payload: NewsArticle[],
): NewsArticleWithHeaders[] {
  return formatArticlesWithHeaders(payload.reverse());
}

export function isNewsUpdated(
  existingNews: NewsArticleWithHeaders[],
  newArticles: NewsArticleWithHeaders[],
): boolean {
  const existingIds = new Set(existingNews.map((article) => article._id));
  const newIds = new Set(newArticles.map((article) => article._id));

  return (
    existingNews.length === newArticles.length &&
    [...existingIds].every((id) => newIds.has(id))
  );
}
