import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, label }) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        <Select options={options} />
      </fieldset>
    </div>
  );
};

export default CustomSelect;
