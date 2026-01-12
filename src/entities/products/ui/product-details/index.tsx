import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {IProduct} from "@entities/products/interface";
import {getProductById} from "@entities/products/lib";
import styles from "./index.module.scss"

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const productData = getProductById(id);
    if (productData) {
      setProduct(productData);
    } else {
      setError("Товар не найден");
    }
    setLoading(false);
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Товар не найден</div>;

  return (
    <section className={styles.layouts}>
      <div className={styles.imageWrapper}>
        <img src={product.src} alt={product.category} />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;