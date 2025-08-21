import { Link } from "react-router-dom";
import { deleteProduct } from "../api/products.api";
import {parsePrice} from './ProductCard'

export const ProductTableItem = ({handleUpdate, product, products }) => {
  const containerCenter = 'flex justify-center items-center'
  console.log(products)
  const handleDelete = async () => {
    const filtered = products.filter((prod) => prod.id !== product.id)
    await deleteProduct(product.id);

    handleUpdate(filtered)
  };

  return (
    <div className="hover:bg-gray-50 border-b-1 border-gray-10 grid grid-cols-4 lg:grid-cols-6">
      <div className={`${containerCenter} border-r-4 p-2 border-gray-50`} ><img src={product.image} alt="" className="h-15" /></div>
      <Link
        to={`/producto/ver/${product.id}`}
        className="lg:col-span-2 text-black underline flex border-r-1 border-gray-100 justify-center items-center"
      >
        <p className="">{product.name}</p>
      </Link>
    <p className="flex justify-center  items-center border-r-1 lg:col-span-2 border-gray-100">
      ₲ {parsePrice(product.price)}
    </p>
      <div className="flex justify-center px-2 sm:gap-4 sm:flex-row flex-col items-center">
        <button
          onClick={handleDelete}
          className="flex justify-center items-center  hover:cursor-pointer  bg-red-600 text-white rounded-xs p-2 w-full"
        >
          Eliminar
        </button>
        <Link to={`/producto/${product.id}`} className="flex border-1 border-cyan-300 justify-center items-center hover:cursor-pointer hover:bg-cyan-500 p-2 hover:text-white rounded-xs w-full">
          <button className="">
            Editar
          </button>
        </Link>
      </div>
    </div>
  );
};
