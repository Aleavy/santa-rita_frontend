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
    <div className="px-6 w-70 sm:w-58 py-8 grid grid-rows-2 items-center border-[1px] border-gray-300 shadow-lg rounded-2xl">
      <Link
        to={`/producto/ver/${product.id}`}
        className="row-span-2 w-full flex flex-col justify-center items-center"
      >
        <div className="size-full]">
          <img
            src={product.image}
            alt="producto"
            className="w-50 h-38 rounded"
          />
        </div>
      </Link>
      <Link
      to={`/producto/ver/${product.id}`}>
        <div className="my-4 text-gray-700 font-normal text-base mb-2 ">
          <p>{product.name}</p>
        </div>
      </Link>
      <div className="flex">
        <div className="gap-3 flex justify-center items-center flex-col w-full">
          <div className="w-full place-self-end text-xl text-black rounded-full p-1">
            <h1 className="text-blue-600 font-semibold place-self-end">₲{parsePrice(product.price)}</h1>
          </div>
          <button
            onClick={handleAddToCart}
            className="h-fit bg-green-400 p-2 rounded-md text-xl sm:text-lg hover:bg-green-500 flex gap-2 text-white font-semibold cursor-pointer"
          >
            <img src={IconCart} alt="" className="w-5 " />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
