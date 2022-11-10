import React from "react";
import { FiSearch } from "react-icons/fi";
import CustomSelect from "../customSelect/CustomSelect";
import styles from "./SearchNav.module.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SearchNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__input}>
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

      <div className={styles.nav__select}>
        <p>Sort By:</p>
        <CustomSelect
          options={options}
          label="Category"
          placeholder="Select Category"
        />

        <CustomSelect
          options={options}
          label="Order"
          placeholder="Select Order"
        />
        <CustomSelect
          options={options}
          label="Date"
          placeholder="Select Date"
        />
      </div>
    </nav>
  );
};

export default SearchNav;
