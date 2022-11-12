import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  setCategoryFilter,
  setDateFilter,
  setOrderFilter,
  setSearchFilter,
} from "../../features/template/filterSlice";
import {
  categoryOptions,
  dateOptions,
  orderOptions,
} from "../../utils/optionFile";
import CustomSelect from "../customSelect/CustomSelect";
import styles from "./SearchNav.module.scss";

const SearchNav = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function handleSearch(e) {
    if (search.length) {
      dispatch(setSearchFilter(search));
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);

    if (!e.target.value) {
      dispatch(setSearchFilter(""));
    }
  }

  function handleFilters(value) {
    if (value.name === "category") {
      dispatch(setCategoryFilter(value.value));
    } else if (value.name === "date") {
      dispatch(setDateFilter(value.value));
    } else if (value.name === "order") {
      dispatch(setOrderFilter(value.value));
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__input}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Templates"
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <i onClick={handleSearch}>
          <FiSearch />
        </i>
      </div>

      <div className={styles.nav__select}>
        <p>Sort By:</p>
        <CustomSelect
          options={categoryOptions}
          label="Category"
          handleChange={handleFilters}
        />
        <CustomSelect
          options={orderOptions}
          label="Order"
          handleChange={handleFilters}
        />
        <CustomSelect
          options={dateOptions}
          label="Date"
          handleChange={handleFilters}
        />
      </div>
    </nav>
  );
};

export default SearchNav;
