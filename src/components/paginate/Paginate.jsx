import React, { useEffect, useState } from "react";
import styles from "./Paginate.module.scss";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Paginate = ({ templates }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage] = useState(100);
  const [totalPages, setTotalPages] = useState(templates.length / 100);

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = templates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const handleNext = () => {
    console.log("next");
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(templates.length / templatesPerPage));
  }, [templates, templatesPerPage]);

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
      <div className={styles.paginate__next} onClick={handleNext}>
        <button>Next</button>
        <i>
          <MdOutlineNavigateNext />
        </i>
      </div>
    </div>
  );
};

export default Paginate;
