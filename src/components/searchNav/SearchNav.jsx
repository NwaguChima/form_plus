import React from "react";
import { FiSearch } from "react-icons/fi";
import CustomSelect from "../customSelect/CustomSelect";
import styles from "./SearchNav.module.scss";

const options = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
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
        <CustomSelect options={options} label="Category" />

        <CustomSelect options={options} label="Order" />
        <CustomSelect options={options} label="Date" />
      </div>
    </nav>
  );
};

export default SearchNav;
