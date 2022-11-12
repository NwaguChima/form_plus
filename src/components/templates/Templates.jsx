import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectAllTemplates,
  useGetTemplatesQuery,
} from "../../features/template/templateSlice";
import Paginate from "../paginate/Paginate";
import Template from "../template/Template";
import styles from "./Templates.module.scss";

const Templates = () => {
  // const {
  //   data: templates,
  //   isError,
  //   isSuccess,
  //   error,
  //   isLoading,
  // } = useGetTemplatesQuery();

  // console.log("templates", templates);

  // const templates = useSelector(selectAllTemplates);
  // console.log("templates", templates);

  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        {/* <h3>All Templates</h3> */}
        <Link to="/e">All Templates</Link>
        <p>2000 templates</p>
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
