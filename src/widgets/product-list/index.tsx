import {ProductCards, ProductCardsMock} from "@entities/products";
import styles from "./index.module.scss"

const ProductList = () => {
  return (
    <section className={styles.productList}>
      {ProductCardsMock.map((product) => {
        return <ProductCards key={product.id} product={product} color="primary" />
      })}
    </section>
  );
};

export {
  ProductList
};