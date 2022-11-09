import { Outlet } from "react-router-dom";
import styles from "../App.module.scss";
import Header from "./Header";

const Layout = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
