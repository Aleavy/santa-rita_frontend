import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import IconCart from "../assets/images/cart-shopping-regular-full.svg";

export function reverseString(str) {
  let res = str.split("");
  res = res.reverse();
  res = res.join("");
  return res;
}

export function parsePrice(price) {
  let strPrice = reverseString(String(price));
  let result = "";
  if (strPrice.length > 3) {
    for (let i = 1; i - 1 < strPrice.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        result += strPrice[i - 1] + ".";
      } else {
        result += strPrice[i - 1];
      }
    }
    if (result[result.length - 1] === ".") {
      result = result.substring(0, result.length - 1);
    }
    return reverseString(result);
  } else {
    return price;
  }
}

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="xl:w-[80%] w-[100%] px-6 py-8 flex flex-col justify-center items-center border-[1px] border-gray-300 shadow-lg rounded-2xl">
      <Link
        to={`/producto/ver/${product.id}`}
        className="w-[100%] flex flex-col justify-center items-center"
      >
        <div className="mb-6 aspect-square overflow-hidden">
          <img
            src={product.image}
            alt="producto"
            className=" w-[100%] object-cover h-[100%]"
          />
        </div>

        <div className=" text-gray-700 font-normal text-3xl mb-2 ">
          <p>{product.name}</p>
        </div>
      </Link>
      <div className="grid grid-rows- grid-flow-row gap-2">
        <div className="h-fit text-white font-bold bg-blue-800 rounded-full p-1 text-lg">
          <h1>₲{parsePrice(product.price)}</h1>
        </div>
        <button
          onClick={handleAddToCart}
          className="h-fit bg-green-400 p-2 rounded-md text-lg hover:bg-green-500 flex gap-2 text-white font-semibold cursor-pointer"
        >
          <img src={IconCart} alt="" className="w-5 " />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
