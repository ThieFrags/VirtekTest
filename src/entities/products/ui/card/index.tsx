import {ERouterPath} from "@shared";
import styles from "./index.module.scss";
import {Link} from "react-router";
import {ComponentPropsWithoutRef, FC} from "react";
import {IProduct} from "@entities/products/interface";
import Button, {IButtonColor} from "@shared/components/button";

type IProductCard = ComponentPropsWithoutRef<"article"> & {
  product: IProduct
  color?: IButtonColor;
}

const ProductCards: FC<IProductCard> = ({product: {category ,description, src, id}, color,...props} ) => {
  return (
    <Link to={`${ERouterPath.PRODUCT}/${id}`}>
      <article className={styles.productCard} {...props}>
        <div className={styles.imageWrapper}>
          <img src={src} alt="Клема" className={styles.productImage}/>
        </div>
        <div className={styles.content}>
          <p className={styles.category}>{category}</p>
          <p className={styles.description}>{description}</p>
          <Button children={"Подробнее"} color={color}/>
        </div>
      </article>
    </Link>
  );
};

export default ProductCards;