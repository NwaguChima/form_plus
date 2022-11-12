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

// There is no need to use React.memo() here because there is no props will really be changing, and as redux advices, we are using a normalized state, so we don't need to worry about performance issues, and we can have memoized selectors to avoid unnecessary re-renders.
export default Template;
