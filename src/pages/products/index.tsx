import MainContainer from "@shared/components/main-container";
import ProductDescription from "src/shared/widgets/product-description";
import ProductList from "@shared/widgets/product-list";

const ProductPage = () => {
  return (
    <MainContainer>
      <ProductDescription/>
      <ProductList/>
    </MainContainer>
  );
};

export default ProductPage;