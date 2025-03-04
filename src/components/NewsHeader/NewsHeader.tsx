import React from "react";
import styles from "../../pages/Home/Home.module.scss";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../utils/constants.ts";

type NewsHeaderProps = {
  date: string;
};

export const NewsHeader: React.FC<NewsHeaderProps> = ({ date }) => {
  return (
    <h2 className={styles.title}>News for {dayjs(date).format(DATE_FORMAT)}</h2>
  );
};
