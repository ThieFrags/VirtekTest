import styles from "./index.module.scss"
import {LogoIcon} from "@shared/assets/icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contacts}>
        <a href="/">Политика конфиденциальности</a>
        <a href="tel:+79999999999+"> +7 (999) 99 99 999</a>
        <a href="mailto:char@mail.ru">char@mail.ru</a>
      </div>
      <div className={styles.footer__create}>
        <p>Сайт создан -</p>
        <LogoIcon className={styles.footer__svg}/>
      </div>
    </footer>
  );
};

export default Footer;