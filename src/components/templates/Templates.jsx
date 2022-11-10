import React from "react";
import styles from "./Templates.module.scss";

const Templates = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <h2>All Templates</h2>
        <p>2000 templates</p>
      </div>
      <div className={styles.container__list}></div>
    </div>
  );
};

export default Templates;
