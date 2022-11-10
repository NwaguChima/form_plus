import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import styles from "./InfoItem.module.scss";

const InfoItem = () => {
  return (
    <div className={styles.info}>
      <i>
        <BsInfoCircle />
      </i>
      <p>
        Tada! Get started with a free template. Can't find what you are looking?
        Search from the 1000+ available templates
      </p>
    </div>
  );
};

export default InfoItem;
