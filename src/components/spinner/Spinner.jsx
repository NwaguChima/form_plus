import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <div className={styles.spinner}></div>
      <p className={styles.loading}>Loading Templates...</p>
    </>
  );
};

export default Spinner;
