import React from "react";
import styles from "./Paginate.module.scss";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Paginate = () => {
  return (
    <div className={styles.paginate}>
      <div className={styles.paginate__prev}>
        <i>
          <MdOutlineNavigateBefore />
        </i>
        <button>Previous</button>
      </div>
      <div className={styles.paginate__item}>
        <span>1</span>
        <span>of</span>
        <span>14</span>
      </div>
      <div className={styles.paginate__next}>
        <button>Next</button>
        <i>
          <MdOutlineNavigateNext />
        </i>
      </div>
    </div>
  );
};

export default Paginate;
