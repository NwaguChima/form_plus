import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, label, placeholder }) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        <Select options={options} placeholder={placeholder} />
      </fieldset>
    </div>
  );
};

export default CustomSelect;
