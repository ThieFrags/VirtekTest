import {FC} from "react";
import styles from "./index.module.scss"
import {Outlet} from "react-router";
import {Footer, Header} from "@widgets";

const MainLayout: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;