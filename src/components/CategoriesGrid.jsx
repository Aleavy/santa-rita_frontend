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
      <div>
        {categories.map((category) => (
          <CategoryTableItem
            key={category.id}
            category={category}
            reload={loadCategories}
          />
        ))}
      </div>
    </>
  );
};
