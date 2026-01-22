import {ProductCards} from "@entities/products/ui/card";
import styles from "./index.module.scss"
import {ProductCardsMock} from "@entities/products/data";


const ProductList = () => {
  return (
    <section className={styles.productList}>
      {ProductCardsMock.map((product) => {
        return <ProductCards key={product.id} product={product} color="primary" />
      })}
    </section>
  );
};

export default ProductList;