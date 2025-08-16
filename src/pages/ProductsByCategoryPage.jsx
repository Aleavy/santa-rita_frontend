import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { getProductsByCategory } from "../api/products.api";
import { useParams } from "react-router-dom";

export const ProductsByCategoryPage = () => {
  const params = useParams();

  return (
    <>
      <Header></Header>
      <ProductGrid
        func={getProductsByCategory}
        category={params.category}
      ></ProductGrid>
    </>
  );
};
