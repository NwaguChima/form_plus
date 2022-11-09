import { Outlet } from "react-router-dom";
import styles from "../App.module.scss";
import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.App}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
