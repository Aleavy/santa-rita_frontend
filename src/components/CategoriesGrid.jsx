import { useEffect, useState } from "react";
import { CategoryTableItem } from "./CategoryTableItem";
import { getAllCategories } from "../api/products.api";

export const CategoriesGrid = () => {
  const [categories, setCategories] = useState([]);
  async function loadCategories() {
    const res = await getAllCategories();
    setCategories(res.data);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <div className="grid w-full md:w-[50%]"  >
        <div className="grid grid-cols-2 ">
          <div className="flex justify-center items-center"><h2>Nombre</h2></div>
          <div className="flex justify-center items-center"><h2>Accion</h2></div>
        </div>
        <div className="flex flex-col items-center w-full  overflow-y-scroll max-h-[70%]">
          {categories.map((category) => (
            <CategoryTableItem
              key={category.id}
              category={category}
              reload={loadCategories}
            />
          ))}
        </div>
      </div>
    </>
  );
};
