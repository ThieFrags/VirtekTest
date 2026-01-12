import ProductDetails from "@entities/products/ui/product-details";
import MainContainer from "@shared/components/main-container";
import ProductSpecsTable from "@entities/products/ui/table";

const ItemPage = () => {
  return (
    <MainContainer>
      <ProductDetails/>
      <ProductSpecsTable/>
    </MainContainer>
  )
};

export default ItemPage;
