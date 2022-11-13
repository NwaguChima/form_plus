import React, { useEffect, useState } from "react";
import styles from "./Paginate.module.scss";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Paginate = ({ templates, setPageTemplates }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage] = useState(102);
  const [totalPages, setTotalPages] = useState();

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setTotalPages(Math.ceil(templates.length / templatesPerPage));
  }, [templates, templatesPerPage]);

  useEffect(() => {
    const currentTemplates = templates.slice(
      indexOfFirstTemplate,
      indexOfLastTemplate
    );

    setPageTemplates(currentTemplates);
  }, [indexOfFirstTemplate, indexOfLastTemplate, templates, setPageTemplates]);

  return (
    <div className={styles.paginate}>
      <div
        className={`${styles.paginate__prev} ${
          currentPage <= 1 && styles.first
        }`}
        onClick={handlePrev}
      >
        <i>
          <MdOutlineNavigateBefore />
        </i>
        <button>Previous</button>
      </div>
      <div className={styles.paginate__item}>
        <span className={styles.active}>{currentPage}</span>
        <span>of</span>
        <span>{totalPages}</span>
      </div>
      <div
        className={`${styles.paginate__next} ${
          currentPage === totalPages && styles.last
        }`}
        onClick={handleNext}
      >
        <button>Next</button>
        <i>
          <MdOutlineNavigateNext />
        </i>
      </div>
    </div>
  );
};

export default Paginate;
