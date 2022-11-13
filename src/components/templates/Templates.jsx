import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCategory,
  selectDate,
  selectOrder,
  selectSearch,
} from "../../features/template/filterSlice";
import { useGetTemplatesQuery } from "../../features/template/templateSlice";
import { handleCategory, handleOrder, handleSearch } from "../../utils/helper";
import Paginate from "../paginate/Paginate";
import Spinner from "../spinner/Spinner";
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

  const [pageTemplates, setPageTemplates] = useState([]);

  const {
    data: templates,
    isError,
    isSuccess,
    error,
    isLoading,
  } = useGetTemplatesQuery();

  useEffect(() => {
    if (isSuccess) {
      const templateArr = handleCategory(templates, category);
      setFilteredTemplates(templateArr);
    }
  }, [category, templates, isSuccess]);

  useEffect(() => {
    let templateArr = handleSearch(filteredTemplates, search);

    setSearchedTemplates(templateArr);
  }, [search, filteredTemplates]);

  useEffect(() => {
    const sortedTemplates = handleOrder(pageTemplates, order, date);

    setOrderedTemplates(sortedTemplates);
  }, [order, date, pageTemplates]);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div>Error: {error}</div>;
  } else if (isSuccess) {
    content = (
      <div className={styles.container}>
        <div className={styles.container__heading}>
          <h3>{category} Templates</h3>
          <p>{searchedTemplates.length} templates</p>
        </div>
        <div className={styles.container__list}>
          {orderedTemplates.map((temp) => {
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
        <Paginate
          templates={searchedTemplates}
          setPageTemplates={setPageTemplates}
        />
      </div>
    );
  }

  return content;
};

export default Templates;
