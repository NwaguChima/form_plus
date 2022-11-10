import React from "react";
import styles from "./Template.module.scss";

const Template = () => {
  return (
    <div className={styles.template}>
      <div className={styles.template__top}>
        <h2>Alumni Membership Form Template</h2>
        <p>
          Engage your alumni network better with this alumni registration from
          templates. Embed this in your website...
        </p>
      </div>
      <div className={styles.template__bottom}>
        <button>Use Template</button>
      </div>
    </div>
  );
};

export default Template;
