import React, { useCallback, useEffect } from "react";
import { fetchNews } from "../../store/newsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import dayjs from "dayjs";
import { AutoSizer, CellMeasurerCache, List } from "react-virtualized";
import { ListRowProps } from "react-virtualized/dist/es/List";
import { NewsRow } from "../../components/NewsRow";
import Spinner from "../../components/Spinner/Spinner.tsx";
import styles from "./Home.module.scss";
import { selectLoading, selectNews } from "../../store/selectors.ts";
import { Footer } from "../../components/Footer";

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 176,
});

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    const fetchData = () => {
      const currentDate = dayjs();
      const year = currentDate.year();
      const month = currentDate.month() + 1;
      dispatch(fetchNews({ year, month }));
    };

    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const rowRenderer = useCallback(
    ({ index, key, parent, style }: ListRowProps) => {
      const element = news[index];
      return (
        <NewsRow
          element={element}
          style={style}
          cache={cache}
          parent={parent}
          index={index}
          key={key}
        />
      );
    },
    [news],
  );

  return (
    <main className={styles.page}>
      <div className={styles.itemsList}>
        {loading && <Spinner />}
        <AutoSizer>
          {({ width, height }) => (
            <div style={{ minHeight: height, minWidth: width }}>
              <List
                width={width}
                height={height}
                rowCount={news.length}
                rowHeight={cache.rowHeight}
                rowRenderer={rowRenderer}
                deferredMeasurementCache={cache}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              />
            </div>
          )}
        </AutoSizer>
      </div>
      <Footer />
    </main>
  );
};
