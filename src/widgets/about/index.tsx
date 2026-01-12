import styles from "./index.module.scss"

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <h2>
        Направление развития компании
      </h2>
      <p className={styles.about__description}>
        Поставляемая продукция бренда RY-ELE успешно прошла испытания, подтвержденные международными и российскими сертификатами соответствия. Конструктивное исполнение продукции, позволяет применять аксессуары импортных производителей, которые покинули отечественный рынок.
      </p>
    </section>
  );
};

export {
  AboutSection
};