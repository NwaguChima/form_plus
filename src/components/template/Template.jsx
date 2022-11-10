import React from "react";
import styles from "./Template.module.scss";

const Template = () => {
  return (
    <div className={styles.template}>
      <h2>Alumni Membership Form Template</h2>
      <p>
        Engage your alumni network better with this alumni registration from
        templates. Embed this in your website...
      </p>
      <div className={styles.template__button}>
        <button>Use Template</button>
      </div>
    </div>
  );
};

export default Template;
