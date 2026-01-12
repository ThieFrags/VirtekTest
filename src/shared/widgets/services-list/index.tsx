import ServicesCard from "@entities/services/ui/card";
import klema from "@shared/assets/img/din2.png"
import {IService} from "@entities/services/interface";
import styles from "./index.module.scss"

const ServicesCardMock: IService[] = [
  {
    name: "Клемы",
    src: klema,
    id: 1,
  }
]

const ServicesList = () => {
  return (
    <section className={styles.servicesList}>
      <p className={styles.servicesList__text}>наши услуги</p>
      {ServicesCardMock.map((item) => {
        return <ServicesCard key={item.id} service={item} />})
      }
    </section>
  );
};

export default ServicesList;