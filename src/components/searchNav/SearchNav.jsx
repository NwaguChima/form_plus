import React from "react";
import { FiSearch } from "react-icons/fi";
import CustomSelect from "../customSelect/CustomSelect";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SearchNav = () => {
  return (
    <nav>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Templates"
        />
        <i>
          <FiSearch />
        </i>
      </div>

      <div>
        <p>Sort By:</p>
        <CustomSelect options={options} label="Category" />
      </div>
    </nav>
  );
};

export default SearchNav;
