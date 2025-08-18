import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products.api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cart";
import { parsePrice } from "./ProductCard";
import IconCart from "../assets/images/cart-shopping-regular-full.svg";

export const ProductView = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  useEffect(() => {
    async function loadProduct() {
      const res = await getProduct(params.id);
      console.log(res);
      setProduct(res.data);
    }
    loadProduct();
  }, []);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity,
      })
    );
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <div className="w-[90%] place-self-center border-1 border-gray-200 rounded">
          <img src={product.image} alt="" className="w-full rounded" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold text-center">
            {product.name}
          </h1>
          <h2 className="text-xl text-gray-500">{product.description}</h2>
          <p className="font-bold w-fit text-3xl ml-2">
            ₲{parsePrice(product.price)}
          </p>
          <div className="flex gap-5 flex-col justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-12 font-bold text-xl rounded-xl flex justify-center items-center "
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-300 h-full w-12 p-1 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-12 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-green-400 p-2 rounded-md text-lg w-fit hover:bg-green-500 flex gap-2 text-white font-semibold cursor-pointer"
            >
              <img src={IconCart} alt="" className="w-5 " />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
