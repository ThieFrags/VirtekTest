import styles from "./index.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.homePage__text}>
        <h1>
          Электротехнические клеммы
        </h1>
        <p>
          Электромеханические
          и полупроводниковые
          реле
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

