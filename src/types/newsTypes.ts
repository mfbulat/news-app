export type NewsArticle = {
  _id: string;
  web_url: string;
  abstract: string;
  pub_date: string;
  source: string;
  multimedia: { url: string }[];
};

export type Header = { groupDate: string; _id: string };

export type NewsArticleWithHeaders = NewsArticle | Header;

export const isNewsArticle = (
  item: NewsArticleWithHeaders,
): item is NewsArticle => {
  return "web_url" in item;
};
export const isHeader = (item: NewsArticleWithHeaders): item is Header => {
  return "groupDate" in item;
};
