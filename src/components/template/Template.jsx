import React from "react";
import styles from "./Template.module.scss";

const Template = ({ id, description, link, name }) => {
  return (
    <div className={styles.template} key={id}>
      <div className={styles.template__top}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.template__bottom}>
        <button>
          <a href={link} target="_blank" rel="noreferrer">
            Use Template
          </a>
        </button>
      </div>
    </div>
  );
};

// There is no need to use React.memo() here because there is no props will really be changing, and as redux advices, we are using a normalized state, so we don't need to worry about performance issues, and we can have memoized selectors to avoid unnecessary re-renders.
export default Template;
