import styles from "./index.module.scss"
import {ComponentPropsWithoutRef, FC} from "react";
import {IService} from "@entities/services/interface";
import {Link} from "react-router";
import {ERouterPath} from "@shared";


type IServicesCard = ComponentPropsWithoutRef<"article"> & {service: IService}

const ServicesCard: FC<IServicesCard> = ({service: {name, src, id}, ...props} ) => {
  return (
    <Link to={`${ERouterPath.SERVICES}/${id}`}>
      <article style={{backgroundImage: `url(${src})`}} className={styles.productCard} {...props}>
        <p>{name}</p>
      </article>
    </Link>
  );
};

export default ServicesCard;