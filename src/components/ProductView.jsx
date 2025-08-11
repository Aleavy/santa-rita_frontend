import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products.api";

export const ProductView = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      const res = await getProduct(params.id);
      console.log(res);
      setProduct(res.data);
    }
    loadProduct();
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image} alt="" />
    </div>
  );
};
