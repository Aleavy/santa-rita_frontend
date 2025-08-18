import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api/products.api";
import { ProductTableItem } from "./ProductTableItem";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

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
    <div className="h-100">
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
          <ProductTableItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
