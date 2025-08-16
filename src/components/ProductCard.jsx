import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const cartLocalStorage = JSON.parse(localStorage.getItem("cartlist") || "[]");

export function ProductCard({ product }) {
  const [cartList, setCartList] = useState(cartLocalStorage);

  const addToLocalStorage = () => {
    const obj = {
      ...cartList,
      [product.name]: { name: product.name, price: product.price },
    };
    setCartList(obj);
  };

  const deleteFromLocalStorage = (itemToDelete) => {
    const cartStorageFilter = cartList.filter((item) => {
      return item.id !== itemToDelete;
    });
    setCartList(cartStorageFilter);

    localStorage.setItem("cartList", JSON.stringify(cartStorageFilter));
  };

  useEffect(() => {
    localStorage.setItem("carlist", JSON.stringify(cartList));
    console.log(localStorage);
  }, [cartList]);

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
        <div className="w-[65%] sm:w-[70%] lg:w-[48%] xl:w-[40%] text-white font-bold bg-blue-800 rounded-full p-1 mb-2">
          <h1>₲{parsePrice(product.price)}</h1>
        </div>
        <div className="mx-2 text-gray-700 font-normal text-lg  ">
          <p>{product.name}</p>
        </div>
      </Link>
      <button onClick={addToLocalStorage}>Add to card</button>
    </div>
  );
}
