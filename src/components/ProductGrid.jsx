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
      <div className="sm:grid-cols-3 grid gap-2 text-center wrap-anywhere grid-cols-1 px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
