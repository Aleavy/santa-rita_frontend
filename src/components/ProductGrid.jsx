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
      <div className="mb-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 items-center justify-center grid gap-2 text-center wrap-anywhere lg:px-0 px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
