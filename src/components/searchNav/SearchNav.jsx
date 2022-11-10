import React from "react";
import { FiSearch } from "react-icons/fi";
import { categoryOptions, orderOptions } from "../../utils/optionFile";
import CustomSelect from "../customSelect/CustomSelect";
import styles from "./SearchNav.module.scss";

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
        <CustomSelect options={categoryOptions} label="Category" />
        <CustomSelect options={orderOptions} label="Order" />
        <CustomSelect options={orderOptions} label="Date" />
      </div>
    </nav>
  );
};

export default SearchNav;
