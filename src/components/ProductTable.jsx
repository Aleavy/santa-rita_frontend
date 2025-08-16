import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api/products.api";
import { ProductTableItem } from "./ProductTableItem";

export const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await getAllProducts();
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div>
        <Link to="/crear-producto">
          <button>Create task</button>
        </Link>
        <Link to="/crear-categoria">
          <button>Create categoria</button>
        </Link>
      </div>
      <div>
        {products.map((product) => (
          <ProductTableItem
            key={product.id}
            product={product}
            reload={loadProducts}
          />
        ))}
      </div>
    </>
  );
};
