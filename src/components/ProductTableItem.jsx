import { Link } from "react-router-dom";
import { deleteProduct } from "../api/products.api";

export const ProductTableItem = ({ product }) => {
  return (
    <div className="hover:bg-amber-50 flex gap-4">
      <Link
        to={`/producto/ver/${product.id}`}
        className="hover:text-gray-200 text-black underline"
      >
        <p>{product.name}</p>
      </Link>
      <div className="block">
        <button
          onClick={() => {
            deleteProduct(product.id);
            window.location.reload();
          }}
          className="hover:cursor-pointer bg-red-600 text-white rounded-xs p-2"
        >
          Delete
        </button>
        <Link to={`/producto/${product.id}`}>
          <button className="hover:cursor-pointer hover:bg-cyan-400 hover:text-gray-500 p-2 rounded-xs">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};
