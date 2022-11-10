import React from "react";
import Template from "../template/Template";
import styles from "./Templates.module.scss";

const Templates = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <h3>All Templates</h3>
        <p>2000 templates</p>
      </div>
      <div className={styles.container__list}>
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
      </div>
    </div>
  );
};

export default Templates;
