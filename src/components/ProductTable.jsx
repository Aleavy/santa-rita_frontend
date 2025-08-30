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

  const handleUpdate = (products)=> {
    setProducts(products)
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="h-full">
      <div className="lg:mx-10">
        <div className="grid grid-cols-4 lg:grid-cols-6 py-2">
          <div className="flex justify-center items-center col-span-1"><p>Imagen</p></div>
          <div className="flex justify-center items-center lg:col-span-2"><p>Nombre</p></div>
          <div className="flex justify-center items-center lg:col-span-2"><p>Precio</p></div>
          <div className="flex justify-center items-center col-span-1"><p>Acciones</p></div>
        </div>
        <div className="border-1 border-gray-100 overflow-y-scroll w-full max-h-[500px] shadow-xl">
        {products.map((product) => (
          <ProductTableItem key={product.id} handleUpdate={handleUpdate} product={product} products={products} />
        ))}
        </div>
      </div>

    </div>
  );
};
