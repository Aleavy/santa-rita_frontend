import { deleteCategory } from "../api/products.api";

export const CategoryTableItem = ({ category, reload }) => {
  const handleDelete = async () => {
    await deleteCategory(category.id);
    reload();
  };

  return (
    <div>
      <h2>{category.name}</h2>
      <div>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};
