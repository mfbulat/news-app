import React from "react";
import styles from "./Header.module.scss";
import { Navbar } from "../Navbar";

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>BESIDER</h1>
        <Navbar />
      </div>
    </header>
  );
};
