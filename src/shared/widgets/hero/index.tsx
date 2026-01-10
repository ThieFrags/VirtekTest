import styles from "./index.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.homePage__text}>
        <h1>
          ЭЛЕКТРОТЕХНИЧЕСКИЕ
          КЛЕММЫ
        </h1>
        <h1>
          ЭЛЕКТРОМЕХАНИЧЕСКИЕ
          И ПОЛУПРОВОДНИКОВЫЕ
          РЕЛЕ
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

