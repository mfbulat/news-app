import React from "react";
import loader from "../../assets/loader.png";
import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Spinner;
