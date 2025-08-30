import { deleteCategory } from "../api/products.api";

export const CategoryTableItem = ({ category, reload }) => {
  const handleDelete = async () => {
    await deleteCategory(category.id);
    reload();
  };

  return (
    <div className='border-1 border-gray-200 grid grid-cols-2 w-full h-full'>
      <div className="flex justify-center items-center p-2 border-gray-50`">
        <h2>{category.name}</h2>
      </div>
      <div className="flex justify-center items-center p-1 ">
        <button onClick={handleDelete} className="hover:bg-red-600 bg-red-500 h-full text-white p-2">Eliminar</button>
      </div>
    </div>
  );
};
