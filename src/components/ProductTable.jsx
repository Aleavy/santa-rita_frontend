import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api/products.api";
import { ProductTableItem } from "./ProductTableItem";

export const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await getAllProducts();
      console.log(res.data);
      setProducts(res.data);
    };
    loadProducts();
  }, []);

  return (
    <>
      <div>
        <Link to="/crear-producto">
          <button>Create task</button>
        </Link>
      </div>
      <div>
        {products.map((product) => (
          <ProductTableItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
