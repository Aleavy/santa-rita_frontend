import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";

export function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await getAllProducts();
      setProducts(res.data);
    };
    loadProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 sm:grid-cols-1 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
