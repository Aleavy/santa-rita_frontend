import { getProductsByCategory, getAllCategories } from "../api/products.api";
import { useEffect, useState } from "react";
import { CategoryCard } from "./CategoryCard";

export const HamburguerMenu = () => {
  const [categories, setCategories] = useState([]);

  function crossX() {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".offscreen-menu");

    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  }

  useEffect(() => {
    const loadCategories = async () => {
      const res = await getAllCategories();
      console.log(res);
      setCategories(res.data);
    };
    loadCategories();
  }, []);

  return (
    <>
      <div className="offscreen-menu items-start justify-start top-0 sm:top-[50px]">
        <div
          onClick={crossX}
          className="sm:hidden cursor-pointer py-2 px-4 w-[100%] font-light bg-gray-100 flex tracking-widest gap-3 items-center text-sm/7 text-black"
        >
          <span className="text-xl">X</span>
          <span className="font-bold text-base">Cerrar</span>
        </div>

        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div onClick={crossX} className="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
