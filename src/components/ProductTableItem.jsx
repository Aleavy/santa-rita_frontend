import { Link } from "react-router-dom";
import { deleteProduct } from "../api/products.api";

export const ProductTableItem = ({ product, reload }) => {
  const handleDelete = async () => {
    await deleteProduct(product.id);
    reload();
  };

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
          onClick={handleDelete}
          className="hover:cursor-pointer bg-red-600 text-white rounded-xs p-2"
        >
          Eliminar
        </button>
        <Link to={`/producto/${product.id}`}>
          <button className="hover:cursor-pointer hover:bg-cyan-400 hover:text-gray-500 p-2 rounded-xs">
            Editar
          </button>
        </Link>
      </div>
    </div>
  );
};
