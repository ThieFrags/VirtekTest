import {FC} from "react";
import styles from "./index.module.scss"
import Header from "src/shared/widgets/header";
import {Outlet} from "react-router";
import Footer from "@shared/widgets/footer";

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