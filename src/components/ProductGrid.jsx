import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";

export function ProductGrid({ func = getAllProducts, category = false }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      let res;
      if (!category) {
        res = await func();
      } else {
        res = await func(category);
      }
      setProducts(res.data);
    };
    loadProducts();
  }, [category]);

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
