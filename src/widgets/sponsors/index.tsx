import styles from "./index.module.scss"
import sibur from "@shared/assets/img/sibyr.png"
import ufaorgsintez from "@shared/assets/img/ufaorgsintez.png"
import kronstadt from "@shared/assets/img/kronstadt.png"
import bashneft from "@shared/assets/img/bashneft.png"
import CardImageContainer from "@shared/components/card-image-container";

const link = [
  {
    src: sibur,
    link: "https://www.sibur.ru/ru/",
    alt: "Сибур"
  },
  {
    src: ufaorgsintez,
    link: "https://inotekllc.ru/ufaorgcintez.ru",
    alt: "Уфаоргсинтез"
  },
  {
    src: kronstadt,
    link: "https://ic-k.ru/",
    alt: "Инжинириноговый центр 'Кронштадт' ",
  },
  {
    src: bashneft,
    link: "https://bashneft.ru/",
    alt: "Башнефть",
  }
]

const Sponsors = () => {
  return (
    <section className={styles.sponsors}>
      <h2>
        Нам доверяют
      </h2>
      <div className={styles.sponsors__container}>
        {link.map((item) => {
          return <CardImageContainer key={item.src} {...item}/>
        })}
      </div>
    </section>
  );
};

export {
  Sponsors
};