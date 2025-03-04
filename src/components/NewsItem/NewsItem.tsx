import React, { memo } from "react";
import { NewsArticle } from "../../types/newsTypes.ts";
import dayjs from "dayjs";
import styles from "./NewsItem.module.scss";
import { truncateText } from "../../utils/helpers.ts";
import { DATE_FORMAT_WITH_HOURS } from "../../utils/constants.ts";

interface NewsItemProps {
  article: NewsArticle;
}

const RESOURCE_URL = import.meta.env.VITE_RESOURCE_URL;

export const NewsItem: React.FC<NewsItemProps> = memo(({ article }) => {
  return (
    <a href={article.web_url} className={styles.newsItem} target={"_blank"}>
      <h2 className={styles.sourceTitle}>{article.source}</h2>

      {article.multimedia.length > 0 && (
        <div className={styles.imageContainer}>
          <img
            className={styles.itemImage}
            src={`${RESOURCE_URL}/${article.multimedia[4].url}`}
            alt=""
          />
        </div>
      )}

      <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>
          {truncateText(article.abstract, 300)}
        </h3>
        <span className={styles.itemDate}>
          {dayjs(article.pub_date).format(DATE_FORMAT_WITH_HOURS)}
        </span>
      </div>
    </a>
  );
});
