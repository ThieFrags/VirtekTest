import {ProductDetails, ProductSpecsTable} from "@entities/products";
import {MainContainer} from "@shared/components/main-container";

const ItemPage = () => {
  return (
    <MainContainer>
      <ProductDetails/>
      <ProductSpecsTable/>
    </MainContainer>
  )
};

export default ItemPage;
