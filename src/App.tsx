import React from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
};
