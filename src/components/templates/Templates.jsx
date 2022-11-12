import React, { useEffect, useState } from "react";
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

  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [searchedTemplates, setSearchedTemplates] = useState([]);
  const [orderedTemplates, setOrderedTemplates] = useState([]);

  const {
    data: templates,
    isError,
    isSuccess,
    error,
    isLoading,
  } = useGetTemplatesQuery();

  console.log("templates", isLoading, isSuccess, templates);

  useEffect(() => {
    if (templates?.ids.length) {
      let templateArr = templates?.ids.map((id) => templates.entities[id]);

      if (category !== "All") {
        templateArr = templateArr.filter((template) =>
          template.category.includes(category)
        );
      }

      setFilteredTemplates(templateArr);
    }
  }, [category, templates]);

  useEffect(() => {
    let templateArr = filteredTemplates.filter(
      (template) =>
        template.name.toLowerCase().includes(search.toLowerCase()) ||
        template.description.toLowerCase().includes(search.toLowerCase())
    );

    setSearchedTemplates(templateArr);
  }, [search, filteredTemplates]);

  useEffect(() => {}, [order, date, filteredTemplates]);

  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <h3>{category} Templates</h3>
        <p>{searchedTemplates.length} templates</p>
      </div>
      <div className={styles.container__list}>
        {searchedTemplates.slice(0, 100).map((temp) => {
          const { name, link, description, id } = temp;
          return (
            <Template
              key={id}
              name={name}
              link={link}
              description={description}
            />
          );
        })}
      </div>
      <Paginate />
    </div>
  );
};

export default Templates;
