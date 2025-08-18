import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { getProductsByCategory } from "../api/products.api";
import { useParams } from "react-router-dom";

export const ProductsByCategoryPage = () => {
  const params = useParams();

  return (
    <div className="justify-center items-center flex flex-col gap-5">
      <h1 className="text-center text-4xl">{params.category}</h1>
      <ProductGrid
        func={getProductsByCategory}
        category={params.category}
      ></ProductGrid>
    </div>
  );
};
