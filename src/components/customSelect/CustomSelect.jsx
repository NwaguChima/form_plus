import React from "react";
import Select from "react-select";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ options, label, handleChange }) => {
  const selectStyles = {
    control: (base, state) => {
      return {
        ...base,
        width: "100%",
        height: "40%",
        border: 0,
        boxShadow: "none",
        fontSize: "14px",
        paddingLeft: "10px",
      };
    },

    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      color: isSelected ? "white" : "#3f3e3e",
      background: isSelected ? "#3f3e3e" : isFocused ? "#e5e5e5" : "white",
    }),
  };

  return (
    <div className={styles.select}>
      <fieldset>
        <legend>{label}</legend>
        <Select
          options={options}
          defaultValue={options[0]}
          styles={selectStyles}
          onChange={handleChange}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </fieldset>
    </div>
  );
};

export default CustomSelect;
