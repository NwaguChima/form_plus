import React from "react";
import Select from "react-select";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ options, label, handleChange, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

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
          value={defaultValue(options, value) || null}
          options={options}
          styles={selectStyles}
          onChange={(value) => handleChange(value)}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </fieldset>
    </div>
  );
};

export default CustomSelect;
