import styles from "./index.module.scss"
import klems from "@shared/assets/img/servicesDescription.png"

const ProductDescription = () => {
  return (
    <section className={styles.servicesDescription}>
      <h2 >ry-ele</h2>
      <div className={styles.servicesDescription__layout}>
        <div className={styles.servicesDescription__layout__text}>
          <p>
            Компания ИНОТЭК занимается исследованиями, разработкой и производством электротехнической продукции под брендом RY-ELE.
          </p>
          <p>
            Ассортимент продукции включает виды клемм и клеммных блоков на DIN-рейку, компактные интерфейсные реле,
            универсальные промышленные реле, а также твердотельные реле (SSR) и многое другое.
          </p>
          <p>
            Наша продукция имеет все необходимые разрешения и сертификаты: CQC, UL, VDE, TUV, CE, ROHS, IRIS.
          </p>
        </div>
        <img src={klems} alt="Клемы"/>
      </div>
    </section>
  );
};

export default ProductDescription;