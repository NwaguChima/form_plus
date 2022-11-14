import React from "react";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ options, label, handleChange, value, name }) => {
  return (
    <div className={styles.select}>
      <fieldset>
        <legend>{label}</legend>
        <div className={styles.select__holder}>
          <select name={name} onChange={(e) => handleChange(e)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </div>
  );
};

export default CustomSelect;
