import {
  isHeader,
  isNewsArticle,
  NewsArticleWithHeaders,
} from "../../types/newsTypes.ts";
import { GridCellProps } from "react-virtualized/dist/es/Grid";
import { CellMeasurer, CellMeasurerCache } from "react-virtualized";
import React from "react";
import { DATE_FORMAT } from "../../utils/constants.ts";
import { NewsItem } from "../NewsItem";
import { NewsHeader } from "../NewsHeader";
import dayjs from "dayjs";

type NewsRowProps = {
  element: NewsArticleWithHeaders;
  style: GridCellProps["style"];
  cache: CellMeasurerCache;
  parent: GridCellProps["parent"];
  index: number;
  key: GridCellProps["key"];
};

export const NewsRow: React.FC<NewsRowProps> = ({
  element,
  style,
  cache,
  parent,
  index,
  key,
}) => {
  return (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      {({ measure }) => {
        if (isHeader(element)) {
          return (
            <div style={style} onLoad={measure}>
              <NewsHeader
                date={dayjs(element?.groupDate).format(DATE_FORMAT)}
              />
            </div>
          );
        }
        if (isNewsArticle(element)) {
          return (
            <div style={style} onLoad={measure}>
              <NewsItem article={element} />
            </div>
          );
        }
        return null;
      }}
    </CellMeasurer>
  );
};
