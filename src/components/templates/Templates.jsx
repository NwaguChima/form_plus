import React from "react";
import { useSelector } from "react-redux";
import {
  selectCategory,
  selectDate,
  selectOrder,
  selectSearch,
} from "../../features/template/filterSlice";
import { useGetTemplatesQuery } from "../../features/template/templateSlice";
import Paginate from "../paginate/Paginate";
import Template from "../template/Template";
import styles from "./Templates.module.scss";

const Templates = () => {
  const category = useSelector(selectCategory);
  const order = useSelector(selectOrder);
  const date = useSelector(selectDate);
  const search = useSelector(selectSearch);

  // const {
  //   data: templates,
  //   isError,
  //   isSuccess,
  //   error,
  //   isLoading,
  // } = useGetTemplatesQuery();

  // console.log("templates", isLoading, isSuccess, templates);

  console.log("category", category);

  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <h3>{category} Templates</h3>
        {/* <p>{templates?.ids.length} templates</p> */}
      </div>
      <div className={styles.container__list}>
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
      </div>
      <Paginate />
    </div>
  );
};

export default Templates;
