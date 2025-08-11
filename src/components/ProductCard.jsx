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
  return (
    <div className="w-[100%] p-4 flex flex-col justify-center items-center border-[1px] border-gray-300 shadow-lg rounded-2xl">
      <a href="" className="mb-6 max-w-30 min-w-2xs">
        <img
          src={product.image}
          alt="producto"
          className="w-[100%] h-[100%] object-contain"
        />
      </a>
      <div className="min-w-28 text-white font-bold bg-amber-800 rounded-full p-1">
        <h1>₲{parsePrice(product.price)}</h1>
      </div>
      <div className="mx-2 text-gray-700">
        <p>{}helloosdaosdoasjdoasjdo asdkjaskdasjdk</p>
      </div>
    </div>
  );
}
