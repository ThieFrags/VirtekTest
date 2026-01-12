import {MainContainer} from "@shared/components";
import {ProductDescription, ProductList} from "@widgets";

const ProductPage = () => {
  return (
    <MainContainer>
      <ProductDescription/>
      <ProductList/>
    </MainContainer>
  );
};

export default ProductPage;