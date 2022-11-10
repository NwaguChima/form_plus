import React from "react";
import styles from "./Paginate.module.scss";

const Paginate = () => {
  return (
    <div className={styles.paginate}>
      <button>previous</button>
      <div className={styles.paginate__item}>
        <span>1</span>
        <span>of</span>
        <span>14</span>
      </div>
      <button>next</button>
    </div>
  );
};

export default Paginate;
